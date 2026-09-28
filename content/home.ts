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
    sample: { title: string; period: string; badge: string; rows: [string, string][]; stat1: [string, string]; stat2: [string, string]; stamp: string; signed: string };
  };
  stats: [string, string][];
  triggers: { eyebrow: string; h2: string; items: string[]; note: string };
  check: { title: string; intro: string; questions: { q: string; why: string }[]; outroYes: string; outroNo: string; link: string };
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
  process: { eyebrow: string; h2: string; steps: { title: string; text: string }[] };
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
        "Hisobotlar muddatida topshirilishi — bu minimum. Biz uch narsani qoʻshamiz: har savolga 10 daqiqada javob, soliqni qonuniy kamaytirish va shartnomada yozilgan javobgarlik — xatomiz sabab jarima chiqsa, uni oʻzimiz toʻlaymiz. Hisobni 2016-yildan beri ishlayotgan bosh buxgalter shaxsan yuritadi.",
      cta: "Bepul 10 daqiqalik qoʻngʻiroq",
      telegram: "Telegramda yozish",
      note:
        "Hech qayerga borish shart emas. Bekzod qoʻngʻiroq qiladi, hisobingiz haqida ikki-uch savol beradi va ortiqcha toʻlov odatda qayerda yashirinishini aytadi.",
      sample: {
        title: "Direktor uchun oylik hisobot",
        period: "{month} {year}",
        badge: "Namuna",
        rows: [
          ["QQS, JShDS, ijtimoiy soliq", "Topshirildi · {m}"],
          ["Ombor ↔ 1C solishtiruvi", "Farq yoʻq"],
          ["Kontragentlar tekshiruvi", "31 ta · xavf yoʻq"],
          ["Qoʻllangan imtiyoz", "1 ta · tejaldi 4,2 mln"],
          ["Soliq tekshiruvlari", "0"],
        ],
        stat1: ["Savolga javob", "10 daqiqagacha"],
        stat2: ["Ofisingizga tashrif", "oyiga 3 marta"],
        stamp: "SIFAT BUXGALTER · TEKSHIRILDI · ",
        signed: "Bosh buxgalter tekshirdi",
      },
    },
    stats: [
      ["2016", "yildan buxgalteriyada"],
      ["4 mlrd", "soʻmgacha yiliga tejalgan soliq"],
      ["10 daq.", "savolga javob"],
      ["24/7", "aloqadamiz, dam olish kunlari ham"],
    ],
    triggers: {
      eyebrow: "Qachon murojaat qilishadi",
      h2: "Odatda ikki holatda yozishadi: buxgalter bilan muammo chiqqanda — yoki hammasi joyida koʻringanda",
      items: [
        "Hammasi joyida koʻrinadi — lekin qancha ortiqcha soliq toʻlayotganingizni hech kim hisoblab koʻrmagan",
        "Buxgalter ketyapti — dekret, nafaqa yoki boshqa ish — va ishni topshiradigan odam yoʻq",
        "Soliq idorasidan talabnoma keldi yoki soliq auditi tayinlandi",
        "Bank hisob raqamingizni blokladi",
        "Buxgalter nima qilayotganini koʻrmaysiz: sizga hisobot bermaydi, savolga soatlab javob yoʻq",
        "Aylanma oʻsdi, soliq ham oʻsdi — qonuniy kamaytirish yoʻlini hech kim koʻrsatmayapti",
        "Yangi qonunlarni kuzatishga vaqtingiz yoʻq",
      ],
      note: "Qaysi holat boʻlmasin, ishni bitta qadamdan boshlaymiz — ekspress-auditdan.",
    },
    check: {
      title: "Buxgalteringizga 3 savol bering — bugun",
      intro: "Bu savollar uchun buxgalter boʻlish shart emas. Telegramda yozing. Javob 10 daqiqada kelmasa — bu allaqachon birinchi javob.",
      questions: [
        { q: "Oʻtgan chorakda qaysi soliq imtiyozi qoʻllandi va u qancha tejadi?", why: "Aniq raqam yoʻq — imtiyoz qoʻllanmagan. Oʻzbekistonda oʻnlab soliq imtiyozi bor, har oy ortiqcha toʻlayapsiz." },
        { q: "Ombordagi haqiqiy qoldiq bugun 1C dagi raqam bilan mos keladimi?", why: "«Tekshirib koʻrish kerak» — demak, hech qachon solishtirilmagan. Tekshiruvda aynan shu farq jarimaga aylanadi." },
        { q: "Oxirgi ikki yilda ortiqcha toʻlangan soliq qaytarib olindimi?", why: "«Ortiqcha toʻlov yoʻq» — buni hech kim tekshirmagan. Muddat oʻtsa, bu pul qaytmaydi." },
      ],
      outroYes: "Uchalasiga aniq javob bor? Buxgalteringiz kuchli — sizga biz kerak emasmiz, shunday deymiz.",
      outroNo: "Bittasiga ham javob yoʻqmi? Bu pul allaqachon yoʻqolayotgan joy. 10 daqiqalik qoʻngʻiroqda qaysi biridan boshlashni aytamiz — bepul.",
      link: "Bepul qoʻngʻiroqqa yozilish →",
    },
    compare: {
      eyebrow: "Solishtiring",
      h2: "Buxgalteringiz allaqachon bor. Mana nima oʻzgaradi",
      lead:
        "Biz «yana bitta buxgalter» taklif qilmaymiz. Siz aslida nima uchun pul toʻlayotgan boʻlsangiz, oʻshani oʻzgartiramiz: xavf, tezlik va hozir soliqqa ketayotgan pul.",
      colNow: "Hozir, buxgalteringiz bilan",
      colUs: "Sifat Buxgalter bilan",
      rows: [
        ["Javob tezligi", "Javob bir necha soatdan keyin keladi — bank allaqachon yopilgan", "10 daqiqagacha, 24/7. Shoshilinch toʻlov — 5 daqiqa"],
        ["Yangi qonunlar va imtiyozlar", "Ular haqida oʻzingiz bilib olasiz — Instagramdan yoki qoʻshningizdan", "Birinchi boʻlib aytamiz va sizga mos imtiyozlarni qoʻllaymiz"],
        ["Soliqni qonuniy kamaytirish", "Buxgalterning majburiyatiga kirmaydi — odatda hech kim qilmaydi", "Ishimiz ichida. Tejalgan summadan alohida foiz olmaymiz"],
        ["Siz nimani koʻrasiz", "«Hisobot joʻnatildi» — boshqa hech narsa", "Har oy direktor uchun hisobot: qancha soliq chiqdi, nega va nimaga tayyorlanish kerak"],
        ["Ombor va hujjatlar", "Tekshiruv kelmaguncha hech kim solishtirmaydi", "Shartnomadan oldin ekspress-auditda va keyin har oy solishtiramiz"],
        ["Buxgalter xatosi uchun jarima", "Kompaniya toʻlaydi", "Xato bizniki boʻlsa — jarimani biz toʻlaymiz. Shartnomada yozilgan"],
        ["Dekret, pensiya, ishdan ketish", "Hisob yarim yoʻlda qoladi, ishni topshiradigan odam yoʻq", "Hisob bitta xodimga bogʻliq emas"],
        ["Bitta buxgalterda nechta firma", "Koʻpincha bir nechta — tekshirishga vaqt yetmaydi", "Kam kompaniya olamiz — har birini oxirigacha tekshirish uchun"],
        ["Soliq tekshiruvi kelganda", "Siz oʻzingiz javob berasiz — buxgalter «bilmayman» deydi yoki allaqachon ketgan", "Hujjatlar, eʼtiroz, soliq idorasi bilan muloqot — hammasi bizda"],
        // TASDIQLASH: narx anchor — mijoz rozi boʻlmasa shu qatorni oʻchiring
        ["Oylik narx", "Buxgalter maoshi + qoʻllanmagan imtiyozlar + kechikkan hisobot jarimasi", "Bitta summa — hammasi ichida. Oldini olingan bitta jarima oyni qoplaydi"],
      ],
      note: "Qoʻngʻiroqda omboringiz qanday yuritilishini ayting — birinchi navbatda nimani tekshirish kerakligini aytamiz.",
    },
    risk: {
      eyebrow: "Yashirin xavf",
      h2: "Eng qimmat xato hisobotda koʻrinmaydi",
      intro:
        "Hisobot muddatida topshirilgani — xato yoʻq degani emas. Hisobotda ikki narsa koʻrinmaydi: ortiqcha toʻlangan soliq va tekshiruv kelganda yuzaga chiqadigan eski xato.",
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
        { title: "Hisob va hisobotlar", id: "reporting", items: ["Toʻliq buxgalteriya va soliq hisobi", "Hisobotlarni muddatida topshirish", "Debitor va kreditor qarzlar nazorati", "Bank operatsiyalari", "Elektron hisob-fakturalar, solishtirma dalolatnomalar, ishonchnomalar"] },
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
      lead: "Sifat — bizning nomimiz. Shartnomada uni oʻlchab boʻladigan raqamlar bilan yozamiz.",
      items: [
        { title: "Javob — 10 daqiqagacha", text: "Siz bilan umumiy Telegram-guruh ochamiz: yozasiz — 10 daqiqa ichida javob olasiz. Aloqadamiz 24/7 — shanba va yakshanba ham." },
        { title: "Xato bizniki — jarima ham bizniki", text: "Bizning aybimiz bilan jarima chiqsa, uni oʻzimiz toʻlaymiz. Shart bitta: ombor hisobi halol yuritilsin." },
        { title: "Soliq optimallashtirish — foizsiz", text: "Soliqni qonuniy kamaytirish ishimiz ichida. Tejalgan summadan alohida foiz olmaymiz." },
        { title: "Buxgalter ofisingizda — oyiga 3 marta", text: "Hujjatlarni joyida koʻramiz, savollaringizga yuzma-yuz javob beramiz." },
        { title: "Maxfiylik — NDA bilan", text: "Soʻrovingiz boʻyicha maxfiylik shartnomasini imzolaymiz. Chet ellik taʼsischisi bor korxonalar uchun ayniqsa muhim." },
        { title: "Litsenziyali dasturlar va himoyalangan kompyuterlar", text: "1C va soliq toʻlovchining shaxsiy kabineti — rasmiy. Kompyuterlar litsenziyali antivirus bilan himoyalangan, maʼlumotlar tashqariga chiqmaydi." },
        { title: "Qabuldan oldin — tekshiruv", text: "Oxirgi davrni koʻrmasdan ishni qabul qilmaymiz. Eski xatolarni aniqlaymiz va tuzatish rejasini beramiz." },
      ],
    },
    pricing: {
      eyebrow: "Narx",
      h2: "Narx aylanmaga emas, ishning hajmiga bogʻliq",
      intro:
        "Tayyor tarif yoʻq — va bu ataylab. Aylanmasi 25 mlrd, mijozi 4 ta boʻlgan firma aylanmasi 5 mlrd, mijozi 1000 ta boʻlgan firmadan arzonroq boʻlishi mumkin. Narxni aylanma emas, hujjat hajmi belgilaydi.",
      cards: [
        { title: "Nimaga qarab", text: "Kirim-chiqim hujjatlari va xoʻjalik operatsiyalari soni, oylik hisobotlar, kadr hujjatlari va xodimlar soni — shunga qarab buxgalterning vaqti, vaqtga qarab narx." },
        { title: "Nima kirmaydi", text: "Tejalgan soliqdan foiz olmaymiz. Yashirin toʻlovlar yoʻq: shartnomada nima yozilgan boʻlsa, shu." },
        { title: "Nima uchun shtatdagidan qimmat", text: "Shtat buxgalteri koʻpincha yonboshida yana bir necha firmani yuritadi. Biz kam kompaniya olamiz va har birini oxirigacha tekshiramiz — siz aynan shu vaqt uchun toʻlaysiz." },
        { title: "Aniq narx qachon aytiladi", text: "Birinchi qoʻngʻiroqda, hujjat hajmini eshitgandan keyin. Shartnomagacha narx oʻzgarmaydi." },
      ],
      cta: "Hujjat hajmini ayting — narxni shu qoʻngʻiroqda aytamiz →",
    },
    who: {
      eyebrow: "Kim bilan ishlaymiz",
      h2: "Hammani olmaymiz — va bu sizni himoya qiladi",
      yesTitle: "Mos keladi",
      yes: [
        "Yillik aylanmasi 5 mlrd soʻmdan, xodimlari 5 nafardan ortiq MChJ",
        "Buxgalteri bor, lekin uning ishini hech kim tashqaridan tekshirmagan kompaniyalar",
        "Ishlab chiqarish, xizmat koʻrsatish, ulgurji savdo, import-eksport, marketpleyslar",
        "Toshkent shahri va Toshkent viloyati",
        "Soliqni qonuniy yoʻl bilan kamaytirmoqchi boʻlgan egalar",
      ],
      noTitle: "Olmaymiz",
      no: ["Chakana savdo", "Umuman soliq toʻlashni xohlamaydiganlar", "Hujjatsiz material olib quradigan qurilish", "Alkogol va tamaki"],
      note: "Javobgarlikni oʻz boʻynimizga olganimiz uchun faqat halol hisobni qabul qilamiz. Bu sizni ham himoya qiladi: bir buxgalterda «kulrang» firma boʻlsa, tekshiruv uning barcha mijozlariga keladi.",
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
            "Mijozlarga yiliga 4 mlrd soʻmgacha soliq tejab bergan", "1 mlrd soʻmgacha soliq xavflarini bartaraf etgan", "10 000 pozitsiyagacha ombor hisobini 1C bilan integratsiya qilgan",
          ],
        },
        {
          initial: "B",
          role: "Mijozlar bilan ishlash",
          name: "Bekzod",
          facts: ["Birinchi uchrashuv va shartnoma", "Arizaga 10 daqiqa ichida javob beradi", "Telegram: @Davronbekov_Bekzod"],
        },
      ],
    },
    clients: { eyebrow: "Tajriba", h2: "Hisobini yuritgan kompaniyalar", lead: "Jamoamiz turli yillarda ishlagan korxonalardan bir qismi." },
    faq: {
      eyebrow: "Savollar",
      h2: "Koʻp soʻraladi",
      items: [
        { q: "Buxgalterimni ishdan boʻshatishim kerakmi?", a: "Yoʻq, avval emas. Ekspress-audit buxgalteringiz ishini ham koʻrsatadi. Natijani koʻrib, oʻzingiz hal qilasiz — biz qarorni tekshiruvgacha soʻramaymiz." },
        { q: "Buxgalterim bor. Nega nimanidir oʻzgartirishim kerak?", a: "Hisobotni vaqtida topshirish — bu minimum. Biz odatda yoʻq narsani qoʻshamiz: 10 daqiqada javob, soliqni qonuniy kamaytirish, sizga oylik hisobot va bizning xatomiz uchun jarimani oʻzimiz toʻlashimiz." },
        { q: "Hozirgi buxgalterim bilan nima qilamiz?", a: "Ishni qabul qilishni oʻz zimmamizga olamiz: siz bilan birga hujjatlar, 1C bazasi va kirish huquqlarini olamiz, ekspress-auditda esa nima yopilmay qolganini koʻramiz." },
        { q: "Oldingi buxgalterning xatolari bilan nima boʻladi?", a: "Ekspress-auditda topamiz va tuzatish rejasini beramiz. Oldingi davr uchun javobgarlikni tekshiruvdan keyin alohida kelishamiz." },
        { q: "Hujjatlarimiz xavfsizmi?", a: "Soʻrovingiz boʻyicha NDA imzolaymiz. Faqat litsenziyali 1C, himoyalangan kompyuterlar va litsenziyali antivirus bilan ishlaymiz." },
        { q: "Ofisimizga kelasizlarmi?", a: "Ha, buxgalter oyiga 3 marta ofisingizga keladi. Uchrashuvlar — ofisimizda yoki Zoomda." },
        { q: "Dam olish kunlari javob berasizlarmi?", a: "Ha. Shanba va yakshanba kunlari ham javob beramiz." },
        { q: "Toshkentdan tashqarida ishlaysizlarmi?", a: "Asosan Toshkent shahri va viloyatida — chunki buxgalter oyiga 3 marta ofisingizga boradi." },
        { q: "Necha pul?", a: "Oyiga hujjat hajmiga qarab, oborotga emas. Aniq raqam — birinchi qoʻngʻiroqda, hajmni eshitgandan keyin." },
        { q: "Nimaga shtat buxgalteridan qimmat?", a: "Shtat buxgalteri koʻpincha yonboshida yana bir necha firmani yuritadi — tekshirishga vaqt qolmaydi. Bizda narx ichida: 10 daqiqada javob, imtiyozlarni qoʻllash, har oy ombor bilan solishtirish va xato uchun jarimani oʻzimiz toʻlashimiz." },
      ],
    },
    cta: { eyebrow: "Birinchi qadam" },
    process: {
      eyebrow: "Ish qanday boshlanadi",
      h2: "Arizadan birinchi hisobotgacha — 5 qadam",
      steps: [
        { title: "Ariza → 10 daqiqa", text: "Bekzod bogʻlanadi va uchta savol beradi: oyiga nechta hujjat, ombor qayerda yuritiladi, oxirgi tekshiruv qachon boʻlgan." },
        { title: "Ekspress-audit", text: "Oxirgi davr hisobotlari, ombor ↔ 1C solishtiruvi, qoʻllanmagan imtiyozlar, kontragent xavflari. Buxgalteringizdan hech narsa soʻramaymiz." },
        { title: "Natija va narx", text: "Uchrashuvda (ofisda yoki Zoomda) xatolar roʻyxati, xavf summasi va tuzatish rejasini koʻrsatamiz. Shu yerda aniq narxni aytamiz." },
        { title: "Shartnoma va ishni qabul qilish", text: "Hujjatlar, 1C bazasi va kirish huquqlarini siz bilan birga olamiz. Umumiy Telegram-guruh ochiladi." },
        { title: "Har oy", text: "Hisobotlar muddatida, ombor solishtiruvi, direktor uchun hisobot, ofisingizga 3 marta tashrif. Aloqa 24/7." },
      ],
    },
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
        "Отчёты сдаются в срок — это минимум. Мы добавляем три вещи: ответ на любой вопрос за 10 минут, законное снижение налогов и ответственность, прописанную в договоре, — штраф по нашей ошибке платим сами. Учёт лично ведёт главный бухгалтер с опытом с 2016 года.",
      cta: "Бесплатный звонок на 10 минут",
      telegram: "Написать в Telegram",
      note: "Никуда ехать не нужно. Бекзод перезвонит, задаст два-три вопроса о вашем учёте и скажет, где обычно прячется переплата.",
      sample: {
        title: "Отчёт директору за месяц",
        period: "{month} {year}",
        badge: "Образец",
        rows: [
          ["НДС, НДФЛ, соцналог", "Сданы · {m}"],
          ["Сверка склад ↔ 1С", "Расхождений нет"],
          ["Проверка контрагентов", "31 · рисков нет"],
          ["Применённая льгота", "1 · экономия 4,2 млн"],
          ["Налоговые проверки", "0"],
        ],
        stat1: ["Ответ на вопрос", "до 10 минут"],
        stat2: ["Выезд к вам в офис", "3 раза в месяц"],
        stamp: "SIFAT BUXGALTER · ПРОВЕРЕНО · ",
        signed: "Проверил главный бухгалтер",
      },
    },
    stats: [
      ["2016", "года в бухгалтерии"],
      ["4 млрд", "сум налогов в год экономии клиентам"],
      ["10 мин", "ответ на вопрос"],
      ["24/7", "на связи, включая выходные"],
    ],
    triggers: {
      eyebrow: "Когда к нам приходят",
      h2: "Обычно пишут в двух случаях: когда с бухгалтером что-то не так — или когда всё выглядит нормально",
      items: [
        "Всё выглядит нормально — но сколько налогов вы переплачиваете, никто не считал",
        "Бухгалтер уходит — декрет, пенсия, другая работа — и дела передать некому",
        "Пришло требование из налоговой или назначен налоговый аудит",
        "Банк заблокировал расчётный счёт",
        "Вы не видите, что делает бухгалтер: отчёта вам нет, ответа на вопрос — часами",
        "Оборот вырос, налоги тоже — а законный способ платить меньше никто не показывает",
        "Нет времени следить за новыми законами",
      ],
      note: "В любом случае начинаем с одного шага — экспресс-аудита.",
    },
    check: {
      title: "Задайте бухгалтеру 3 вопроса — сегодня",
      intro: "Для этих вопросов не нужно разбираться в учёте. Напишите в Telegram. Если ответ не пришёл за 10 минут — это уже первый ответ.",
      questions: [
        { q: "Какая налоговая льгота применена в прошлом квартале и сколько она сэкономила?", why: "Нет точной цифры — льгота не применялась. В Узбекистане десятки налоговых льгот, вы переплачиваете каждый месяц." },
        { q: "Реальный остаток на складе сегодня сходится с цифрой в 1С?", why: "«Надо проверить» — значит, не сверяли никогда. При проверке именно это расхождение превращается в штраф." },
        { q: "За последние два года переплаченные налоги были возвращены?", why: "«Переплаты нет» — этого никто не проверял. Истечёт срок — деньги не вернутся." },
      ],
      outroYes: "На все три есть чёткий ответ? У вас сильный бухгалтер — мы вам не нужны, так и скажем.",
      outroNo: "Нет ответа хотя бы на один? Это место, где деньги уже теряются. За 10 минут на звонке скажем, с какого начать — бесплатно.",
      link: "Записаться на бесплатный звонок →",
    },
    compare: {
      eyebrow: "Сравните",
      h2: "Бухгалтер у вас уже есть. Вот что изменится",
      lead: "Мы не предлагаем «ещё одного бухгалтера». Мы меняем то, за что вы на самом деле платите: риск, скорость и деньги, которые сейчас уходят в налоги.",
      colNow: "Сейчас, с вашим бухгалтером",
      colUs: "С Sifat Buxgalter",
      rows: [
        ["Скорость ответа", "Ответ приходит через несколько часов — банк уже закрыт", "До 10 минут, 24/7. Срочный платёж — 5 минут"],
        ["Новые законы и льготы", "Вы узнаёте о них сами — из Instagram или от соседа", "Сообщаем первыми и применяем подходящие вам льготы"],
        ["Законное снижение налогов", "Не входит в обязанности бухгалтера — обычно его никто не делает", "Входит в нашу работу. Отдельный процент от экономии не берём"],
        ["Что вы видите", "«Отчёт отправлен» — и всё", "Каждый месяц отчёт директору: сколько налогов вышло, почему и к чему готовиться"],
        ["Склад и документы", "Никто не сверяет, пока не придёт проверка", "Сверяем до договора, на экспресс-аудите, и потом каждый месяц"],
        ["Штраф за ошибку бухгалтера", "Платит компания", "Ошибка наша — штраф платим мы. Прописано в договоре"],
        ["Декрет, пенсия, увольнение", "Учёт остаётся на полпути, дела передать некому", "Учёт не зависит от одного сотрудника"],
        ["Сколько фирм на одном бухгалтере", "Часто несколько сразу — на проверку не хватает времени", "Берём мало компаний, чтобы каждую проверять до конца"],
        ["Когда приходит налоговая проверка", "Отвечаете вы сами — бухгалтер говорит «не знаю» или уже ушёл", "Документы, возражение, общение с налоговой — всё на нас"],
        // ПОДТВЕРДИТЬ: ценовой якорь — удалите строку, если клиент против
        ["Цена в месяц", "Зарплата бухгалтера + неприменённые льготы + штраф за просроченный отчёт", "Одна сумма — всё включено. Один предотвращённый штраф окупает месяц"],
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
        { title: "Учёт и отчётность", id: "reporting", items: ["Полный бухгалтерский и налоговый учёт", "Сдача отчётности в срок", "Контроль дебиторской и кредиторской задолженности", "Банковские операции", "Электронные счета-фактуры, акты сверки, доверенности"] },
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
      lead: "Sifat значит «качество». В договоре мы записываем его измеримыми цифрами.",
      items: [
        { title: "Ответ — до 10 минут", text: "Открываем с вами общую группу в Telegram: написали — ответ в течение 10 минут. На связи 24/7 — и в субботу, и в воскресенье." },
        { title: "Наша ошибка — наш штраф", text: "Если штраф возник по нашей вине, платим его сами. Условие одно: склад ведётся честно." },
        { title: "Налоговая оптимизация — без процента", text: "Законное снижение налогов входит в нашу работу. Отдельный процент от экономии не берём." },
        { title: "Бухгалтер у вас в офисе — 3 раза в месяц", text: "Смотрим документы на месте и отвечаем на вопросы лично." },
        { title: "Конфиденциальность — по NDA", text: "По запросу подписываем соглашение о неразглашении. Особенно важно для компаний с иностранными учредителями." },
        { title: "Лицензионное ПО и защищённые компьютеры", text: "1С и личный кабинет налогоплательщика — официально. Компьютеры защищены лицензионным антивирусом, данные не уходят наружу." },
        { title: "Проверка до приёма", text: "Не берём дела, не посмотрев последний период. Находим старые ошибки и даём план исправления." },
      ],
    },
    pricing: {
      eyebrow: "Цена",
      h2: "Цена зависит не от оборота, а от объёма работы",
      intro: "Готовых тарифов нет — и это намеренно. Фирма с оборотом 25 млрд и 4 клиентами может стоить дешевле фирмы с оборотом 5 млрд и 1000 клиентов. Цену определяет объём документов, а не оборот.",
      cards: [
        { title: "От чего зависит", text: "Количество приходных и расходных документов, хозяйственных операций, ежемесячных отчётов, кадровых документов и сотрудников — от этого время бухгалтера, от времени — цена." },
        { title: "Чего нет", text: "Процент от сэкономленных налогов не берём. Скрытых платежей нет: что в договоре, то и платите." },
        { title: "Почему дороже штатного", text: "Штатный бухгалтер часто ведёт ещё несколько фирм на стороне. Мы берём мало компаний и проверяем каждую до конца — вы платите за это время." },
        { title: "Когда назовём точную цену", text: "На первом звонке, после того как узнаем объём документов. До договора цена не меняется." },
      ],
      cta: "Назовите объём документов — цену скажем на этом же звонке →",
    },
    who: {
      eyebrow: "С кем работаем",
      h2: "Берём не всех — и это защищает вас",
      yesTitle: "Подходит",
      yes: ["ООО с годовым оборотом от 5 млрд сум и штатом от 5 человек", "Компании, у которых есть бухгалтер, но его работу никто не проверял со стороны", "Производство, услуги, оптовая торговля, импорт-экспорт, маркетплейсы", "Ташкент и Ташкентская область", "Собственники, которые хотят платить меньше налогов законно"],
      noTitle: "Не берём",
      no: ["Розничная торговля", "Те, кто не хочет платить налоги вообще", "Стройка, покупающая материалы без документов", "Алкоголь и табак"],
      note: "Мы берём ответственность на себя, поэтому принимаем только честный учёт. Это защищает и вас: если у бухгалтера есть «серая» фирма, проверка приходит ко всем его клиентам.",
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
            "Сэкономил клиентам до 4 млрд сум налогов в год", "Снял налоговые риски на сумму до 1 млрд сум", "Интегрировал складской учёт до 10 000 позиций с 1С",
          ],
        },
        { initial: "Б", role: "Работа с клиентами", name: "Бекзод", facts: ["Первая встреча и договор", "Отвечает на заявку в течение 10 минут", "Telegram: @Davronbekov_Bekzod"] },
      ],
    },
    clients: { eyebrow: "Опыт", h2: "Компании, чей учёт мы вели", lead: "Часть компаний, с которыми работала наша команда в разные годы." },
    faq: {
      eyebrow: "Вопросы",
      h2: "Часто спрашивают",
      items: [
        { q: "Мне нужно увольнять своего бухгалтера?", a: "Нет, не сразу. Экспресс-аудит покажет и работу вашего бухгалтера. Посмотрите результат и решите сами — до проверки мы решения не просим." },
        { q: "У меня уже есть бухгалтер. Зачем что-то менять?", a: "Отчёты вовремя — это минимум. Мы добавляем то, чего обычно нет: ответ за 10 минут, законное снижение налогов, ежемесячный отчёт вам и штраф за нашу ошибку за наш счёт." },
        { q: "Что делать с нынешним бухгалтером?", a: "Приём дел берём на себя: вместе с вами забираем документы, базу 1С и доступы, а на экспресс-аудите смотрим, что осталось незакрытым." },
        { q: "Что будет с ошибками прошлого бухгалтера?", a: "Найдём их на экспресс-аудите и дадим план исправления. Ответственность за прошлый период обсуждаем отдельно после проверки." },
        { q: "Наши документы в безопасности?", a: "По запросу подписываем NDA. Работаем только в лицензионной 1С, на защищённых компьютерах с лицензионным антивирусом." },
        { q: "Вы приезжаете к нам в офис?", a: "Да, бухгалтер приезжает к вам 3 раза в месяц. Встречи — у нас в офисе или в Zoom." },
        { q: "Отвечаете в выходные?", a: "Да. Отвечаем и в субботу, и в воскресенье." },
        { q: "Работаете за пределами Ташкента?", a: "В основном в Ташкенте и области — потому что бухгалтер выезжает к вам 3 раза в месяц." },
        { q: "Сколько это стоит?", a: "Зависит от объёма документов в месяц, не от оборота. Точная цифра — на первом звонке, после того как узнаем объём." },
        { q: "Почему дороже штатного бухгалтера?", a: "Штатный бухгалтер часто ведёт ещё несколько фирм — на проверку времени нет. В нашу цену входит: ответ за 10 минут, применение льгот, ежемесячная сверка со складом и штраф за нашу ошибку за наш счёт." },
      ],
    },
    cta: { eyebrow: "Первый шаг" },
    process: {
      eyebrow: "Как начинается работа",
      h2: "От заявки до первого отчёта — 5 шагов",
      steps: [
        { title: "Заявка → 10 минут", text: "Бекзод связывается и задаёт три вопроса: сколько документов в месяц, где ведётся склад, когда была последняя проверка." },
        { title: "Экспресс-аудит", text: "Отчётность за последний период, сверка склад ↔ 1С, неприменённые льготы, риски по контрагентам. У вашего бухгалтера ничего не спрашиваем." },
        { title: "Результат и цена", text: "На встрече (в офисе или в Zoom) показываем список ошибок, сумму риска и план исправления. Здесь же называем точную цену." },
        { title: "Договор и приём дел", text: "Документы, базу 1С и доступы забираем вместе с вами. Открывается общая группа в Telegram." },
        { title: "Каждый месяц", text: "Отчёты в срок, сверка склада, отчёт директору, 3 выезда к вам в офис. Связь 24/7." },
      ],
    },
  },
};
