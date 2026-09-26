import type { Locale } from "./services";

export const contacts = {
  phone1: "+998 97 732 18 48",
  phone1Href: "tel:+998977321848",
  phone2: "+998 94 647 80 45",
  phone2Href: "tel:+998946478045",
  telegram: "https://t.me/Davronbekov_Bekzod",
  telegramHandle: "@Davronbekov_Bekzod",
  instagram: "https://instagram.com/sifatbuxgalter",
  map: "https://maps.app.goo.gl/pBtkJ7jbAEkg3x3g7",
};

export const clients: { name: string; file: string }[] = [
  { name: "Avangard", file: "avangard" },
  { name: "Aiwa", file: "aiwa" },
  { name: "Роллтон", file: "rollton" },
  { name: "Klass Export", file: "klass-export" },
  { name: "Inesis", file: "inesis" },
  { name: "Profit Stone", file: "profit-stone" },
  { name: "Poytaxt Aqua Wave", file: "poytaxt" },
  { name: "Oq Tepa Dental", file: "oq-tepa-dental" },
  { name: "Bumble", file: "bumble" },
  { name: "Жалын Көмір", file: "zhalyn-komir" },
  { name: "TSG", file: "tsg" },
  { name: "West Med Group", file: "west-med" },
];

export type UiStrings = {
  skip: string;
  nav: { services: string; pricing: string; team: string; faq: string; contact: string };
  headerCta: string;
  langSwitch: string;
  breadcrumbHome: string;
  breadcrumbServices: string;
  allServices: string;
  relatedTitle: string;
  ctaTitle: string;
  ctaText: string;
  orCall: string;
  telegramLine: string;
  form: {
    name: string;
    phone: string;
    company: string;
    turnover: string;
    turnovers: string[];
    submit: string;
    sending: string;
    privacy: string;
    privacyLink: string;
    error: string;
  };
  footer: { online: string; office: string; address: string; landmark: string; mapLink: string; contact: string; services: string; copyright: string };
  readMore: string;
  pricingLink: string;
};

export const ui: Record<Locale, UiStrings> = {
  uz: {
    skip: "Asosiy qismga oʻtish",
    nav: { services: "Xizmatlar", pricing: "Narxlar", team: "Jamoa", faq: "Savollar", contact: "Aloqa" },
    headerCta: "10 daqiqalik qoʻngʻiroq",
    langSwitch: "RU",
    breadcrumbHome: "Bosh sahifa",
    breadcrumbServices: "Xizmatlar",
    allServices: "Barcha xizmatlar",
    relatedTitle: "Bogʻliq xizmatlar",
    ctaTitle: "Bepul 10 daqiqalik qoʻngʻiroq",
    ctaText:
      "Telefoningizni qoldiring — Bekzod 1 soat ichida, odatda 10 daqiqada qoʻngʻiroq qiladi. Hech qayerga borish shart emas: ofisda uchrashuvni faqat oʻzingiz xohlasangiz belgilaymiz.",
    orCall: "Yoki hoziroq qoʻngʻiroq qiling",
    telegramLine: "Yozishmani afzal koʻrasizmi? Bekzodga Telegramda yozing",
    form: {
      name: "Ismingiz",
      phone: "Telefon",
      company: "Kompaniya nomi (ixtiyoriy)",
      turnover: "Yillik aylanma",
      turnovers: ["1 mlrd soʻmgacha", "1–5 mlrd soʻm", "5–20 mlrd soʻm", "20 mlrd soʻmdan ortiq"],
      submit: "Qoʻngʻiroqni kutaman",
      sending: "Yuborilmoqda…",
      privacy: "Maʼlumotlaringiz faqat siz bilan bogʻlanish uchun ishlatiladi.",
      privacyLink: "Maxfiylik siyosati",
      error: "Yuborilmadi. Iltimos, qoʻngʻiroq qiling yoki Telegramda yozing.",
    },
    footer: {
      online: "Haftada 7 kun aloqadamiz",
      office: "Ofis",
      address: "Toshkent, Yangi Sergeli koʻchasi, 7/2",
      landmark: "Moʻljal: VOLVO binosi",
      mapLink: "Xaritada ochish ↗",
      contact: "Aloqa",
      services: "Xizmatlar",
      copyright: "© 2026 Sifat Buxgalter",
    },
    readMore: "Batafsil →",
    pricingLink: "Narx qanday shakllanadi →",
  },
  ru: {
    skip: "К основному содержанию",
    nav: { services: "Услуги", pricing: "Цены", team: "Команда", faq: "Вопросы", contact: "Контакты" },
    headerCta: "Звонок на 10 минут",
    langSwitch: "UZ",
    breadcrumbHome: "Главная",
    breadcrumbServices: "Услуги",
    allServices: "Все услуги",
    relatedTitle: "Связанные услуги",
    ctaTitle: "Бесплатный звонок на 10 минут",
    ctaText:
      "Оставьте телефон — Бекзод перезвонит в течение часа, обычно за 10 минут. Никаких поездок: встречу в офисе назначим, только если сами захотите.",
    orCall: "Или позвоните прямо сейчас",
    telegramLine: "Удобнее переписка? Напишите Бекзоду в Telegram",
    form: {
      name: "Ваше имя",
      phone: "Телефон",
      company: "Название компании (необязательно)",
      turnover: "Годовой оборот",
      turnovers: ["До 1 млрд сум", "1–5 млрд сум", "5–20 млрд сум", "Больше 20 млрд сум"],
      submit: "Жду звонка",
      sending: "Отправляем…",
      privacy: "Данные используем только чтобы связаться с вами.",
      privacyLink: "Политика конфиденциальности",
      error: "Не отправилось. Позвоните или напишите в Telegram.",
    },
    footer: {
      online: "На связи 7 дней в неделю",
      office: "Офис",
      address: "Ташкент, ул. Янги Сергели, 7/2",
      landmark: "Ориентир: здание VOLVO",
      mapLink: "Открыть на карте ↗",
      contact: "Связь",
      services: "Услуги",
      copyright: "© 2026 Sifat Buxgalter",
    },
    readMore: "Подробнее →",
    pricingLink: "Как формируется цена →",
  },
};
