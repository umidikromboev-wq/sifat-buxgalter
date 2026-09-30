// Тексты редизайна «glass + beige» (RU). Первые два экрана: герой и «Когда к нам приходят».
export const PHONE = { code: "+998 97", num: "732 18 48", href: "tel:+998977321848" } as const;
export const TELEGRAM = { label: "@Davronbekov_Bekzod", href: "https://t.me/Davronbekov_Bekzod" } as const;

export const NAV = [
  { label: "Главная", href: "/" },
  { label: "Статьи", href: "/ru/stati" },
  { label: "Контакты", href: "#kontakty" },
] as const;

export const HERO = {
  factTitle: ["10 минут", "на ответ"],
  factText: "На связи 7 дней в неделю, в Telegram-группе вашей компании.",
  h1Muted: "Бухгалтерский аутсорсинг.",
  h1: "Налоговый риск берём на себя.",
  panelTitle: "Штраф по нашей ошибке платим сами.",
  panelText: "Ведём учёт и налоги ООО в Ташкенте. Законное снижение налогов входит в абонемент, без процента от экономии.",
  cta: "Бесплатный звонок на 10 минут",
} as const;

export type Icon = "calc" | "handoff" | "letter" | "lock" | "eye" | "growth" | "law";
export type Case = { title: string; img: number; icon: Icon; href: string; size: "narrow" | "tall" | "wide" };

export const CASES_HEAD = {
  kicker: "Когда к нам приходят",
  h2: ["Обычно пишут", "в двух случаях"],
  lead: "Когда с бухгалтером что-то не так. Или когда всё выглядит нормально, но никто не проверял, так ли это.",
} as const;

export const CASES: Case[] = [
  { title: "Всё выглядит нормально, но сколько налогов вы переплачиваете, никто не считал", img: 1, icon: "calc", href: "/ru/uslugi/nalogovoe-konsultirovanie", size: "narrow" },
  { title: "Бухгалтер уходит: декрет, пенсия, другая работа, и дела передать некому", img: 2, icon: "handoff", href: "/ru/stati/kak-prinyat-dela-u-buhgaltera", size: "narrow" },
  { title: "Пришло требование из налоговой или назначен налоговый аудит", img: 3, icon: "letter", href: "/ru/uslugi/nalogovye-proverki", size: "tall" },
  { title: "Банк заблокировал расчётный счёт", img: 4, icon: "lock", href: "/ru/uslugi/razblokirovka-scheta", size: "narrow" },
  { title: "Вы не видите, что делает бухгалтер: отчёта нет, ответа на вопрос ждёте часами", img: 5, icon: "eye", href: "/ru/uslugi/autsorsing-buhgalterii", size: "wide" },
  { title: "Оборот вырос, налоги тоже, а законный способ платить меньше никто не показывает", img: 6, icon: "growth", href: "/ru/stati/zakonnoe-snizhenie-nalogov", size: "wide" },
  { title: "Нет времени следить за новыми законами", img: 7, icon: "law", href: "/ru/uslugi/autsorsing-buhgalterii", size: "wide" },
];

export const CTA_CARD = {
  title: "В любом случае начинаем с одного шага: экспресс-аудита",
  text: "Проверяем последний период до того, как взять учёт. Первый звонок на 10 минут бесплатный.",
  cta: "Записаться на звонок",
} as const;
