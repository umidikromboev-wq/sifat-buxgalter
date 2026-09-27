import type { PagesBundle } from "../types";
import { articles } from "./articles";
import { services } from "./services";

export const uz: PagesBundle = {
  copy: {
    services: {
      seg: "xizmatlar",
      title: "Toshkentda MChJ uchun buxgalteriya xizmatlari",
      description:
        "Buxgalteriya autsorsingi, soliq maslahati, hisobni tiklash, soliq tekshiruvlari, hisob raqamini ochish, kadrlar va tashqi savdo — bitta shartnomada.",
      kicker: "Xizmatlar",
      h1: "MChJ uchun buxgalteriya xizmatlari",
      lead: "Tadbirkorga kerak boʻlgan hamma narsa — bitta shartnomada. Vazifangizni tanlang, uni qanday hal qilishimizni aytib beramiz.",
    },
    articles: {
      seg: "maqolalar",
      title: "Tadbirkorlar uchun buxgalteriya va soliq haqida maqolalar",
      description:
        "MChJ egalari uchun buxgalteriya oddiy tilda: buxgalterdan ishni qanday qabul qilish, soliqni qonuniy kamaytirish va jarimaga tushmaslik.",
      kicker: "Maqolalar",
      h1: "Buxgalteriya oddiy tilda",
      lead: "Tadbirkorlar bizga eng koʻp beradigan savollarga javob beramiz.",
    },
    ui: {
      home: "Bosh sahifa",
      when: "Qachon",
      faq: "Koʻp beriladigan savollar",
      readMore: "Batafsil",
      relatedArticles: "Mavzu boʻyicha oʻqing",
      relatedServices: "Boshqa xizmatlar",
      minutes: "daqiqa oʻqish",
      ctaTitle: "Bepul 10 daqiqalik qoʻngʻiroq",
      ctaText: "Vaziyatingizni aytib bering — Bekzod qoʻngʻiroq qilib, nimadan boshlashni aytadi.",
      ctaBtn: "Ariza qoldirish",
      allServices: "Barcha xizmatlar",
      allArticles: "Barcha maqolalar",
      updated: "Eʼlon qilingan",
    },
  },
  services,
  articles,
};
