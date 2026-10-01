"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ChatMsg } from "@/lib/chat/store";
import type { Locale } from "@/lib/content/types";

const SID_KEY = "sifat-chat-sid";
const PHONE_KEY = "sifat-chat-phone";
const SEEN_KEY = "sifat-chat-seen";
const POLL_OPEN_MS = 4000;
const POLL_CLOSED_MS = 15000;

// localStorage может бросить (приватный режим): тогда чат живёт до перезагрузки.
const load = (k: string) => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const save = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v);
  } catch {}
};

export function useChat(lang: Locale, isOpen: boolean) {
  // До гидрации msgs пуст, поэтому значения из localStorage на разметку первого рендера не влияют.
  const [sid, setSid] = useState<string | null>(() => (typeof window === "undefined" ? null : load(SID_KEY)));
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const [pending, setPending] = useState<string[]>([]);
  const [hasPhone, setHasPhone] = useState(() => typeof window !== "undefined" && load(PHONE_KEY) === "1");
  const [isError, setIsError] = useState(false);
  const [seen, setSeen] = useState(() => (typeof window === "undefined" ? 0 : Number(load(SEEN_KEY)) || 0));
  const count = useRef(0);

  const poll = useCallback(async (id: string) => {
    try {
      const res = await fetch(`/api/chat?sid=${id}&after=${count.current}`, { cache: "no-store" });
      const data = (await res.json()) as { ok: boolean; messages?: ChatMsg[] };
      if (!data.ok || !data.messages?.length) return;
      count.current += data.messages.length;
      setMsgs((prev) => [...prev, ...data.messages!]);
    } catch {}
  }, []);

  useEffect(() => {
    if (!sid) return;
    poll(sid);
    const t = setInterval(() => !document.hidden && poll(sid), isOpen ? POLL_OPEN_MS : POLL_CLOSED_MS);
    return () => clearInterval(t);
  }, [sid, isOpen, poll]);

  const opCount = msgs.filter((m) => m.from === "op").length;
  // Непрочитанные считаем только при закрытом окне: открыли или закрыли, значит всё увидели.
  const markSeen = () => {
    save(SEEN_KEY, String(opCount));
    setSeen(opCount);
  };

  const post = async (body: object): Promise<boolean> => {
    const id = sid ?? crypto.randomUUID();
    if (!sid) {
      save(SID_KEY, id);
      setSid(id);
    }
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, sid: id, lang, page: location.pathname }),
      });
      const isOk = res.ok;
      setIsError(!isOk);
      if (isOk) await poll(id);
      return isOk;
    } catch {
      setIsError(true);
      return false;
    }
  };

  const send = async (text: string) => {
    setPending((p) => [...p, text]);
    await post({ kind: "msg", text });
    setPending((p) => p.slice(1));
  };

  const sendPhone = async (phone: string) => {
    if (await post({ kind: "phone", phone })) {
      save(PHONE_KEY, "1");
      setHasPhone(true);
    }
  };

  const hasVisitorMsg = msgs.some((m) => m.from === "v");
  return { msgs, pending, send, sendPhone, hasPhone, hasVisitorMsg, isError, markSeen, unread: isOpen ? 0 : Math.max(0, opCount - seen) };
}
