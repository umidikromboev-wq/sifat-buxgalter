import type { Locale } from "./services";

export type StaticPage = { title: string; description: string; eyebrow: string; h1: string; lead: string };

export const pages: Record<Locale, Record<"services" | "pricing" | "team" | "faq" | "contact" | "privacy" | "thanks", StaticPage>> = {
  uz: {
    services: {
      title: "Buxgalteriya xizmatlari Toshkent — Sifat Buxgalter",
      description: "MChJ uchun buxgalteriya xizmatlari: hisob va hisobotlar, soliqni kamaytirish, tekshiruv va nizolar, kadrlar, tashqi savdo. Bitta shartnoma, 10 daqiqada javob. Toshkent.",
      eyebrow: "Xizmatlar · Toshkent",
      h1: "Buxgalteriyaning hammasi — bitta shartnomada",
      lead: "Har bir xizmat haqida alohida sahifa: kimga kerak, nima kiradi, qanday ishlaymiz, narx. Nimadan boshlashni bilmasangiz — kirish tekshiruvidan boshlaymiz.",
    },
    pricing: {
      title: "Buxgalteriya xizmati narxi — Toshkent",
      description: "Buxgalteriya autsorsingi narxi hujjat hajmiga bogʻliq, aylanmaga emas. Tejalgan soliqdan foiz yoʻq, yashirin toʻlovlar yoʻq. Aniq raqam — birinchi qoʻngʻiroqda.",
      eyebrow: "Narx",
      h1: "Narx aylanmaga emas, ish hajmiga bogʻliq",
      lead: "Tayyor tarif yoʻq — va bu ataylab. Narxni oylik hujjat hajmi belgilaydi: hisob-fakturalar, toʻlovlar, xodimlar, kontragentlar soni.",
    },
    team: {
      title: "Jamoa — Sifat Buxgalter",
      description: "Hisobingizni kim yuritadi: 2016-yildan ishlayotgan bosh buxgalter Ibrohim va mijozlar bilan ishlovchi Bekzod. Toshkent.",
      eyebrow: "Jamoa",
      h1: "Hisobingizni kim yuritadi",
      lead: "Katta jamoa emas — va bu ataylab. Kam kompaniya olamiz, har birini bosh buxgalter shaxsan yuritadi.",
    },
    faq: {
      title: "Koʻp soʻraladigan savollar — Sifat Buxgalter",
      description: "Buxgalteriya autsorsingi haqida koʻp soʻraladigan savollar: narx, buxgalter bilan nima qilish, xavfsizlik, ofisga tashrif, dam olish kunlari.",
      eyebrow: "Savollar",
      h1: "Koʻp soʻraladi",
      lead: "Bu yerda javob topolmasangiz — Bekzodga Telegramda yozing, 10 daqiqada javob beradi.",
    },
    contact: {
      title: "Aloqa — Sifat Buxgalter, Toshkent",
      description: "Sifat Buxgalter bilan bogʻlaning: +998 97 732 18 48, Telegram @Davronbekov_Bekzod. Ofis: Toshkent, Yangi Sergeli 7/2. Haftada 7 kun.",
      eyebrow: "Aloqa",
      h1: "Bepul 10 daqiqalik qoʻngʻiroq",
      lead: "Telefoningizni qoldiring — Bekzod 1 soat ichida, odatda 10 daqiqada qoʻngʻiroq qiladi.",
    },
    privacy: {
      title: "Maxfiylik siyosati — Sifat Buxgalter",
      description: "Sifat Buxgalter sayti orqali yuborilgan maʼlumotlar qanday ishlatiladi va saqlanadi.",
      eyebrow: "Maxfiylik",
      h1: "Maxfiylik siyosati",
      lead: "Sayt orqali yuborgan maʼlumotlaringiz faqat siz bilan bogʻlanish uchun ishlatiladi.",
    },
    thanks: {
      title: "Rahmat — Sifat Buxgalter",
      description: "Arizangiz qabul qilindi.",
      eyebrow: "Ariza qabul qilindi",
      h1: "Rahmat. Bekzod tez orada qoʻngʻiroq qiladi",
      lead: "Odatda 10 daqiqada, eng koʻpi bilan 1 soat ichida. Shoshilinch boʻlsa — toʻgʻridan-toʻgʻri qoʻngʻiroq qiling yoki Telegramda yozing.",
    },
  },
  ru: {
    services: {
      title: "Бухгалтерские услуги в Ташкенте — Sifat Buxgalter",
      description: "Бухгалтерские услуги для ООО: учёт и отчётность, снижение налогов, проверки и споры, кадры, ВЭД. Один договор, ответ за 10 минут. Ташкент.",
      eyebrow: "Услуги · Ташкент",
      h1: "Вся бухгалтерия — в одном договоре",
      lead: "По каждой услуге отдельная страница: кому нужно, что входит, как работаем, цена. Не знаете, с чего начать — начнём с входной проверки.",
    },
    pricing: {
      title: "Стоимость бухгалтерских услуг — Ташкент",
      description: "Цена аутсорсинга бухгалтерии зависит от объёма документов, а не от оборота. Без процента от экономии и скрытых платежей. Точная цифра — на первом звонке.",
      eyebrow: "Цена",
      h1: "Цена зависит от объёма работы, не от оборота",
      lead: "Готовых тарифов нет — и это намеренно. Цену определяет объём документов в месяц: счета-фактуры, платежи, сотрудники, контрагенты.",
    },
    team: {
      title: "Команда — Sifat Buxgalter",
      description: "Кто ведёт ваш учёт: главный бухгалтер Иброхим с опытом с 2016 года и Бекзод, отвечающий за работу с клиентами. Ташкент.",
      eyebrow: "Команда",
      h1: "Кто ведёт ваш учёт",
      lead: "Не большая команда — и это намеренно. Берём мало компаний, каждую лично ведёт главный бухгалтер.",
    },
    faq: {
      title: "Частые вопросы — Sifat Buxgalter",
      description: "Частые вопросы об аутсорсинге бухгалтерии: цена, что делать с бухгалтером, безопасность, выезд в офис, выходные.",
      eyebrow: "Вопросы",
      h1: "Часто спрашивают",
      lead: "Не нашли ответ — напишите Бекзоду в Telegram, ответит за 10 минут.",
    },
    contact: {
      title: "Контакты — Sifat Buxgalter, Ташкент",
      description: "Связаться с Sifat Buxgalter: +998 97 732 18 48, Telegram @Davronbekov_Bekzod. Офис: Ташкент, Янги Сергели 7/2. 7 дней в неделю.",
      eyebrow: "Контакты",
      h1: "Бесплатный звонок на 10 минут",
      lead: "Оставьте телефон — Бекзод перезвонит в течение часа, обычно за 10 минут.",
    },
    privacy: {
      title: "Политика конфиденциальности — Sifat Buxgalter",
      description: "Как используются и хранятся данные, отправленные через сайт Sifat Buxgalter.",
      eyebrow: "Конфиденциальность",
      h1: "Политика конфиденциальности",
      lead: "Данные, отправленные через сайт, используются только для связи с вами.",
    },
    thanks: {
      title: "Спасибо — Sifat Buxgalter",
      description: "Заявка принята.",
      eyebrow: "Заявка принята",
      h1: "Спасибо. Бекзод скоро перезвонит",
      lead: "Обычно за 10 минут, максимум в течение часа. Если срочно — позвоните напрямую или напишите в Telegram.",
    },
  },
};

