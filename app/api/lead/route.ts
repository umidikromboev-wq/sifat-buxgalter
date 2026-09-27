import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Oddiy rate-limit: bitta IP dan 10 daqiqada 5 ta ariza (serverless instance ichida)
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;
function limited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  if (arr.length >= LIMIT) return true;
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

/** +998 XX XXX XX XX koʻrinishiga keltiradi; yaroqsiz boʻlsa null */
function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  let d = digits;
  if (d.length === 9) d = "998" + d; // 97 732 18 48
  if (d.length === 12 && d.startsWith("998")) {
    return `+998 ${d.slice(3, 5)} ${d.slice(5, 8)} ${d.slice(8, 10)} ${d.slice(10, 12)}`;
  }
  // chet el raqami — 10–15 raqam boʻlsa qabul qilamiz
  if (digits.length >= 10 && digits.length <= 15) return "+" + digits;
  return null;
}

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, reason: "rate" }, { status: 429 });

  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  // honeypot
  if (data.website) return NextResponse.json({ ok: true });

  const name = (data.name || "").toString().slice(0, 100).trim();
  const phone = normalizePhone((data.phone || "").toString().slice(0, 40));
  if (!name || !phone) return NextResponse.json({ ok: false, reason: "phone" }, { status: 400 });

  const lines = [
    "🆕 Ariza — sayt",
    `Ism: ${name}`,
    `Telefon: ${phone}`,
    data.company ? `Kompaniya: ${data.company.toString().slice(0, 120)}` : "",
    data.turnover ? `Aylanma: ${data.turnover.toString().slice(0, 60)}` : "",
    `Til: ${data.locale || "-"} · Sahifa: ${data.page || "-"} · Manba: ${data.source || "-"}`,
  ].filter(Boolean);
  const text = lines.join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (token && chat) {
    try {
      const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chat, text }),
      });
      if (!r.ok) {
        console.error("telegram error", await r.text(), text);
        // Lead yetib bormadi — foydalanuvchiga xato koʻrsatamiz, u qoʻngʻiroq qilsin
        return NextResponse.json({ ok: false, reason: "delivery" }, { status: 502 });
      }
    } catch (e) {
      console.error("telegram fail", e, text);
      return NextResponse.json({ ok: false, reason: "delivery" }, { status: 502 });
    }
  } else {
    console.log("[lead]", text);
  }
  return NextResponse.json({ ok: true });
}
