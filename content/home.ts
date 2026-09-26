import type { Locale, ServiceId } from "./services";

export type HomeContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    cta: string;
    telegram: string;
    note: string;
    sample: { title: string; badge: string; rows: [string, string][]; stat1: [string, string]; stat2: [string, string] };
  };
  stats: [string, string][];
  triggers: { eyebrow: string; h2: string; items: string[]; note: string };
  check: { title: string; intro: string; questions: string[]; outro: string; link: string };
  compare: {
    eyebrow: string;
    h2: string;
    lead: string;
    colNow: string;
    colUs: string;
    rows: [string, string, string][];
    note: string;
  };
  risk: {
    eyebrow: string;
    h2: string;
    intro: string;
    steps: string[];
    big: string;
    bigNote: string;
    outro: string;
  };
  services: {
    eyebrow: string;
    h2: string;
    lead: string;
    groups: { title: string; id: ServiceId; items: string[] }[];
    hubLink: string;
  };
  promises: { eyebrow: string; h2: string; lead: string; items: { title: string; text: string }[] };
  pricing: {
    eyebrow: string;
    h2: string;
    intro: string;
    cards: { title: string; text: string }[];
    cta: string;
  };
  who: { eyebrow: string; h2: string; yesTitle: string; yes: string[]; noTitle: string; no: string[]; note: string };
  team: {
    eyebrow: string;
    h2: string;
    people: { initial: string; role: string; name: string; facts: string[] }[];
  };
  clients: { eyebrow: string; h2: string; lead: string };
  faq: { eyebrow: string; h2: string; items: { q: string; a: string }[] };
  cta: { eyebrow: string };
};

