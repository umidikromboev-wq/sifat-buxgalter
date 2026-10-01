import type { ServicePage } from "../types";

// Faqat Ibrohim bilan intervyu, xizmatlar PDF va 23.09 Zoom faktlari. Narx yozilmaydi: Umid qarori 25.09.
export const services: Record<string, ServicePage> = {
  autsorsing: {
    slug: "buxgalteriya-autsorsingi",
    title: "MChJ uchun buxgalteriya autsorsingi, Toshkent",
    description:
      "MChJ buxgalteriya va soliq hisobini toʻliq yuritamiz: hisobotlar muddatida, 10 daqiqada javob, buxgalter ofisingizda oyiga 3 marta. Xatomiz sabab jarimani oʻzimiz toʻlaymiz.",
    name: "Buxgalteriya autsorsingi",
    h1: "MChJ uchun buxgalteriya autsorsingi, Toshkent",
    lead: "Korxonangiz hisobini toʻliq olamiz: birlamchi hujjatlar, soliqlar, hisobotlar, bank, ish haqi. Savolingizga 10 daqiqada javob va har oy hisobot olasiz. Xatolarimiz uchun shartnoma boʻyicha javob beramiz.",
    when: {
      h2: "Qachon autsorsingga oʻtishadi",
      items: [
        "Shtatdagi buxgalter ketyapti: dekretga, pensiyaga yoki boshqa ishga",
        "Buxgalter bir necha soatdan keyin javob beradi, toʻlov esa bugun kerak",
        "Soliq nega bunchalik chiqayotganini va ortiqcha toʻlamayotganingizni bilmaysiz",
        "Aylanma oʻsyapti, u bilan birga yangi soliq va majburiyatlar qoʻshilyapti",
        "Buxgalter bir vaqtda koʻp firmani yuritadi va hujjatlaringizni tekshirishga ulgurmaydi",
      ],
    },
    includes: {
      h2: "Xizmatga nimalar kiradi",
      items: [
        "Toʻliq buxgalteriya va soliq hisobi",
        "Hisobotlarni muddatida topshirish",
        "Bank operatsiyalari va toʻlovlar, jumladan konvertatsiya va chet elga toʻlov",
        "Elektron hisob-faktura, solishtirma dalolatnoma, ishonchnoma",
        "Debitor va kreditor qarzlar nazorati",
        "Bitimdan oldin kontragentni tekshirish",
        "Ish haqi hisob-kitobi va kadrlar hujjatlari",
        "Rahbarga oylik hisobot: qancha soliq chiqdi, nega va nimaga tayyorlanish kerak",
      ],
    },
    steps: {
      h2: "Ishni qanday boshlaymiz",
      items: [
        ["10 daqiqalik qoʻngʻiroq", "Bekzod hisobingiz va omboringiz haqida bir necha savol beradi va asosiy xavf odatda qayerda yashirinishini aytadi."],
        ["Kirish tekshiruvi", "Oxirgi davrni koʻrib chiqamiz, odatda yarim yildan bir yilgacha. Javobgarlik bizga oʻtadi, shuning uchun eski xatolarni soliqdan oldin oʻzimiz topishimiz kerak."],
        ["Shartnoma", "Ishlar roʻyxati, javob muddati va shartni yozamiz: xatomiz sabab jarimani oʻzimiz toʻlaymiz."],
        ["Hisobni yuritish", "Umumiy Telegram-guruh, buxgalter ofisingizda oyiga 3 marta, har oy hisobot."],
      ],
    },
    promise: {
      h2: "Shartnomaga nimalarni yozamiz",
      items: [
        ["10 daqiqada javob", "Kecha-yu kunduz aloqadamiz, shanba-yakshanba ham."],
        ["Xato bizdan boʻlsa, jarima ham bizdan", "Bitta shartimiz bor: ombor halol yuritilsin."],
        ["Soliqni kamaytirish uchun foiz olmaymiz", "Soliqni qonuniy kamaytirish ishimizga kiradi, tejalgan puldan foiz soʻramaymiz."],
        ["Faqat litsenziyali dasturlar", "1C va soliq toʻlovchining shaxsiy kabineti, kompyuterlarda litsenziyali antivirus."],
      ],
    },
    faq: [
      ["Autsorsing shtatdagi buxgalterdan nimasi bilan yaxshi?", "Hisob bitta odamga bogʻliq emas: dekret, kasallik yoki ishdan ketish ishni toʻxtatmaydi. Javob 10 daqiqada keladi, soliqni qonuniy kamaytirish esa xizmatga kiradi."],
      ["Xizmat qancha turadi?", "Narx ish hajmiga bogʻliq: oyiga qancha hujjat, xaridor va operatsiya borligiga. Aylanmaning oʻzi narxni belgilamaydi. Aniq summani qoʻngʻiroq va ekspress-auditdan keyin aytamiz."],
      ["Qanday korxonalar bilan ishlaysiz?", "Yillik aylanmasi 5 mlrd soʻmdan, xodimlari 5 nafardan ortiq MChJlar bilan, Toshkent va Toshkent viloyatida: ishlab chiqarish, xizmatlar, ulgurji savdo, import va eksport, marketpleyslar."],
      ["Kimni olmaysiz?", "Chakana savdo, soliq toʻlashni istamaydiganlar, hujjatsiz material olib naqd pulga qurilish, alkogol va tamaki. Hisob uchun javobgarlikni olamiz, shuning uchun faqat halol hisobni qabul qilamiz."],
    ],
    related: ["shtat", "vybor", "prinyat"],
  },

  soliq: {
    slug: "soliq-maslahati",
    title: "Soliq maslahati va soliqni qonuniy kamaytirish",
    description:
      "Kamroq toʻlashning qonuniy yoʻllarini topamiz: imtiyozlar, soliq rejimini oʻzgartirish, ortiqcha toʻlovni qaytarish. Tejalgan puldan foiz olmaymiz, bu xizmat narxiga kiradi.",
    name: "Soliq maslahati",
    h1: "Soliq maslahati: kamroq toʻlang, lekin qonuniy",
    lead: "«Tanishimning biznesi xuddi menikiga oʻxshaydi, lekin u kamroq toʻlaydi. Qanday qilib?» Tadbirkorlardan eng koʻp eshitadigan savolimiz shu. Amaldagi imtiyoz va rejimlardan aynan sizning korxonangizga qaysilari toʻgʻri kelishini aniqlaymiz va qoʻllaymiz. Soliqni qonuniy kamaytirish xizmatga kiradi, alohida foiz olmaymiz.",
    when: {
      h2: "Qachon kerak boʻladi",
      items: [
        "Shu hajm va sohadagi korxonalardan koʻproq toʻlayapsiz",
        "Buxgalter hisobot topshiradi, lekin kamroq toʻlash yoʻlini hech taklif qilmagan",
        "Qonundagi oʻzgarishlarni buxgalterdan emas, Instagramdan bilasiz",
        "Aylanma yangi soliqlar qoʻshiladigan chegaraga yaqinlashyapti",
        "Ortiqcha toʻlangan soliq bor, uni hech kim qaytarmayapti",
      ],
    },
    includes: {
      h2: "Nima qilamiz",
      items: [
        "Soliq yukini tahlil qilamiz: nima toʻlayapsiz, nega va qayerda ortiqcha",
        "Sohangizga mos imtiyozlarni saralab, faqat sizga toʻgʻri keladiganlarini qoʻllaymiz",
        "Soliqqa tortish tizimini biznes ehtiyojiga qarab oʻzgartiramiz",
        "Kutilmagan qoʻshimcha hisob-kitob boʻlmasligi uchun soliq xavflarini oldindan aniqlaymiz",
        "Ortiqcha toʻlangan soliqlarni qaytaramiz",
        "Oldindan aytamiz: qancha soliq chiqadi va aylanma oʻsganda nimaga tayyorlanish kerak",
      ],
    },
    steps: {
      h2: "Qanday ishlaymiz",
      items: [
        ["Raqamlarni koʻramiz", "Raqamlarsiz hech narsa vaʼda qilib boʻlmaydi. Ekspress-auditda haqiqiy yukni va oldingi buxgalter xatolarini koʻramiz."],
        ["Yoʻllarni tanlaymiz", "Imtiyoz koʻp, lekin aksariyati faqat maʼlum sohalarga toʻgʻri keladi. Sizga nima mos, nima mos emasligini ochiq aytamiz."],
        ["Qoʻllaymiz va hisobot beramiz", "Har oy qancha soliq chiqqani va nima oʻzgarganini koʻrsatamiz."],
      ],
    },
    promise: {
      h2: "Farqimiz",
      items: [
        ["Tejalgan summadan foiz yoʻq", "Koʻpchilik tejalgan summaning 5–10% ini oladi. Bizda bu xizmatga kiradi: soliqni 10 mln ga kamaytiramizmi, 100 mln gami, farqi yoʻq."],
        ["Faqat qonuniy yoʻllar", "Sohangiz uchun imtiyoz boʻlmasa, shuni aytamiz. Sxema taklif qilmaymiz."],
        ["Yangi qonunlardan birinchi boʻlib xabar beramiz", "Oʻzgarishlar tez-tez chiqadi. Tanishlaringizdan eshitishingizdan oldin oʻzimiz aytamiz."],
      ],
    },
    faq: [
      ["Har qanday biznesning soligʻini kamaytirsa boʻladimi?", "Yoʻq. Imtiyozlar sohaga bogʻliq. Masalan, qazib oluvchi korxonalarda imtiyoz deyarli yoʻq. Sizga nima mosligini kirish tekshiruvidan keyin aytamiz."],
      ["Qancha tejash mumkin?", "Birinchi kuni summani aytib boʻlmaydi, avval raqamlarni koʻrish kerak. Taklif qilganimiz hammasi qonuniy va aynan sizning korxonangizga mos boʻladi."],
      ["Xizmatsiz faqat maslahat olsa boʻladimi?", "Qoʻngʻiroq qiling, vazifangizni gaplashib olamiz. Optimallashtirish hisobni har oy koʻrib turganimizda eng yaxshi ishlaydi."],
    ],
    related: ["lgoty", "shtat"],
  },

  kirish: {
    slug: "buxgalteriya-hisobini-tiklash",
    title: "Kirish tekshiruvi va buxgalteriya hisobini tiklash",
    description:
      "Oxirgi davr hisobini tekshiramiz, oldingi buxgalter xatolarini topamiz va 1C bazasini tiklaymiz. Soliq topishidan oldin tuzatish rejasini beramiz.",
    name: "Hisobni tiklash",
    h1: "Kirish tekshiruvi va buxgalteriya hisobini tiklash",
    lead: "Oldingi buxgalter ketdi, 1C yarim toʻldirilgan, hujjatlar tarqoq. Korxonani xizmatga olishdan oldin oxirgi davrni tekshiramiz: oʻtgan xatolarni soliq emas, biz topishimiz kerak.",
    when: {
      h2: "Qachon kerak boʻladi",
      items: [
        "Buxgalter ketdi, ishni topshiradigan odam yoʻq",
        "1C oxirigacha toʻldirilmagan, operatsiyalarning bir qismi faqat Excelda",
        "Buxgalter xato qilgan yoki muammolarni yashirgan degan shubha bor",
        "Ombor Excelda yuritiladi va qoldiqlar mos kelmaydi",
        "Yaqinda tekshiruv boʻladi va u nimani topishini bilish kerak",
      ],
    },
    includes: {
      h2: "Nimani tekshiramiz",
      items: [
        "Oxirgi davr hisobi, odatda yarim yildan bir yilgacha",
        "Ombor: kirim, chiqim va qoldiqlar sotilgan tovarga nisbatan",
        "Soliq deklaratsiyalari va byudjet bilan haqiqiy hisob-kitoblar",
        "Elektron birlamchi hujjatlar: hisob-fakturalar, solishtirma dalolatnomalar",
        "Kontragentlar va soliq oldidagi qarzlar",
        "1C bazasining toʻldirilganligi",
      ],
    },
    steps: {
      h2: "Nima olasiz",
      items: [
        ["Xatolar roʻyxati", "Nima topildi, qaysi davrda va nimaga olib kelishi mumkin."],
        ["Tuzatish rejasi", "Nimani darhol tuzatish, nimani aniqlashtirilgan hisobot bilan, nimani alohida muhokama qilish kerak."],
        ["Xizmat boʻyicha qaror", "Hisobni tartibga keltirish mumkin boʻlsa, korxonani olamiz va keyin u uchun javob beramiz."],
      ],
    },
    promise: {
      h2: "Nega tekshiruvdan boshlaymiz",
      items: [
        ["Javobgarlik bizga oʻtadi", "Shuning uchun oxirgi davrni koʻrmasdan ishni olmaymiz."],
        ["Ochiq javob", "Hisobni tiklab boʻlmasa yoki biznes faqat naqdda ishlasa, buni toʻgʻridan-toʻgʻri aytamiz."],
        ["Koʻr-koʻrona vaʼda yoʻq", "Xavf summasi va ish hajmini faqat raqamlarni koʻrgandan keyin aytamiz."],
      ],
    },
    faq: [
      ["Qaysi davrni tekshirasiz?", "Odatda oxirgi bir yil yoki yil oʻrtasidan bugungacha boʻlgan davr. Uch yillik chuqur audit alohida ish hisoblanadi."],
      ["Oldingi buxgalter xatolari nima boʻladi?", "Ularni koʻrsatamiz va tuzatish rejasini beramiz. Oʻtgan davr uchun javobgarlikni tekshiruvdan keyin alohida kelishamiz."],
      ["Tekshiruv qancha vaqt oladi?", "Hujjatlar hajmi va 1C holatiga bogʻliq. Muddatni bazani birinchi koʻrganimizdan keyin aytamiz."],
    ],
    related: ["prinyat", "sklad"],
  },

  tekshiruv: {
    slug: "soliq-tekshiruvi",
    title: "Soliq tekshiruvlarida hamrohlik va dalolatnomaga eʼtiroz",
    description:
      "Kameral va sayyor tekshiruvlar uchun hujjat tayyorlaymiz, soliq dalolatnomalariga eʼtiroz yozamiz va korxonani davlat organlari oldida himoya qilamiz.",
    name: "Soliq tekshiruvlari",
    h1: "Soliq tekshiruvlarida hamrohlik",
    lead: "Talabnoma yoki tekshiruv dalolatnomasi keldimi, endi har bir kun hisobda. Hujjatlarni yigʻamiz, korxona pozitsiyasini tushuntiramiz va dalolatnomaga eʼtiroz tayyorlaymiz. Xizmatdagi mijozlarimizda esa ishni tekshiruvgacha yetkazmaslikka harakat qilamiz: xavfni oldindan topamiz.",
    when: {
      h2: "Qachon murojaat qilishadi",
      items: [
        "Soliqdan tushuntirish yoki hujjat soʻralgan talabnoma keldi",
        "Kameral yoki sayyor tekshiruv tayinlandi",
        "Qoʻshimcha hisob-kitob va jarimali dalolatnoma olindi",
        "Tekshiruv oʻtgan yillarni koʻtaryapti, oʻsha yillardagi buxgalter esa allaqachon ketgan",
      ],
    },
    includes: {
      h2: "Nima qilamiz",
      items: [
        "Kameral va sayyor tekshiruvlar uchun hujjatlar tayyorlaymiz",
        "Soliq oʻz maʼlumotlarida allaqachon nimani koʻrayotganini tekshiramiz",
        "Dalolatnomalarga eʼtiroz yozamiz va davlat organlari oldida korxona manfaatini himoya qilamiz",
        "Tekshirilayotgan davr uchun yetishmayotgan hujjatlarni tiklaymiz",
        "Yuridik qoʻllab-quvvatlash va hujjat aylanishi",
      ],
    },
    steps: {
      h2: "Qanday ishlaymiz",
      items: [
        ["Talabnoma yoki dalolatnomani tahlil qilamiz", "Aynan nima soʻralyapti, qaysi davr uchun va qanday summalar."],
        ["Pozitsiyani yigʻamiz", "Hujjatlar, hisob-kitoblar, tushuntirishlar: javob birinchi martadayoq toʻliq boʻlsin."],
        ["Oxirigacha hamrohlik qilamiz", "Qoʻshimcha savollarga javob beramiz, xulosaga rozi boʻlmasak, eʼtiroz yozamiz."],
      ],
    },
    promise: {
      h2: "Xavfni qanday oldindan kamaytirish mumkin",
      items: [
        ["Farqsiz ombor", "Eng qimmatga tushadigan xato: ombor Excelda, sotuv cheksiz. Uchinchi yili tekshiruv oldingi ikki yilni koʻtarishi mumkin."],
        ["Kontragentlar nazoratda", "Hamkorlarni talabnomadan keyin emas, bitimdan oldin tekshiramiz."],
        ["Xavfni erta aniqlash", "Muammoni dalolatnomaga tushishidan oldin hisobda koʻramiz."],
      ],
    },
    faq: [
      ["Xizmatda boʻlmagan korxonalar bilan ishlaysizmi?", "Qoʻngʻiroq qilib vaziyatni aytib bering: yordam bera olamizmi va buning uchun nima kerakligini aytamiz."],
      ["Dalolatnomaga eʼtiroz bildirsa boʻladimi?", "Tekshiruv xulosalariga rozi boʻlmaslikka asos boʻlsa, asoslangan eʼtiroz tayyorlaymiz. Imkoniyatni hujjatlarni oʻrganib, ochiq baholaymiz."],
      ["Qanday hujjatlar kerak boʻladi?", "Talabnoma yoki dalolatnoma, 1C va Didoxga kirish, tekshirilayotgan davr uchun bank koʻchirmalari. Aniq roʻyxatni tahlildan keyin beramiz."],
    ],
    related: ["sklad", "prinyat"],
  },

  blok: {
    slug: "hisob-raqamini-blokdan-chiqarish",
    title: "Bloklangan hisob raqamini ochtirish: soliq toʻxtatgan boʻlsa",
    description:
      "Soliq bilan kelishmovchilik tufayli hisob raqamingiz bloklandimi? Sababini topamiz, hujjat va tushuntirishlarni tayyorlaymiz, blokni tezroq olib tashlatamiz.",
    name: "Hisob raqamini ochish",
    h1: "Hisob raqamingiz toʻxtatildimi? Ochtirib beramiz",
    lead: "Hisob raqami toʻxtasa, hamma narsa toʻxtaydi: oylik, yetkazib beruvchilarga toʻlov, import. Soliq bilan qaysi kelishmovchilik sabab boʻlganini topamiz, hujjat va tushuntirishlar bilan yopamiz va blokni olib tashlatamiz.",
    when: {
      h2: "Qachon shunday boʻladi",
      items: [
        "Hisobot topshirilmagan yoki xato bilan topshirilgan",
        "Siz bilmagan soliq qarzi bor",
        "Soliq tushuntirish kutyapti, javob esa vaqtida yuborilmagan",
        "Hisob-faktura maʼlumotlari sizda va kontragentda farq qiladi",
      ],
    },
    includes: {
      h2: "Nima qilamiz",
      items: [
        "Bloklashning aniq sababini topamiz",
        "Kerakli davr uchun hisobot va byudjet bilan hisob-kitoblarni tekshiramiz",
        "Yetishmayotgan hisobot, tushuntirish va hujjatlarni tayyorlaymiz",
        "Blok olib tashlanguncha hamrohlik qilamiz",
        "Vaziyat takrorlanmasligi uchun hisobni sozlaymiz",
      ],
    },
    steps: {
      h2: "Harakat tartibi",
      items: [
        ["Qoʻngʻiroq", "Bank va soliqdan nima kelganini aytib bering. 10 daqiqa ichida javob beramiz."],
        ["Sababni tahlil qilish", "Soliq toʻlovchining shaxsiy kabineti va hisobotlarni koʻramiz."],
        ["Kelishmovchilikni yopish", "Sababga qarab hisobot, tushuntirish yoki aniqlashtirilgan hisobot topshiramiz."],
      ],
    },
    promise: {
      h2: "Nega xizmatdagi mijozlarda bunday boʻlmaydi",
      items: [
        ["Hisobotlar muddatida", "Topshirish va toʻlov muddatlarini kuzatib boramiz."],
        ["10 daqiqada javob", "Talabnoma va xatlar javobsiz qolmaydi."],
        ["Oylik hisobot", "Qancha va qachon toʻlash kerakligini oldindan bilasiz."],
      ],
    },
    faq: [
      ["Blok qancha vaqtda olib tashlanadi?", "Sababga va kelishmovchilikni qanchalik tez yopish mumkinligiga bogʻliq. Aniq muddatni tahlildan keyin aytamiz."],
      ["Hisob bloklanganda shoshilinch toʻlov qilsa boʻladimi?", "Bu qanday toʻxtatilganiga bogʻliq. Vaziyatingizni koʻrib, qanday variantlar borligini aytamiz."],
    ],
    related: ["vybor", "shtat"],
  },

  kadr: {
    slug: "kadrlar-hisobi-va-ish-haqi",
    title: "MChJ uchun kadrlar hisobi va ish haqi hisob-kitobi",
    description:
      "Kadrlar buyruqlari, mehnat shartnomalari va daftarchalari, ish haqi, aliment va ushlanmalarni aniq va kechiktirmasdan hisoblaymiz. Bularning hammasi buxgalteriya xizmatiga kiradi.",
    name: "Kadrlar va ish haqi",
    h1: "Kadrlar hisobi va ish haqi hisob-kitobi",
    lead: "Ishga olish, boʻshatish, boshqa lavozimga oʻtkazish, taʼtil: har biriga buyruq kerak, har bir oylikka esa soliq va ushlanmalarning aniq hisobi. Kadrlar hisobi va ish haqini buxgalteriya bilan birga yuritamiz, shunda raqamlar hamma joyda mos keladi.",
    when: {
      h2: "Qachon kerak boʻladi",
      items: [
        "Shtatda 5 va undan ortiq xodim bor, kadrlar hujjatlari esa «qanday boʻlsa» yuritiladi",
        "Ish haqini boshqa ishga ulgurmayotgan buxgalter hisoblaydi",
        "Aliment va boshqa ushlanmalar bor, ularda chalkashlik boʻladi",
        "Yaqinda tekshiruv, buyruq va shartnomalar esa yigʻilmagan",
      ],
    },
    includes: {
      h2: "Nimalar kiradi",
      items: [
        "Kadrlar buyruqlari: qabul, boʻshatish, oʻtkazish",
        "Mehnat shartnomalari va mehnat daftarchalari",
        "Ish haqi, aliment va ushlanmalar hisob-kitobi",
        "Ish haqidan JShDS va ijtimoiy soliq",
        "Ish haqi boʻyicha hisobotlarni muddatida topshirish",
      ],
    },
    steps: {
      h2: "Qanday ishlaymiz",
      items: [
        ["Kadrlar hujjatlarini tekshiramiz", "Nima bor, nima yetishmaydi va nimani tiklash kerak."],
        ["Tartibga keltiramiz", "Yetishmayotgan buyruq va shartnomalarni rasmiylashtiramiz."],
        ["Har oy yuritamiz", "Tabel, ish haqi, soliqlar va hisobotlar buxgalteriya bilan bir joyda yuritiladi."],
      ],
    },
    promise: {
      h2: "Nima olasiz",
      items: [
        ["Hamma joyda bir xil raqamlar", "Ish haqi, soliqlar va buxgalteriyani bitta jamoa yuritadi."],
        ["Kechikishsiz", "Ish haqi muddatiga hisoblangan, hisobotlar vaqtida topshirilgan."],
        ["Ishga olishdagi imtiyozlar", "Maʼlum toifadagi xodimlarni ishga olish soliq imtiyozi bersa, sizga toʻgʻri kelishini aytamiz."],
      ],
    },
    faq: [
      ["Faqat ish haqi va kadrlarni topshirsa boʻladimi?", "Kadrlar va ish haqini buxgalteriya bilan birga yuritamiz: shunda raqamlar mos keladi. Vazifangizni qoʻngʻiroqda muhokama qilamiz."],
      ["Eski kadrlar hujjatlarini tiklaysizmi?", "Ha, ekspress-auditda nima yetishmasligini koʻramiz va tiklaymiz."],
    ],
    related: ["shtat", "lgoty"],
  },

  ved: {
    slug: "tashqi-savdo-buxgalteriyasi",
    title: "Tashqi savdo buxgalteriyasi: import, eksport, valyuta toʻlovlari",
    description:
      "Import va eksport shartnomalarini roʻyxatdan oʻtkazamiz, chet elga toʻlov va konvertatsiyani oʻtkazamiz, TIF hisobini yuritamiz. Chet ellik taʼsischilar soʻrasa, NDA imzolaymiz.",
    name: "Tashqi savdo buxgalteriyasi",
    h1: "Import va eksport uchun buxgalteriya",
    lead: "Tashqi savdoda buxgalter tez kerak: roʻyxatdan oʻtmagan shartnomasiz bank toʻlovni chiqarmaydi, kechikish esa pulga tushadi. Shartnomalarni roʻyxatdan oʻtkazamiz, konvertatsiya va chet elga toʻlovlarni oʻtkazamiz, tashqi savdo hisobini butun buxgalteriya bilan birga yuritamiz.",
    when: {
      h2: "Kimga mos",
      items: [
        "Importyor va eksportyorlarga, ulgurji savdoga",
        "Chet ellik taʼsischisi bor korxonalarga",
        "Buxgalter band boʻlgani uchun chet elga toʻlovi «osilib» qoladiganlarga",
        "Tashqi savdo uchun shtatda alohida odam saqlashni istamaganlarga",
      ],
    },
    includes: {
      h2: "Nima qilamiz",
      items: [
        "Import va eksport shartnomalarini roʻyxatdan oʻtkazish",
        "Konvertatsiya va chet elga toʻlovlar",
        "Import yetkazib berish va eksport tushumi hisobi",
        "Chet ellik va mahalliy kontragentlarni tekshirish",
        "Korxonaning butun buxgalteriya va soliq hisobi",
      ],
    },
    steps: {
      h2: "Qanday ishlaymiz",
      items: [
        ["Umumiy Telegram-guruh", "Nimani toʻlash kerakligini yozasiz, qolganini oʻzimiz tayyorlab, oʻtkazib beramiz."],
        ["Shoshilinch toʻlovlar", "Oddiy konvertatsiya yoki toʻlov taxminan 5 daqiqada bitadi."],
        ["Shartnomalar nazorati", "Har bir shartnoma boʻyicha pul va tovar harakati mos kelishini kuzatamiz."],
      ],
    },
    promise: {
      h2: "Chet ellik taʼsischilar uchun",
      items: [
        ["Soʻrov boʻyicha NDA", "Maxfiylik shartnomasini imzolaymiz. Uni koʻpincha chet ellik taʼsischilar soʻraydi."],
        ["Zoomda uchrashuv", "Taʼsischi Toshkentda boʻlmasa, hammasini onlayn muhokama qilamiz."],
        ["Shaffof hisobot", "Har oy: qancha soliq, nega va oldinda nima bor."],
      ],
    },
    faq: [
      ["Shartnomalarni oʻzingiz roʻyxatdan oʻtkazasizmi?", "Ha, import va eksport shartnomalarini oʻzimiz roʻyxatdan oʻtkazamiz. Tashqi savdo uchun alohida odam saqlash shart emas."],
      ["Chet el kapitali bor korxonalar bilan ishlaysizmi?", "Ha. Soʻrov boʻyicha NDA imzolaymiz va uchrashuvlarni onlayn oʻtkazamiz."],
    ],
    related: ["vybor", "lgoty"],
  },
};
