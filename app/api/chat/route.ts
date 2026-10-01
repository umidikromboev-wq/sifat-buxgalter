import { chatPostSchema, sidSchema, type ChatPost } from "@/lib/chat/schema";
import { isStoreReady, linkTg, pushMsg, readMsgs } from "@/lib/chat/store";
import { esc, sendToGroup } from "@/lib/chat/telegram";
import { pushToSheet } from "@/lib/sheet";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 30;
// Лимит в памяти инстанса: не абсолютен на serverless, но отсекает простой флуд.
const hits = new Map<string, number[]>();

function isLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.set(ip, [...recent, now]);
  return recent.length >= MAX_PER_WINDOW;
}

const tag = (sid: string) => `#c${sid.replace(/-/g, "").slice(0, 6)}`;

function groupText(p: ChatPost, isFirst: boolean): string {
  if (p.kind === "phone") return `📞 ${tag(p.sid)} оставил телефон: <b>${esc(p.phone)}</b>`;
  if (!isFirst) return `💬 ${tag(p.sid)}\n${esc(p.text)}`;
  return [
    `💬 <b>Новый чат с сайта</b> ${tag(p.sid)}`,
    `Язык: ${p.lang.toUpperCase()}${p.page ? ` · ${esc(p.page)}` : ""}`,
    "",
    esc(p.text),
    "",
    "<i>Ответьте реплаем на это сообщение: ответ появится у человека на сайте.</i>",
  ].join("\n");
}

export async function POST(req: Request) {
  if (!isStoreReady()) return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isLimited(ip)) return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }
  const parsed = chatPostSchema.safeParse(body);
  if (!parsed.success) return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  const p = parsed.data;
  if (p.website) return Response.json({ ok: true });

  try {
    let isFirst = false;
    if (p.kind === "msg") isFirst = (await pushMsg(p.sid, { from: "v", text: p.text, ts: Date.now() })) === 1;
    else await pushToSheet({ name: `Чат ${tag(p.sid)}`, phone: p.phone, company: "", turnover: "", lang: p.lang, page: p.page, website: "" }, ip);
    const msgId = await sendToGroup(groupText(p, isFirst));
    if (msgId === null) return Response.json({ ok: false, error: "delivery" }, { status: 502 });
    await linkTg(msgId, p.sid);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[chat] не сохранилось", err);
    return Response.json({ ok: false, error: "store" }, { status: 502 });
  }
}

export async function GET(req: Request) {
  if (!isStoreReady()) return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  const url = new URL(req.url);
  const sid = sidSchema.safeParse(url.searchParams.get("sid"));
  const after = Math.max(0, Number(url.searchParams.get("after")) || 0);
  if (!sid.success) return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  try {
    const messages = await readMsgs(sid.data, after);
    return Response.json({ ok: true, messages }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[chat] не прочиталось", err);
    return Response.json({ ok: false, error: "store" }, { status: 502 });
  }
}