export const home: Record<Locale, HomeContent> = {
  uz: {
    meta: {
      title: "Sifat Buxgalter — MChJ uchun buxgalteriya autsorsingi, Toshkent",
      description:
        "Buxgalteriya va soliq hisobini 2016-yildan ishlayotgan bosh buxgalter yuritadi. Savolga 10 daqiqada javob, hisobotlar muddatida, xatomiz sabab jarima chiqsa — oʻzimiz toʻlaymiz.",
    },
    hero: {
      eyebrow: "Buxgalteriya autsorsingi · Toshkent",
      h1: "Buxgalteringiz bor. Soliq xavfi esa — hali ham sizda",
      lead:
        "Hisobot vaqtida ketyapti — bu minimum. Biz uch narsa uchun kerakmiz: 10 daqiqada javob, soliqni qonuniy kamaytirish va shartnomadagi javobgarlik — xatomiz sabab jarima chiqsa, oʻzimiz toʻlaymiz. Ishni 2016-yildan beri ishlayotgan bosh buxgalter olib boradi.",
      cta: "Bepul 10 daqiqalik qoʻngʻiroq",
      telegram: "Telegramda yozish",
      note:
        "Hech qayerga borish shart emas. Bekzod qoʻngʻiroq qiladi, hisobingiz haqida ikki-uch savol beradi va qayerda ortiqcha toʻlayotgan boʻlishingiz mumkinligini aytadi.",
      sample: {
        title: "Oylik hisobot · sentabr",
        badge: "Namuna",
        rows: [
          ["QQS deklaratsiyasi", "Topshirildi"],
          ["JShDS va ijtimoiy soliq", "Topshirildi"],
          ["Ish haqi va tabel", "Hisoblandi"],
          ["Kontragentlar tekshiruvi", "Xavf yoʻq"],
          ["Soliqdan talabnomalar", "0"],
        ],
        stat1: ["Savolga javob", "10 daqiqagacha"],
        stat2: ["Ofisingizga tashrif", "oyiga 3 marta"],
      },
    },
    stats: [
      ["2016", "yildan buxgalteriyada"],
      ["~20", "kompaniya hisobini yuritgan"],
      ["10 daq.", "savolga javob"],
      ["7 kun", "haftada aloqada"],
    ],
    triggers: {
      eyebrow: "Qachon murojaat qilishadi",
      h2: "Odatda ikki holatda yozishadi: buxgalter bilan muammo chiqqanda — yoki hammasi joyida koʻringanda",
      items: [
        "Hammasi joyida koʻrinadi — lekin qancha ortiqcha soliq toʻlayotganingizni hech kim hisoblab bermagan",
        "Buxgalter ketyapti — dekret, nafaqa yoki boshqa ish — va ishni topshiradigan odam yoʻq",
        "Soliq idorasidan talabnoma yoki tekshiruv dalolatnomasi keldi",
        "Bank hisob raqamingizni blokladi",
        "Buxgalter nima qilayotganini koʻrmaysiz: hisobot bermaydi, savolga kechikib javob beradi",
        "Aylanma oʻsdi, soliq ham oʻsdi — qonuniy kamaytirish yoʻlini hech kim koʻrsatmayapti",
        "Yangi qonunlarni kuzatishga vaqtingiz yoʻq",
      ],
      note: "Qaysi holat boʻlmasin, ishni bitta qadamdan boshlaymiz — kirish tekshiruvidan.",
    },
    check: {
      title: "Buxgalteringizga 3 savol",
      intro: "Buxgalteringizga uchta savol bering. Javob 10 daqiqada kelmasa — bu birinchi javob.",
      questions: [
        "Oʻtgan chorakda qaysi soliq imtiyozini qoʻlladingiz va u qancha tejadi?",
        "Ombor qoldigʻi 1C bilan bugun mos keladimi?",
        "Oxirgi ikki yilda ortiqcha toʻlangan soliq qaytarib olindimi?",
      ],
      outro: "Uchalasiga aniq javob boʻlsa — sizga biz kerak emasmiz. Boʻlmasa, qoʻngʻiroqda qaysi biridan boshlashni aytamiz.",
      link: "Qoʻngʻiroqqa yozilish →",
    },
    compare: {
      eyebrow: "Solishtiring",
      h2: "Buxgalteringiz allaqachon bor. Mana nima oʻzgaradi",
      lead:
        "Biz «yana bitta buxgalter» taklif qilmaymiz. Siz aslida nima uchun pul toʻlayotgan boʻlsangiz, oʻshani oʻzgartiramiz: xavf, tezlik va hozir soliqqa ketayotgan pul.",
      colNow: "Hozir, buxgalteringiz bilan",
      colUs: "Sifat Buxgalter bilan",
      rows: [
        ["Javob tezligi", "Baʼzan javob bir necha soatdan keyin keladi — bank allaqachon yopilgan", "10 daqiqagacha, haftada 7 kun. Shoshilinch toʻlov — 5 daqiqa"],
        ["Yangi qonunlar va imtiyozlar", "Ular haqida oʻzingiz bilib olasiz — Instagramdan yoki qoʻshningizdan", "Birinchi boʻlib aytamiz va 70 ga yaqin imtiyozdan sizga moslarini qoʻllaymiz"],
        ["Soliqni qonuniy kamaytirish", "Buxgalterning majburiyatiga kirmaydi — odatda hech kim qilmaydi", "Ishimiz ichida. Tejalgan summadan alohida foiz olmaymiz"],
        ["Siz nimani koʻrasiz", "«Hisobot joʻnatildi» — vassalom", "Har oy: qancha soliq chiqdi, nega va nimaga tayyorlanish kerak"],
        ["Ombor va hujjatlar", "Tekshiruv kelmaguncha hech kim solishtirmaydi", "Shartnomadan oldin kirish tekshiruvida va keyin har oy solishtiramiz"],
        ["Buxgalter xatosi uchun jarima", "Kompaniya toʻlaydi", "Xato bizniki boʻlsa — jarimani biz toʻlaymiz. Shartnomada yozilgan"],
        ["Dekret, pensiya, ishdan ketish", "Hisob yarim yoʻlda qoladi, ishni topshiradigan odam yoʻq", "Hisob bitta xodimga bogʻliq emas"],
        ["Bitta buxgalterda nechta firma", "Koʻpincha bir nechta — tekshirishga vaqt yetmaydi", "Kam kompaniya olamiz — har birini oxirigacha tekshirish uchun"],
        // TASDIQLASH: narx anchor — mijoz rozi boʻlmasa shu qatorni oʻchiring
        ["Oylik narx", "1–2 mln soʻm — lekin bitta odam 5 ta firmani yuritadi", "4–5 mln soʻmdan — hisobingizni oxirigacha tekshiradigan bosh buxgalter"],
      ],
      note: "Qoʻngʻiroqda omboringiz qanday yuritilishini ayting — birinchi navbatda nimani tekshirish kerakligini aytamiz.",
    },
    risk: {
      eyebrow: "Yashirin xavf",
      h2: "Eng qimmat xato hisobotda koʻrinmaydi",
      intro:
        "Hisobot muddatida topshirilgan — bu xato yoʻq degani emas. Ikki narsa hisobotda koʻrinmaydi: ortiqcha toʻlangan soliq va tekshiruv kelganda chiqadigan eski xato.",
      steps: [
        "Buxgalter hisobotni topshiradi. Imtiyozni qoʻllamadi yoki ombor bilan solishtirmadi — hech kim sezmaydi",
        "Ikki yil davomida shu xato har oy takrorlanadi",
        "Uchinchi yili tekshiruv keladi va ikki yilni birdan koʻtaradi — yoki ortiqcha toʻlangan soliqni qaytarish muddati oʻtib ketadi",
      ],
      big: "4–5 mln soʻm",
      bigNote: "— bitta hisobot bir kun kechiksa chiqadigan jarima. Ikki yilda nechta hisobot topshiriladi, hisoblab koʻring.",
      outro:
        "Shuning uchun mijozni qabul qilishdan oldin oxirgi davrni tekshiramiz. Javobgarlik bizga oʻtadi — demak, xatoni avval oʻzimiz koʻrishimiz kerak.",
    },
    services: {
      eyebrow: "Xizmatlar",
      h2: "Buxgalteriyaning hammasi — bitta shartnomada",
      lead: "Roʻyxat shartnomaga kiritiladi. Undan tashqarida nima qolishini birinchi qoʻngʻiroqda ochiq aytamiz.",
      groups: [
        { title: "Hisob va hisobotlar", id: "reporting", items: ["Toʻliq buxgalteriya va soliq hisobi", "Hisobotlarni muddatida topshirish", "Debitor va kreditor qarzlar nazorati", "Bank operatsiyalari", "Hisob-faktura, solishtirma dalolatnoma, ishonchnoma"] },
        { title: "Soliq", id: "tax-reduction", items: ["Soliqni qonuniy kamaytirish boʻyicha maslahat", "Soliq rejimini oʻzgartirish", "Soliq xavflarini oldindan aniqlash", "Ortiqcha toʻlangan soliqlarni qaytarish", "Kontragentlarni tekshirish"] },
        { title: "Tekshiruv va nizolar", id: "audit-defense", items: ["Kameral va sayyor tekshiruvlar uchun hujjatlar", "Soliq dalolatnomalariga eʼtiroz", "Bloklangan hisob raqamini ochish", "Yuridik qoʻllab-quvvatlash"] },
        { title: "Kadrlar va ish haqi", id: "payroll", items: ["Kadrlar buyruqlari", "Ish haqi va aliment hisob-kitobi", "Mehnat daftarchalari va mehnat shartnomalari"] },
        { title: "Tashqi savdo", id: "foreign-trade", items: ["Import va eksport shartnomalarini roʻyxatdan oʻtkazish"] },
      ],
      hubLink: "Barcha xizmatlar →",
    },
    promises: {
      eyebrow: "Majburiyatlar",
      h2: "Shartnomaga yozadigan vaʼdalarimiz",
      lead: "Sifat — bizning nomimiz. Uni oʻlchab boʻladigan qilib yozamiz.",
      items: [
        { title: "Javob — 10 daqiqagacha", text: "Siz bilan umumiy Telegram-guruh ochamiz. Haftada 7 kun aloqadamiz, shanba kuni ham." },
        { title: "Xato bizniki — jarima ham bizniki", text: "Bizning aybimiz bilan jarima chiqsa, uni oʻzimiz toʻlaymiz. Shart bitta: ombor hisobi halol yuritilsin." },
        { title: "Soliq optimallashtirish — foizsiz", text: "Soliqni qonuniy kamaytirish ishimiz ichida. Tejalgan summadan alohida foiz olmaymiz." },
        { title: "Buxgalter ofisingizda — oyiga 3 marta", text: "Hujjatlarni joyida koʻramiz, savollaringizga yuzma-yuz javob beramiz." },
        { title: "Maxfiylik — NDA bilan", text: "Soʻrovingiz boʻyicha maxfiylik shartnomasini imzolaymiz. Chet ellik taʼsischisi bor korxonalar uchun ayniqsa muhim." },
        { title: "Faqat litsenziyali dasturlar", text: "1C, Didox, soliq toʻlovchining shaxsiy kabineti — hammasi rasmiy." },
        { title: "Qabuldan oldin — tekshiruv", text: "Oxirgi davrni koʻrmasdan ishni qabul qilmaymiz. Eski xatolarni aniqlaymiz va tuzatish rejasini beramiz." },
      ],
    },
    pricing: {
      eyebrow: "Narx",
      h2: "Narx aylanmaga emas, ishning hajmiga bogʻliq",
      intro:
        "Tayyor tarif yoʻq — va bu ataylab. 25 mlrd aylanmali, 4 ta mijozli firma 5 mlrd aylanmali, 1000 ta mijozli firmadan arzon boʻlishi mumkin. Narxni hujjat hajmi belgilaydi, oborot emas.",
      cards: [
        { title: "Nimaga qarab", text: "Oyiga nechta hisob-faktura, toʻlov, xodim va kontragent — shunga qarab buxgalterning vaqti, vaqtga qarab narx." },
        { title: "Nima kirmaydi", text: "Tejalgan soliqdan foiz olmaymiz. Yashirin toʻlovlar yoʻq: shartnomada nima yozilgan boʻlsa, shu." },
        { title: "Nima uchun shtatdagidan qimmat", text: "Shtat buxgalteri 1–2 mln oladi, lekin koʻpincha yonboshida yana 4–5 ta firmani yuritadi. Biz kam firma olamiz va har birini oxirigacha tekshiramiz — shu vaqt uchun toʻlaysiz." },
        { title: "Aniq raqam qachon", text: "Birinchi qoʻngʻiroqda, hujjat hajmini eshitgandan keyin. Shartnomagacha narx oʻzgarmaydi." },
      ],
      cta: "Hujjat hajmini ayting — narxni shu qoʻngʻiroqda aytamiz →",
    },
    who: {
      eyebrow: "Kim bilan ishlaymiz",
      h2: "Hammani olmaymiz — va bu sizni himoya qiladi",
      yesTitle: "Mos keladi",
      yes: [
        "Yillik aylanmasi 1 mlrd soʻmdan, xodimlari 5 nafardan ortiq MChJ",
        "Import-eksport, ulgurji savdo, turizm, oʻquv markazlari",
        "Toshkent shahri va Toshkent viloyati",
        "Soliqni qonuniy yoʻl bilan kamaytirmoqchi boʻlgan egalar",
      ],
      noTitle: "Olmaymiz",
      no: ["Faqat naqd pulda ishlaydigan biznes", "Alkogol va tamaki", "Naqd pulda ishlaydigan qurilish"],
      note: "Javobgarlikni oʻz boʻynimizga olganimiz uchun faqat halol hisobni qabul qilamiz.",
    },
    team: {
      eyebrow: "Jamoa",
      h2: "Hisobingizni kim yuritadi",
      people: [
        {
          initial: "I",
          role: "Bosh buxgalter",
          name: "Ibrohim",
          facts: [
            "Buxgalteriyada 2016-yildan",
            // TASDIQLASH: mijoz rozi boʻlmasa shu qatorni oʻchiring
            "Hozir — Avangard (maishiy texnika) bosh buxgalteri",
            "Har bir mijoz hisobini shaxsan yuritadi",
            "20 ga yaqin kompaniya hisobini yuritgan",
          ],
        },
        {
          initial: "B",
          role: "Mijozlar bilan ishlash",
          name: "Bekzod",
          facts: ["Birinchi uchrashuv va shartnoma", "Arizaga 1 soat ichida, odatda 10 daqiqada qoʻngʻiroq qiladi", "Telegram: @Davronbekov_Bekzod"],
        },
      ],
    },
    clients: { eyebrow: "Tajriba", h2: "Hisobini yuritgan kompaniyalar", lead: "Jamoamiz turli yillarda ishlagan korxonalardan bir qismi." },
    faq: {
      eyebrow: "Savollar",
      h2: "Koʻp soʻraladi",
      items: [
        { q: "Buxgalterimni ishdan boʻshatishim kerakmi?", a: "Yoʻq, avval emas. Kirish tekshiruvi buxgalteringiz ishini ham koʻrsatadi. Natijani koʻrib, oʻzingiz hal qilasiz — biz qarorni tekshiruvgacha soʻramaymiz." },
        { q: "Buxgalterim bor. Nega nimanidir oʻzgartirishim kerak?", a: "Hisobotni vaqtida topshirish — bu minimum. Biz odatda yoʻq narsani qoʻshamiz: 10 daqiqada javob, soliqni qonuniy kamaytirish, sizga oylik hisobot va bizning xatomiz uchun jarimani oʻzimiz toʻlashimiz." },
        { q: "Hozirgi buxgalterim bilan nima qilamiz?", a: "Ishni qabul qilishni oʻz zimmamizga olamiz: siz bilan birga hujjatlar, 1C bazasi va kirish huquqlarini olamiz, kirish tekshiruvida esa nima yopilmay qolganini koʻramiz." },
        { q: "Oldingi buxgalterning xatolari bilan nima boʻladi?", a: "Kirish tekshiruvida topamiz va tuzatish rejasini beramiz. Oldingi davr uchun javobgarlikni tekshiruvdan keyin alohida kelishamiz." },
        { q: "Hujjatlarimiz xavfsizmi?", a: "Soʻrovingiz boʻyicha NDA imzolaymiz. Faqat litsenziyali 1C va Didoxda ishlaymiz." },
        { q: "Ofisimizga kelasizlarmi?", a: "Ha, buxgalter oyiga 3 marta ofisingizga keladi. Uchrashuvlar — ofisimizda yoki Zoomda." },
        { q: "Dam olish kunlari javob berasizlarmi?", a: "Ha, haftada 7 kun aloqadamiz. Shanba kunlari ish kuni qisqaroq." },
        { q: "Toshkentdan tashqarida ishlaysizlarmi?", a: "Asosan Toshkent shahri va viloyatida — chunki buxgalter oyiga 3 marta ofisingizga boradi." },
        { q: "Necha pul?", a: "Oyiga hujjat hajmiga qarab, oborotga emas. Odatda 4–5 mln soʻmdan boshlanadi. Aniq raqam — birinchi qoʻngʻiroqda, hajmni eshitgandan keyin." },
        { q: "Nimaga shtat buxgalteridan qimmat?", a: "Shtat buxgalteri 1–2 mln oladi va koʻpincha yonboshida yana bir necha firmani yuritadi — tekshirishga vaqt qolmaydi. Bizda narx ichida: 10 daqiqada javob, imtiyozlarni qoʻllash, har oy ombor bilan solishtirish va xato uchun jarimani oʻzimiz toʻlashimiz. Kechikkan bitta hisobot jarimasi — 4–5 mln." },
      ],
    },
    cta: { eyebrow: "Birinchi qadam" },
  },

  ru: {
    meta: {
      title: "Sifat Buxgalter — аутсорсинг бухгалтерии для ООО, Ташкент",
      description:
        "Бухгалтерский и налоговый учёт ведёт главный бухгалтер с опытом с 2016 года. Ответ за 10 минут, отчёты в срок, штраф по нашей ошибке платим сами.",
    },
    hero: {
      eyebrow: "Аутсорсинг бухгалтерии · Ташкент",
      h1: "Бухгалтер у вас есть. Налоговый риск — всё ещё на вас",
      lead:
        "Отчёты уходят вовремя — это минимум. Мы нужны для трёх вещей: ответ за 10 минут, законное снижение налогов и ответственность в договоре — штраф по нашей ошибке платим сами. Ведёт главный бухгалтер, который работает с 2016 года.",
      cta: "Бесплатный звонок на 10 минут",
      telegram: "Написать в Telegram",
      note: "Никуда ехать не нужно. Бекзод перезвонит, задаст два-три вопроса о вашем учёте и скажет, где вы, возможно, переплачиваете.",
      sample: {
        title: "Отчёт за месяц · сентябрь",
        badge: "Образец",
        rows: [
          ["Декларация по НДС", "Сдана"],
          ["НДФЛ и соцналог", "Сданы"],
          ["Зарплата и табель", "Начислены"],
          ["Проверка контрагентов", "Рисков нет"],
          ["Требования налоговой", "0"],
        ],
        stat1: ["Ответ на вопрос", "до 10 минут"],
        stat2: ["Выезд к вам в офис", "3 раза в месяц"],
      },
    },
    stats: [
      ["2016", "года в бухгалтерии"],
      ["~20", "компаний на обслуживании"],
      ["10 мин", "ответ на вопрос"],
      ["7 дней", "в неделю на связи"],
    ],
    triggers: {
      eyebrow: "Когда к нам приходят",
      h2: "Обычно пишут в двух случаях: когда с бухгалтером что-то не так — или когда всё выглядит нормально",
      items: [
        "Всё выглядит нормально — но сколько налогов вы переплачиваете, никто не считал",
        "Бухгалтер уходит — декрет, пенсия, другая работа — и дела передать некому",
        "Пришло требование или акт проверки из налоговой",
        "Банк заблокировал расчётный счёт",
        "Вы не видите, что делает бухгалтер: отчётов нет, ответы с опозданием",
        "Оборот вырос, налоги тоже — а законный способ платить меньше никто не показывает",
        "Нет времени следить за новыми законами",
      ],
      note: "В любом случае начинаем с одного шага — входной проверки.",
    },
    check: {
      title: "3 вопроса вашему бухгалтеру",
      intro: "Задайте бухгалтеру три вопроса. Если ответ не пришёл за 10 минут — это уже первый ответ.",
      questions: [
        "Какую налоговую льготу вы применили в прошлом квартале и сколько она сэкономила?",
        "Остаток на складе сегодня сходится с 1С?",
        "За последние два года переплаченные налоги были возвращены?",
      ],
      outro: "Если на все три есть чёткий ответ — мы вам не нужны. Если нет, на звонке скажем, с какого начать.",
      link: "Записаться на звонок →",
    },
    compare: {
      eyebrow: "Сравните",
      h2: "Бухгалтер у вас уже есть. Вот что изменится",
      lead: "Мы не предлагаем «ещё одного бухгалтера». Мы меняем то, за что вы на самом деле платите: риск, скорость и деньги, которые сейчас уходят в налоги.",
      colNow: "Сейчас, с вашим бухгалтером",
      colUs: "С Sifat Buxgalter",
      rows: [
        ["Скорость ответа", "Бывает, ответ приходит через несколько часов — банк уже закрыт", "До 10 минут, 7 дней в неделю. Срочный платёж — 5 минут"],
        ["Новые законы и льготы", "Вы узнаёте о них сами — из Instagram или от соседа", "Сообщаем первыми и применяем те из ~70 льгот, что подходят вам"],
        ["Законное снижение налогов", "Не входит в обязанности бухгалтера — обычно его никто не делает", "Входит в нашу работу. Отдельный процент от экономии не берём"],
        ["Что вы видите", "«Отчёт отправлен» — и всё", "Каждый месяц: сколько налогов вышло, почему и к чему готовиться"],
        ["Склад и документы", "Никто не сверяет, пока не придёт проверка", "Сверяем до договора, на входной проверке, и потом каждый месяц"],
        ["Штраф за ошибку бухгалтера", "Платит компания", "Ошибка наша — штраф платим мы. Прописано в договоре"],
        ["Декрет, пенсия, увольнение", "Учёт остаётся на полпути, дела передать некому", "Учёт не зависит от одного сотрудника"],
        ["Сколько фирм на одном бухгалтере", "Часто несколько сразу — на проверку не хватает времени", "Берём мало компаний, чтобы каждую проверять до конца"],
        // ПОДТВЕРДИТЬ: ценовой якорь — удалите строку, если клиент против
        ["Цена в месяц", "1–2 млн сум — но один человек ведёт 5 фирм", "От 4–5 млн сум — главный бухгалтер, который проверяет ваш учёт до конца"],
      ],
      note: "На звонке расскажите, как у вас ведётся склад, — скажем, что проверить первым.",
    },
    risk: {
      eyebrow: "Скрытый риск",
      h2: "Самая дорогая ошибка не видна в отчётах",
      intro: "Отчёт сдан в срок — это не значит, что ошибок нет. Две вещи в отчёте не видны: переплаченный налог и старая ошибка, которая всплывёт при проверке.",
      steps: [
        "Бухгалтер сдаёт отчёт. Льготу не применил или склад не сверил — никто не замечает",
        "Два года эта ошибка повторяется каждый месяц",
        "На третий год приходит проверка и поднимает два года сразу — или срок возврата переплаты истекает",
      ],
      big: "4–5 млн сум",
      bigNote: "— штраф за один отчёт, сданный на день позже. Посчитайте, сколько отчётов сдаётся за два года.",
      outro: "Поэтому до того как взять клиента, мы проверяем последний период. Ответственность переходит к нам — значит, ошибку мы должны увидеть первыми.",
    },
    services: {
      eyebrow: "Услуги",
      h2: "Вся бухгалтерия — в одном договоре",
      lead: "Список входит в договор. Что остаётся за его рамками, честно скажем на первом звонке.",
      groups: [
        { title: "Учёт и отчётность", id: "reporting", items: ["Полный бухгалтерский и налоговый учёт", "Сдача отчётности в срок", "Контроль дебиторской и кредиторской задолженности", "Банковские операции", "Счета-фактуры, акты сверки, доверенности"] },
        { title: "Налоги", id: "tax-reduction", items: ["Консультации по законному снижению налогов", "Смена налогового режима", "Раннее выявление налоговых рисков", "Возврат переплаченных налогов", "Проверка контрагентов"] },
        { title: "Проверки и споры", id: "audit-defense", items: ["Документы для камеральных и выездных проверок", "Возражения на налоговые акты", "Разблокировка расчётного счёта", "Юридическое сопровождение"] },
        { title: "Кадры и зарплата", id: "payroll", items: ["Кадровые приказы", "Расчёт зарплаты и алиментов", "Трудовые книжки и трудовые договоры"] },
        { title: "ВЭД", id: "foreign-trade", items: ["Регистрация импортных и экспортных контрактов"] },
      ],
      hubLink: "Все услуги →",
    },
    promises: {
      eyebrow: "Обязательства",
      h2: "Что мы прописываем в договоре",
      lead: "Sifat значит «качество». Мы делаем его измеримым.",
      items: [
        { title: "Ответ — до 10 минут", text: "Открываем с вами общую группу в Telegram. На связи 7 дней в неделю, в субботу тоже." },
        { title: "Наша ошибка — наш штраф", text: "Если штраф возник по нашей вине, платим его сами. Условие одно: склад ведётся честно." },
        { title: "Налоговая оптимизация — без процента", text: "Законное снижение налогов входит в нашу работу. Отдельный процент от экономии не берём." },
        { title: "Бухгалтер у вас в офисе — 3 раза в месяц", text: "Смотрим документы на месте и отвечаем на вопросы лично." },
        { title: "Конфиденциальность — по NDA", text: "По запросу подписываем соглашение о неразглашении. Особенно важно для компаний с иностранными учредителями." },
        { title: "Только лицензионные программы", text: "1С, Didox, личный кабинет налогоплательщика — всё официально." },
        { title: "Проверка до приёма", text: "Не берём дела, не посмотрев последний период. Находим старые ошибки и даём план исправления." },
      ],
    },
    pricing: {
      eyebrow: "Цена",
      h2: "Цена зависит не от оборота, а от объёма работы",
      intro: "Готовых тарифов нет — и это намеренно. Фирма с оборотом 25 млрд и 4 клиентами может стоить дешевле фирмы с оборотом 5 млрд и 1000 клиентов. Цену определяет объём документов, а не оборот.",
      cards: [
        { title: "От чего зависит", text: "Сколько счетов-фактур, платежей, сотрудников и контрагентов в месяц — от этого время бухгалтера, от времени — цена." },
        { title: "Чего нет", text: "Процент от сэкономленных налогов не берём. Скрытых платежей нет: что в договоре, то и платите." },
        { title: "Почему дороже штатного", text: "Штатный бухгалтер получает 1–2 млн, но часто ведёт ещё 4–5 фирм на стороне. Мы берём мало компаний и проверяем каждую до конца — вы платите за это время." },
        { title: "Когда точная цифра", text: "На первом звонке, после того как узнаем объём документов. До договора цена не меняется." },
      ],
      cta: "Назовите объём документов — цену скажем на этом же звонке →",
    },
    who: {
      eyebrow: "С кем работаем",
      h2: "Берём не всех — и это защищает вас",
      yesTitle: "Подходит",
      yes: ["ООО с годовым оборотом от 1 млрд сум и штатом от 5 человек", "ВЭД, оптовая торговля, туризм, учебные центры", "Ташкент и Ташкентская область", "Собственники, которые хотят платить меньше налогов законно"],
      noTitle: "Не берём",
      no: ["Бизнес только на наличных", "Алкоголь и табак", "Стройка на наличных"],
      note: "Мы берём ответственность на себя, поэтому принимаем только честный учёт.",
    },
    team: {
      eyebrow: "Команда",
      h2: "Кто ведёт ваш учёт",
      people: [
        {
          initial: "И",
          role: "Главный бухгалтер",
          name: "Иброхим",
          facts: [
            "В бухгалтерии с 2016 года",
            // ПОДТВЕРДИТЬ: удалите строку, если клиент против
            "Сейчас — главный бухгалтер Avangard (бытовая техника)",
            "Лично ведёт учёт каждого клиента",
            "Вёл учёт около 20 компаний",
          ],
        },
        { initial: "Б", role: "Работа с клиентами", name: "Бекзод", facts: ["Первая встреча и договор", "Перезванивает в течение часа, обычно за 10 минут", "Telegram: @Davronbekov_Bekzod"] },
      ],
    },
    clients: { eyebrow: "Опыт", h2: "Компании, чей учёт мы вели", lead: "Часть компаний, с которыми работала наша команда в разные годы." },
    faq: {
      eyebrow: "Вопросы",
      h2: "Часто спрашивают",
      items: [
        { q: "Мне нужно увольнять своего бухгалтера?", a: "Нет, не сразу. Входная проверка покажет и работу вашего бухгалтера. Посмотрите результат и решите сами — до проверки мы решения не просим." },
        { q: "У меня уже есть бухгалтер. Зачем что-то менять?", a: "Отчёты вовремя — это минимум. Мы добавляем то, чего обычно нет: ответ за 10 минут, законное снижение налогов, ежемесячный отчёт вам и штраф за нашу ошибку за наш счёт." },
        { q: "Что делать с нынешним бухгалтером?", a: "Приём дел берём на себя: вместе с вами забираем документы, базу 1С и доступы, а на входной проверке смотрим, что осталось незакрытым." },
        { q: "Что будет с ошибками прошлого бухгалтера?", a: "Найдём их на входной проверке и дадим план исправления. Ответственность за прошлый период обсуждаем отдельно после проверки." },
        { q: "Наши документы в безопасности?", a: "По запросу подписываем NDA. Работаем только в лицензионной 1С и Didox." },
        { q: "Вы приезжаете к нам в офис?", a: "Да, бухгалтер приезжает к вам 3 раза в месяц. Встречи — у нас в офисе или в Zoom." },
        { q: "Отвечаете в выходные?", a: "Да, на связи 7 дней в неделю. В субботу рабочий день короче." },
        { q: "Работаете за пределами Ташкента?", a: "В основном в Ташкенте и области — потому что бухгалтер выезжает к вам 3 раза в месяц." },
        { q: "Сколько это стоит?", a: "Зависит от объёма документов в месяц, не от оборота. Обычно от 4–5 млн сум. Точная цифра — на первом звонке, после того как узнаем объём." },
        { q: "Почему дороже штатного бухгалтера?", a: "Штатный получает 1–2 млн и часто ведёт ещё несколько фирм — на проверку времени нет. В нашу цену входит: ответ за 10 минут, применение льгот, ежемесячная сверка со складом и штраф за нашу ошибку за наш счёт. Штраф за один просроченный отчёт — 4–5 млн." },
      ],
    },
    cta: { eyebrow: "Первый шаг" },
  },
};
