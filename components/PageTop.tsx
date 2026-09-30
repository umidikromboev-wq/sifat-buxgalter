import Link from "next/link";
import type { Content, Locale } from "@/lib/content/types";
import type { Crumb } from "./pages/Crumbs";
import { Header } from "./Header";
import { Pill } from "./ui/Kit";
import { Letters } from "./ui/Letters";
import s from "./Top.module.css";

type Props = {
  lang: Locale;
  nav: Content["nav"];
  alt?: string;
  crumbs: Crumb[];
  kicker: string;
  h1: string;
  lead: string;
  meta?: React.ReactNode;
  img: "hero" | "desk";
  panel?: { title: string; text: string; cta: string };
};

const IMG = {
  hero: { src: "/glass/hero.webp", w: 1344, h: 752 },
  desk: { src: "/glass/desk.webp", w: 880, h: 663 },
} as const;

// Верх внутренней страницы — тот же кадр и та же сетка, что на главной, только ниже и темнее.
export function PageTop({ lang, nav, alt, crumbs, kicker, h1, lead, meta, img, panel }: Props) {
  const pic = IMG[img];
  return (
    <section className={`${s.top} ${s.inner}`} aria-labelledby="page-h">
      <img className={s.img} src={pic.src} alt={img === "hero" ? (lang === "uz" ? "Toshkentdagi biznes-markaz" : "Деловой центр в Ташкенте") : lang === "uz" ? "Buxgalter ish stoli" : "Рабочий стол бухгалтера"} width={pic.w} height={pic.h} fetchPriority="high" />
      <Header lang={lang} t={nav} alt={alt} />
      <div className={`wrap grid12 ${s.body}`}>
        <div className={s.main}>
          <nav aria-label={crumbs[0].name} className={s.crumbs}>
            <ol>
              {crumbs.map((c, i) => (
                <li key={c.href}>
                  {i < crumbs.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
                </li>
              ))}
            </ol>
          </nav>
          <p className={s.kicker}>{kicker}</p>
          <h1 id="page-h" className={s.h1} aria-label={h1}>
            <Letters text={h1} />
          </h1>
          <p className={s.lead}>{lead}</p>
          {meta && <p className={s.meta}>{meta}</p>}
        </div>
        {panel && (
          <div className={`glass ${s.panel}`}>
            <p className={s.panelTitle}>{panel.title}</p>
            <p className={s.panelText}>{panel.text}</p>
            <Pill label={panel.cta} href="#ariza" />
          </div>
        )}
      </div>
    </section>
  );
}
