import type { Locale } from "./services";

const months: Record<Locale, { full: string[]; short: string[] }> = {
  uz: {
    full: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"],
    short: ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sent", "okt", "noy", "dek"],
  },
  ru: {
    full: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
    short: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сент", "окт", "ноя", "дек"],
  },
};

/** Hisobot davri = oldingi oy (joriy oy hisoboti hali tayyor emas). Toshkent vaqti. */
export function reportPeriod(locale: Locale, now = new Date()) {
  const tz = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tashkent" }));
  const d = new Date(tz.getFullYear(), tz.getMonth() - 1, 1);
  const i = d.getMonth();
  return { month: months[locale].full[i], short: months[locale].short[i], year: String(d.getFullYear()) };
}

export function fillPeriod(text: string, p: ReturnType<typeof reportPeriod>) {
  return text.replace("{month}", p.month).replace("{year}", p.year).replace("{m}", p.short);
}

/** Keyingi oy nomi (jaunlik/skarsity badge uchun): uz — "oktabrga", ru — "в октябре" */
export function nextMonthLabel(locale: Locale, now = new Date()) {
  const tz = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tashkent" }));
  const i = (tz.getMonth() + 1) % 12;
  if (locale === "ru") {
    const prep = ["январе", "феврале", "марте", "апреле", "мае", "июне", "июле", "августе", "сентябре", "октябре", "ноябре", "декабре"];
    return "в " + prep[i];
  }
  return months.uz.full[i] + "ga";
}
