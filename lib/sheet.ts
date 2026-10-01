import type { Lead } from "./lead";

const SHEET_TIMEOUT_MS = 5000;

// Дубль заявки в Google-таблицу через веб-приложение Apps Script (_tools/lead-sheet.gs).
// Возвращает true, если строка записана. Без SHEETS_WEBHOOK_URL тихо пропускает: таблица необязательна.
export async function pushToSheet(lead: Lead, ip: string): Promise<boolean> {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) return false;
  try {
    // Apps Script отвечает редиректом на googleusercontent: fetch его проходит, curl -X POST нет.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: lead.name, phone: lead.phone, company: lead.company, turnover: lead.turnover, lang: lead.lang, page: lead.page, ip, secret: process.env.SHEETS_SECRET ?? "" }),
      redirect: "follow",
      signal: AbortSignal.timeout(SHEET_TIMEOUT_MS),
    });
    const data: unknown = await res.json().catch(() => null);
    const isOk = typeof data === "object" && data !== null && (data as { ok?: unknown }).ok === true;
    if (!isOk) console.error("[lead] таблица не приняла заявку", res.status, data);
    return isOk;
  } catch (err) {
    console.error("[lead] таблица недоступна", err);
    return false;
  }
}
