"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/content/services";
import { ui } from "@/content/site";
import { sectionPath } from "@/content/routes";

export default function LeadForm({ locale, source }: { locale: Locale; source: string }) {
  const t = ui[locale].form;
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(false);
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, locale, source, page: typeof window !== "undefined" ? window.location.pathname : "" }),
      });
      if (!r.ok) throw new Error("bad");
      router.push(sectionPath(locale, "thanks"));
    } catch {
      setErr(true);
      setBusy(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} id="ariza">
      <label htmlFor="name">{t.name}</label>
      <input id="name" name="name" type="text" required autoComplete="name" />
      <label htmlFor="phone">{t.phone}</label>
      <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+998" />
      <label htmlFor="company">{t.company}</label>
      <input id="company" name="company" type="text" autoComplete="organization" />
      <fieldset>
        <legend>{t.turnover}</legend>
        <div className="radios">
          {t.turnovers.map((v, i) => (
            <label key={v}>
              <input type="radio" name="turnover" value={v} defaultChecked={i === 1} /> {v}
            </label>
          ))}
        </div>
      </fieldset>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: -9999 }} aria-hidden="true" />
      <button className="btn btn-gold" type="submit" disabled={busy}>
        {busy ? t.sending : t.submit}
      </button>
      {err && <div className="err">{t.error}</div>}
      <div className="privacy">
        {t.privacy} <Link href={sectionPath(locale, "privacy")}>{t.privacyLink}</Link>
      </div>
    </form>
  );
}
