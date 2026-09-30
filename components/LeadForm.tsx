"use client";

import { useState } from "react";
import type { Content, Locale } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import { Glyph } from "./ui/Glyph";
import s from "./LeadForm.module.css";

type Status = "idle" | "sending" | "ok" | "err" | "invalid";

const MIN_NAME = 2;
const MIN_PHONE_DIGITS = 9;

export function LeadForm({ t, lang }: { t: Content["form"]; lang: Locale }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      turnover: String(fd.get("turnover") ?? ""),
      website: String(fd.get("website") ?? ""),
      lang,
      page: window.location.pathname,
    };
    if (payload.name.trim().length < MIN_NAME || payload.phone.replace(/\D/g, "").length < MIN_PHONE_DIGITS) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className={`glass ${s.done}`} role="status">
        <span className="chip">
          <Glyph name="check" />
        </span>
        <p className={s.doneT}>{t.ok}</p>
      </div>
    );
  }

  return (
    <form className={`glass ${s.form}`} onSubmit={onSubmit} noValidate>
      <label className={s.field}>
        <span>{t.name}</span>
        <input name="name" autoComplete="name" required minLength={MIN_NAME} maxLength={80} />
      </label>
      <label className={s.field}>
        <span>{t.phone}</span>
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+998" required maxLength={32} />
      </label>
      <label className={s.field}>
        <span>{t.company}</span>
        <input name="company" autoComplete="organization" maxLength={120} />
      </label>
      <fieldset className={s.radios}>
        <legend>{t.turnover}</legend>
        {t.turnoverOpts.map((o, i) => (
          <label key={o} className={s.radio}>
            <input type="radio" name="turnover" value={o} defaultChecked={i === 1} />
            <span>{o}</span>
          </label>
        ))}
      </fieldset>
      {/* Ловушка для ботов: людям не видна и не читается экранным диктором */}
      <div className={s.hp} aria-hidden="true">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="pill" type="submit" disabled={status === "sending"}>
        <span>{status === "sending" ? t.sending : t.submit}</span>
        <span className="pill-dot">
          <Glyph name="arrow" />
        </span>
      </button>
      <p className={s.msg} role="alert" aria-live="polite">
        {status === "invalid" && t.invalid}
        {status === "err" && (
          <>
            {t.err}{" "}
            <a href={SITE.phones[0].href} className="num">
              {SITE.phones[0].label}
            </a>
          </>
        )}
      </p>
      <p className={s.privacy}>{t.privacy}</p>
    </form>
  );
}
