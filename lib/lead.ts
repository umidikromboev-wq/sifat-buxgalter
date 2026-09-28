/**
 * The one place a lead leaves the browser.
 *
 * This site is frontend-only, so there is no API route here. Point
 * `NEXT_PUBLIC_LEAD_ENDPOINT` at whatever receives leads — a CRM webhook, a
 * Telegram bot, your own backend — and every form on the site posts this JSON
 * to it. Until that variable is set, nothing is sent: the form still walks the
 * visitor to the thank-you page, so a demo build behaves like the real one, and
 * the console says loudly that the lead went nowhere.
 */
export type Lead = {
  name: string;
  phone: string;
  company?: string;
  turnover?: string;
  source: "hero" | "form" | "modal" | "contact" | "services";
  locale: string;
};

const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

export async function submitLead(lead: Lead): Promise<void> {
  if (!endpoint) {
    console.warn(
      "[lead] NEXT_PUBLIC_LEAD_ENDPOINT is not set — this lead was not sent anywhere:",
      lead,
    );
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, page: window.location.href }),
  });

  if (!response.ok) {
    throw new Error(`Lead endpoint answered ${response.status}`);
  }
}

/** Uzbek numbers only: +998 and nine digits, whatever the visitor typed. */
export function normalizePhone(value: string): string {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("998")) digits = digits.slice(3);
  return digits.slice(0, 9);
}

export function formatPhone(value: string): string {
  const d = normalizePhone(value);
  if (!d) return "";
  let out = "+998 (" + d.slice(0, 2);
  if (d.length >= 2) out += ")";
  if (d.length > 2) out += " " + d.slice(2, 5);
  if (d.length > 5) out += "-" + d.slice(5, 7);
  if (d.length > 7) out += "-" + d.slice(7, 9);
  return out;
}

export function isValidPhone(value: string): boolean {
  return normalizePhone(value).length === 9;
}