export const privacyText: Record<Locale, string[]> = {
  uz: [
    "1. Sayt orqali yuborilgan maʼlumotlar (ism, telefon, kompaniya nomi, yillik aylanma oraligʻi) faqat siz bilan bogʻlanish va xizmat boʻyicha maslahat berish uchun ishlatiladi.",
    "2. Maʼlumotlar uchinchi shaxslarga berilmaydi va reklama tarqatish uchun ishlatilmaydi.",
    "3. Maʼlumotlar Sifat Buxgalter xodimlarining ish vositalarida (Telegram, CRM) saqlanadi va soʻrovingiz boʻyicha oʻchiriladi.",
    "4. Sayt tashrif statistikasi uchun Google Analytics kabi vositalardan foydalanishi mumkin; ular shaxsiy maʼlumotlarni toʻplamaydi.",
    "5. Savollar boʻyicha: +998 97 732 18 48 yoki Telegram @Davronbekov_Bekzod.",
  ],
  ru: [
    "1. Данные, отправленные через сайт (имя, телефон, название компании, диапазон годового оборота), используются только для связи с вами и консультации по услугам.",
    "2. Данные не передаются третьим лицам и не используются для рассылок.",
    "3. Данные хранятся в рабочих инструментах сотрудников Sifat Buxgalter (Telegram, CRM) и удаляются по вашему запросу.",
    "4. Сайт может использовать инструменты статистики посещений, например Google Analytics; они не собирают персональные данные.",
    "5. Вопросы: +998 97 732 18 48 или Telegram @Davronbekov_Bekzod.",
  ],
};
