"use client";

import { useState } from "react";
import type { Content, Locale } from "@/lib/content/types";
import { SITE } from "@/lib/site";
import s from "./LeadForm.module.css";

type Status = "idle" | "sending" | "ok" | "err" | "invalid";

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
    if (payload.name.trim().length < 2 || payload.phone.replace(/\D/g, "").length < 9) {
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
      <div className={s.done} role="status">
        <p className={s.doneT}>{t.ok}</p>
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate>
      <label className={s.field}>
        <span>{t.name}</span>
        <input name="name" autoComplete="name" required minLength={2} maxLength={80} />
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
      <button className={`btn btn-gold ${s.submit}`} type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit}
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
