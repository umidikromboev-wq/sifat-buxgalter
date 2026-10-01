"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { CHAT_COPY, MANAGER } from "@/lib/chat/copy";
import { MSG_MAX } from "@/lib/chat/schema";
import type { Locale } from "@/lib/content/types";
import { Glyph } from "../ui/Glyph";
import { useChat } from "./useChat";
import s from "./ChatWidget.module.css";

const SHEET_MQ = "(max-width: 760px)";

function Avatar({ name, size }: { name: string; size: "s" | "m" }) {
  return (
    <span className={`${s.avatar} ${size === "s" ? s.avS : s.avM}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- маленький аватар, как остальные картинки сайта */}
      {MANAGER.photo ? <img src={MANAGER.photo} alt="" width={MANAGER.w} height={MANAGER.h} loading="lazy" decoding="async" /> : name.slice(0, 1)}
      <i className={s.online} aria-hidden="true" />
    </span>
  );
}

// Окно чата с менеджером: сообщение уходит в группу заявок, реплай менеджера в Telegram приходит сюда.
export function ChatWidget({ lang }: { lang: Locale }) {
  const t = CHAT_COPY[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const chat = useChat(lang, isOpen);
  const id = useId();
  const list = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);


  useEffect(() => {
    list.current?.scrollTo({ top: list.current.scrollHeight, behavior: "smooth" });
  }, [chat.msgs.length, chat.pending.length, isOpen]);

  const toggle = (next: boolean) => {
    chat.markSeen();
    setIsOpen(next);
  };
  const toggleRef = useRef(toggle);
  useEffect(() => {
    toggleRef.current = toggle;
  });

  useEffect(() => {
    if (!isOpen) return;
    // На телефоне фокус сразу поднял бы клавиатуру и закрыл полэкрана: фокусируем только с мышью.
    if (matchMedia("(pointer: fine)").matches) input.current?.focus({ preventScroll: true });
    // Шторка на телефоне: страница под ней не прокручивается.
    const isSheet = matchMedia(SHEET_MQ).matches;
    // Клавиатура уменьшает видимую область: подгоняем окно под неё, иначе поле ввода уходит под клавиатуру.
    const vv = window.visualViewport;
    const fit = () => {
      if (!vv || !panel.current) return;
      panel.current.style.setProperty("--vvh", `${vv.height}px`);
      panel.current.style.setProperty("--vvt", `${vv.offsetTop}px`);
    };
    if (isSheet) {
      document.documentElement.style.overflow = "hidden";
      fit();
      vv?.addEventListener("resize", fit);
      vv?.addEventListener("scroll", fit);
    }
    const onKey = (e: globalThis.KeyboardEvent) => e.key === "Escape" && toggleRef.current(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (isSheet) document.documentElement.style.overflow = "";
      vv?.removeEventListener("resize", fit);
      vv?.removeEventListener("scroll", fit);
    };
  }, [isOpen]);

  const submit = (e?: FormEvent) => {
    e?.preventDefault();
    const v = text.trim();
    if (!v) return;
    setText("");
    chat.send(v);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) submit(e);
  };
  const submitPhone = (e: FormEvent) => {
    e.preventDefault();
    if (phone.trim()) chat.sendPhone(phone.trim());
  };

  return (
    <div className={s.root}>
      <section ref={panel} id={id} className={s.panel} data-open={isOpen} role="dialog" aria-label={`${t.name}, ${t.role}`} inert={!isOpen}>
        <header className={s.head}>
          <Avatar name={t.name} size="m" />
          <div className={s.who}>
            <p className={s.name}>{t.name}</p>
            <p className={s.role}>{t.role}</p>
            <p className={s.status}>{t.status}</p>
          </div>
          <button type="button" className={s.x} aria-label={t.close} onClick={() => toggle(false)}>
            <Glyph name="cross" />
          </button>
        </header>

        <div ref={list} className={s.list} aria-live="polite">
          <p className={`${s.msg} ${s.op}`}>{t.greeting}</p>
          {chat.msgs.map((m) => (
            <p key={`${m.ts}-${m.from}`} className={`${s.msg} ${m.from === "op" ? s.op : s.me}`}>
              {m.text}
            </p>
          ))}
          {!chat.hasVisitorMsg && chat.pending.length === 0 && (
            <div className={s.quick}>
              {t.quick.map((q) => (
                <button key={q} type="button" onClick={() => chat.send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}
          {chat.pending.map((p, i) => (
            <p key={`p${i}`} className={`${s.msg} ${s.me} ${s.sending}`}>
              {p}
            </p>
          ))}
          {chat.hasVisitorMsg && !chat.hasPhone && (
            <form className={s.phone} onSubmit={submitPhone}>
              <label htmlFor={`${id}-ph`}>{t.phoneAsk}</label>
              <div>
                <input id={`${id}-ph`} type="tel" inputMode="tel" autoComplete="tel" placeholder={t.phonePlaceholder} value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">{t.phoneSave}</button>
              </div>
            </form>
          )}
          {chat.hasPhone && chat.hasVisitorMsg && <p className={s.note}>{t.phoneDone}</p>}
          {chat.isError && <p className={`${s.note} ${s.err}`}>{t.error}</p>}
        </div>

        <form className={s.compose} onSubmit={submit}>
          <textarea ref={input} rows={1} maxLength={MSG_MAX} placeholder={t.placeholder} aria-label={t.placeholder} value={text} onChange={(e) => setText(e.target.value)} onKeyDown={onKeyDown} />
          <button type="submit" className={s.send} aria-label={t.send} disabled={!text.trim()}>
            <Glyph name="arrow" />
          </button>
        </form>
      </section>

      <button type="button" className={s.launcher} data-open={isOpen} aria-expanded={isOpen} aria-controls={id} aria-label={isOpen ? t.close : t.open} onClick={() => toggle(!isOpen)}>
        <Avatar name={t.name} size="s" />
        <span className={s.lText}>{t.launcher}</span>
        {chat.unread > 0 && !isOpen && <b className={s.badge}>{chat.unread}</b>}
      </button>
    </div>
  );
}
