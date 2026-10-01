// Минимальная обёртка над Bot API для чата: отправить в группу и поставить реакцию.
type TgResult<T> = { ok: boolean; result?: T; description?: string };

async function call<T>(method: string, body: object): Promise<T | null> {
  const token = process.env.TG_BOT_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await res.json()) as TgResult<T>;
    if (!data.ok) console.error(`[chat] Telegram ${method}:`, data.description);
    return data.ok ? (data.result ?? null) : null;
  } catch (err) {
    console.error(`[chat] Telegram ${method} недоступен`, err);
    return null;
  }
}

export async function sendToGroup(text: string): Promise<number | null> {
  const chatId = process.env.TG_CHAT_ID;
  if (!chatId) return null;
  const msg = await call<{ message_id: number }>("sendMessage", { chat_id: chatId, text, parse_mode: "HTML" });
  return msg?.message_id ?? null;
}

export async function react(chatId: number, messageId: number, emoji: string): Promise<void> {
  await call("setMessageReaction", { chat_id: chatId, message_id: messageId, reaction: [{ type: "emoji", emoji }] });
}

export const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c] ?? c);
