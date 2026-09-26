import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  // honeypot
  if (data.website) return NextResponse.json({ ok: true });
  const name = (data.name || "").toString().slice(0, 100).trim();
  const phone = (data.phone || "").toString().slice(0, 40).trim();
  if (!name || !phone) return NextResponse.json({ ok: false }, { status: 400 });

  const lines = [
    "🆕 Ariza — sayt",
    `Ism: ${name}`,
    `Telefon: ${phone}`,
    data.company ? `Kompaniya: ${data.company.toString().slice(0, 120)}` : "",
    data.turnover ? `Aylanma: ${data.turnover}` : "",
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
      if (!r.ok) console.error("telegram error", await r.text());
    } catch (e) {
      console.error("telegram fail", e);
    }
  } else {
    console.log("[lead]", text);
  }
  return NextResponse.json({ ok: true });
}
