// Переписка чата в Upstash Redis через REST: без SDK, один fetch на команду.
const TTL_SEC = 30 * 24 * 60 * 60;

export type ChatMsg = { from: "v" | "op"; text: string; ts: number };

function creds(): { url: string; token: string } | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

export const isStoreReady = (): boolean => creds() !== null;

async function pipeline(cmds: (string | number)[][]): Promise<unknown[]> {
  const c = creds();
  if (!c) throw new Error("Upstash не настроен");
  const res = await fetch(`${c.url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${c.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmds),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { result?: unknown; error?: string }[];
  const failed = data.find((d) => d.error);
  if (failed) throw new Error(`Upstash: ${failed.error}`);
  return data.map((d) => d.result);
}

const listKey = (sid: string) => `chat:${sid}:m`;
const tgKey = (msgId: number) => `chat:tg:${msgId}`;

export async function pushMsg(sid: string, msg: ChatMsg): Promise<number> {
  const [len] = await pipeline([
    ["RPUSH", listKey(sid), JSON.stringify(msg)],
    ["EXPIRE", listKey(sid), TTL_SEC],
  ]);
  return Number(len);
}

export async function readMsgs(sid: string, after: number): Promise<ChatMsg[]> {
  const [raw] = await pipeline([["LRANGE", listKey(sid), after, -1]]);
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((r) => {
    try {
      return [JSON.parse(String(r)) as ChatMsg];
    } catch {
      return [];
    }
  });
}

// Какой сессии принадлежит сообщение в группе: по нему находим, кому ушёл реплай менеджера.
export async function linkTg(msgId: number, sid: string): Promise<void> {
  await pipeline([["SET", tgKey(msgId), sid, "EX", TTL_SEC]]);
}

export async function sidByTg(msgId: number): Promise<string | null> {
  const [sid] = await pipeline([["GET", tgKey(msgId)]]);
  return typeof sid === "string" ? sid : null;
}
