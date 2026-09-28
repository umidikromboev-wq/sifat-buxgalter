import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import { Check, Document, Lock, Telegram } from "@/components/icons";
import { Tilt } from "@/components/motion/Tilt";
import { raw } from "@/lib/i18n";

/**
 * The hero's right-hand side: a sample "report for the director" that fills
 * itself in — rows tick, the tax-burden line draws, the stamp lands — with a
 * Sunday-night Telegram exchange floating over its corner. All of it plays
 * from CSS on load, so it runs before hydration and without JavaScript.
 */
export async function ReportCard() {
  const t = await getTranslations("report");
  const rows = raw<{ label: string; value: string }[]>(t, "rows");
  const months = raw<string[]>(t, "months");

  return (
    <div className="relative mx-auto w-full max-w-117 lg:me-0">
      <div
        aria-hidden="true"
        className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(226_198_138/0.5),transparent)] blur-2xl"
      />

      <div className="intro" style={{ "--intro": 4 } as CSSProperties}>
        <div className="animate-float">
          <Tilt max={6} className="rounded-hero">
            <article
              aria-label={t("title")}
              className="relative overflow-hidden rounded-hero border border-white/80 bg-card p-6 shadow-float sm:p-7 dark:border-white/10"
            >
              {/* From `xl` the top-right corner is left empty on purpose: the
                  Telegram bubble floats over it. Narrower cards have no room
                  for the bubble, so it is only shown there. */}
              <header className="flex items-center gap-3 xl:pe-28">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-night text-gold-light">
                  <Document className="size-5" />
                </span>
                <div>
                  <p className="font-medium leading-tight text-ink">{t("title")}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-ink-3">
                    {t("period")}
                    <span className="rounded-full border border-gold/40 bg-gold-pale/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                      {t("sample")}
                    </span>
                  </p>
                </div>
              </header>

              <ul className="mt-6 divide-y divide-line border-y border-line">
                {rows.map((row, i) => (
                  <li
                    key={row.label}
                    className="report-row flex items-center justify-between gap-4 py-3.5 text-[15px]"
                    style={{ "--row": i } as CSSProperties}
                  >
                    <span className="text-ink-2">{row.label}</span>
                    <span className="flex items-center gap-2.5 font-medium tabular-nums text-ink">
                      {row.value}
                      <span className="grid size-5 place-items-center rounded-full bg-gold/15 text-gold-deep">
                        <Check className="report-check size-3.5" strokeWidth={2.2} />
                      </span>
                    </span>
                  </li>
                ))}
                <li
                  className="report-row flex items-center justify-between gap-4 py-3.5 text-[15px]"
                  style={{ "--row": rows.length } as CSSProperties}
                >
                  <span className="text-ink-2">{t("savingsLabel")}</span>
                  <span className="flex items-center gap-2.5">
                    <span className="redacted" aria-hidden="true" />
                    <span className="flex items-center gap-1 text-xs font-medium text-ink-3">
                      <Lock className="size-3.5" />
                      {t("savingsHidden")}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-ink">{t("chartLabel")}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-night px-2.5 py-1 text-xs font-medium text-on-night">
                    <span aria-hidden="true" className="text-gold-light">
                      ↓
                    </span>
                    {t("chartDelta")}
                  </span>
                </div>
                <svg viewBox="0 0 300 110" className="mt-4 h-28 w-full overflow-visible" aria-hidden="true">
                  <defs>
                    <linearGradient id="report-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#b08d45" stopOpacity="0.3" />
                      <stop offset="1" stopColor="#b08d45" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="report-stroke" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0" stopColor="#7c5e24" />
                      <stop offset="0.55" stopColor="#d6b36b" />
                      <stop offset="1" stopColor="#b08d45" />
                    </linearGradient>
                  </defs>
                  {[22, 55, 88].map((y) => (
                    <line key={y} x1="0" x2="300" y1={y} y2={y} className="stroke-line" strokeDasharray="2 5" />
                  ))}
                  <path
                    className="report-area"
                    d="M0 22 C30 22 36 36 60 36 S100 29 120 31 S156 56 180 56 S216 63 240 66 S278 82 300 84 L300 110 L0 110 Z"
                    fill="url(#report-area)"
                  />
                  <path
                    className="report-line"
                    pathLength={1}
                    d="M0 22 C30 22 36 36 60 36 S100 29 120 31 S156 56 180 56 S216 63 240 66 S278 82 300 84"
                    fill="none"
                    stroke="url(#report-stroke)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle className="report-dot stroke-card" cx="300" cy="84" r="5.5" fill="#b08d45" strokeWidth="2.5" />
                </svg>
                <div className="mt-2 flex justify-between text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-3">
                  {months.map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>

              <footer className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
                <p className="max-w-[62%] text-[13px] leading-snug text-ink-2">{t("signed")}</p>
                <Stamp label={t("stamp")} />
              </footer>
            </article>
          </Tilt>
        </div>
      </div>

      <div
        className="intro absolute -inset-e-10 -top-28 z-20 hidden w-62 xl:block"
        style={{ "--intro": 8 } as CSSProperties}
      >
        <div className="glass rounded-[22px] p-4">
          <div className="flex items-center gap-2 text-xs text-ink-3">
            <span className="grid size-7 place-items-center rounded-full bg-night text-gold-light">
              <Telegram className="size-3.5" />
            </span>
            <span className="font-semibold text-ink">Telegram</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{t("chatTime")}</span>
          </div>
          <p className="mt-3 rounded-2xl rounded-tl-md bg-sand px-3.5 py-2.5 text-[13px] leading-snug text-ink">
            {t("chatQuestion")}
          </p>
          <div className="relative mt-2 flex min-h-11 justify-end">
            <span className="typing absolute inset-e-0 top-0 inline-flex h-9 items-center gap-1 rounded-2xl rounded-tr-md bg-night px-3.5">
              <i />
              <i />
              <i />
            </span>
            <p className="chat-answer max-w-[90%] rounded-2xl rounded-tr-md bg-night px-3.5 py-2.5 text-[13px] leading-snug text-on-night dark:ring-1 dark:ring-white/10">
              {t("chatAnswer")}{" "}
              <span aria-hidden="true" className="text-gold-light">
                ✓✓
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stamp({ label }: { label: string }) {
  const text = `${label} · ${label} · `.toUpperCase();
  return (
    <div className="stamp relative size-23 shrink-0 text-gold-deep" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="size-full mix-blend-multiply dark:mix-blend-normal">
        <defs>
          <path id="stamp-ring" d="M50 50 m-35 0 a35 35 0 1 1 70 0 a35 35 0 1 1 -70 0" />
        </defs>
        <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="50" cy="50" r="42.5" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <text fill="currentColor" fontSize="8.6" fontWeight="600">
          <textPath href="#stamp-ring" textLength="214" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
        <path
          d="M39.5 50.5 47 58 61.5 42.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
