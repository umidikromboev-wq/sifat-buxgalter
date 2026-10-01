import { z } from "zod";
import { linkTg, pushMsg, sidByTg } from "@/lib/chat/store";
import { react } from "@/lib/chat/telegram";

// Вебхук бота: реплай менеджера в группе заявок уходит человеку в чат на сайте.
const updateSchema = z.object({
  message: z
    .object({
      message_id: z.number(),
      chat: z.object({ id: z.number() }),
      text: z.string().optional(),
      from: z.object({ is_bot: z.boolean() }).optional(),
      reply_to_message: z.object({ message_id: z.number() }).optional(),
    })
    .optional(),
});

export async function POST(req: Request) {
  const secret = process.env.TG_WEBHOOK_SECRET;
  if (!secret || req.headers.get("x-telegram-bot-api-secret-token") !== secret) {
    return new Response("forbidden", { status: 403 });
  }
  const parsed = updateSchema.safeParse(await req.json().catch(() => null));
  const m = parsed.success ? parsed.data.message : undefined;
  // Telegram повторяет апдейт, пока не получит 200, поэтому всё лишнее молча подтверждаем.
  if (!m?.reply_to_message || !m.text || m.from?.is_bot) return Response.json({ ok: true });
  if (String(m.chat.id) !== process.env.TG_CHAT_ID) return Response.json({ ok: true });

  try {
    const sid = await sidByTg(m.reply_to_message.message_id);
    if (!sid) return Response.json({ ok: true });
    await pushMsg(sid, { from: "op", text: m.text.slice(0, 2000), ts: Date.now() });
    await linkTg(m.message_id, sid);
    await react(m.chat.id, m.message_id, "👍");
  } catch (err) {
    console.error("[chat] реплай не доставлен", err);
  }
  return Response.json({ ok: true });
}
