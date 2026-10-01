import { formatLead, leadSchema } from "@/lib/lead";
import { pushToSheet } from "@/lib/sheet";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Лимит в памяти инстанса: на серверless не абсолютен, но отсекает простой флуд.
const hits = new Map<string, number[]>();

function isLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.set(ip, [...recent, now]);
  return recent.length >= MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;
  if (!token || !chatId) {
    console.error("[lead] TG_BOT_TOKEN / TG_CHAT_ID не заданы");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isLimited(ip)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }
  // Бот заполнил honeypot — делаем вид, что всё хорошо, и молчим.
  if (parsed.data.website) {
    return Response.json({ ok: true });
  }

  // Таблица и Telegram параллельно: заявка не теряется, если один из каналов лёг.
  const [sheet, telegram] = await Promise.all([pushToSheet(parsed.data, ip), sendTelegram(token, chatId, formatLead(parsed.data))]);
  if (!telegram && !sheet) {
    return Response.json({ ok: false, error: "delivery" }, { status: 502 });
  }
  return Response.json({ ok: true, delivered: { telegram, sheet } });
}

async function sendTelegram(token: string, chatId: string, text: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    if (!res.ok) console.error("[lead] Telegram ответил", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[lead] Telegram недоступен", err);
    return false;
  }
}
