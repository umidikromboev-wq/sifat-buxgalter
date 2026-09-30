import type { ArticlePage } from "../types";

// Maqolalar tadbirkorlar Bekzod va Ibrohimga eng koʻp beradigan savollarga javob beradi (intervyu, 2026-09).
// Manbasiz stavka, SK moddasi va muddat yozilmaydi.
const PUBLISHED = "2026-09-27";

export const articles: Record<string, ArticlePage> = {
  prinyat: {
    slug: "buxgalterdan-ishni-qabul-qilish",
    title: "Buxgalter ketyapti: ishni yoʻqotishsiz qanday qabul qilish",
    description:
      "Tadbirkor uchun cheklist: ketayotgan buxgalterdan nimalarni olish kerak — 1C bazasi, kirish huquqlari, hujjatlar — va uning hisobi uchun javob berishdan oldin nimani tekshirish kerak.",
    name: "Buxgalterdan ishni qabul qilish",
    h1: "Buxgalter ketyapti: ishni qabul qilib, uning xatolarini meros qilib olmaslik",
    lead: "Dekret, nafaqa, kasallik, boshqa ish — shtatdagi buxgalterda bu ertami-kechmi boʻladi. Eng xavfli vaqt — u ketgandan keyingi birinchi haftalar: kirish huquqlari bitta odamda, baza yarim toʻldirilgan, hisobot muddatlarini esa hech kim surmagan.",
    published: PUBLISHED,
    minutes: 5,
    body: [
      {
        h2: "Nega ishni topshirish — asosiy xavf",
        p: [
          "Buxgalter ishlab turganda koʻp narsa uning xotirasida turadi: qaysi toʻlovlar hali kiritilmagan, kim bilan solishtirilmagan, ombordagi qaysi qoldiqlar «keyin toʻgʻrilanadi». U ketganda bu bilim ham u bilan ketadi.",
          "Ibrohim bir marta ketayotgan buxgalterdan hisobni qabul qilgan — 1C bazasi oxirigacha toʻldirilmagan, operatsiyalarning bir qismi «jarayonda» qolib ketgan edi. Bunday dumlar keyin chiqadi, koʻpincha — tekshiruvda.",
        ],
      },
      {
        h2: "Oxirgi ish kunigacha nimalarni olish kerak",
        p: ["Roʻyxat tuzing va buxgalter hali joyida ekan, har bir bandni u bilan birga belgilang:"],
        list: [
          "1C (yoki boshqa dastur) bazasi — dolzarb nusxasi",
          "Kirish huquqlari: soliq toʻlovchining shaxsiy kabineti, Didox, bank-mijoz, elektron kalitlar",
          "Yaqin oylar uchun hisobotlar roʻyxati va muddatlari",
          "Asosiy kontragentlar va soliq bilan solishtirma dalolatnomalar",
          "Yopilmagan masalalar: soliq talabnomalari, nizolar, toʻlanmagan hisoblar",
          "Kadrlar hujjatlari: buyruqlar, mehnat shartnomalari va daftarchalari",
          "Ombor qoldiqlari — hisob boʻyicha va haqiqatda",
        ],
      },
      {
        h2: "Darhol nimani tekshirish kerak",
        p: [
          "Hujjatlarni olishning oʻzi yetmaydi — ular qanday holatda ekanini tushunish kerak. Shaxsiy kabinetdagi byudjet bilan hisob-kitoblarni 1C koʻrsatgani bilan solishtiring. Ombordagi hisob qoldiqlarini haqiqiysi bilan taqqoslang. Sotilgan hamma narsa hisobdan oʻtganini tekshiring.",
          "Farq boʻlsa, uni hozir — aniqlashtirilgan hisobot bilan tuzatish mumkin boʻlgan paytda topgan maʼqul, tekshiruv topganda emas.",
        ],
      },
      {
        h2: "Bu takrorlanmasligi uchun",
        p: [
          "Hisob bitta odamga bogʻliq boʻlmasligi kerak. Autsorsing kompaniyasida dekret ham, nafaqa ham yoʻq: xodim almashsa, ish jamoa ichida qoladi, kirish huquqlari esa kompaniya va sizda boʻladi.",
        ],
      },
    ],
    takeaway: "Biz ham xuddi shundan boshlaymiz: korxonani olishdan oldin oxirgi davrni tekshiramiz. Javobgarlik bizga oʻtadi, shuning uchun oldingi buxgalter xatolarini biz topishimiz kerak.",
    service: "kirish",
  },

  sklad: {
    slug: "ombor-excelda-soliq-xavfi",
    title: "Ombor Excelda: yashirin soliq xavfi",
    description:
      "Nega Excelda ombor va cheksiz sotuv yillar davomida koʻrinmaydi, uchinchi yili esa qoʻshimcha hisob-kitob va jarimaga aylanadi. Hisob misoli va hozirdanoq nimani tekshirish kerak.",
    name: "Ombor Excelda — yashirin xavf",
    h1: "Ombor Excelda va cheksiz sotuv: hisobotda koʻrinmaydigan xavf",
    lead: "Hisobotlar vaqtida topshirilgan, jarima yoʻq, buxgalter xotirjam. Ombor esa Excelda yuritiladi, tovarning bir qismi rasmiy cheksiz ketadi. Birinchi ikki yil hech narsa boʻlmaydi — shuning uchun bu xavf eng qimmati.",
    published: PUBLISHED,
    minutes: 4,
    body: [
      {
        h2: "Bu qanday koʻrinadi",
        p: [
          "Tovar keladi, sotiladi, qoldiqlar jadvalda hisoblanadi. 1Cga operatsiyalarning bir qismi tushmaydi: qayerdadir rasmiy kirim yoʻq, qayerdadir sotuv cheksiz oʻtgan. Hisobot esa topshiriladi — shunchaki toʻliq boʻlmagan maʼlumot asosida.",
        ],
      },
      {
        h2: "Nega bu ikki-uch yildan keyin chiqadi",
        p: [
          "Tekshiruv odatda bir oyni emas, davrni koʻradi. Uchinchi yili soliq auditi kelib, oldingi ikki yilni koʻtarsa, kirim, sotuv va qoldiqlar orasidagi farq butun davr uchun birdaniga koʻrinadi.",
          "Buni orqaga qarab tuzatish deyarli mumkin emas: tovar sotilgan, hujjatlar rasmiylashtirilmagan.",
        ],
      },
      {
        h2: "Hisob-kitob misoli",
        p: [
          "Ikki yil ichida 10 mlrd soʻm aylanmasi hisobdan oʻtmagan korxonani olaylik. Bunday holatda qoʻshimcha hisob-kitob va jarima yashirilgan aylanmaning 20% ini tashkil qilsa, bu 2 mlrd soʻm.",
          "Bu misol, meʼyor emas: haqiqiy summa qoidabuzarlik turiga bogʻliq. Lekin raqamlar tartibi ombor hisobini «tejash» nega eng qimmat qaror ekanini koʻrsatadi.",
        ],
      },
      {
        h2: "Hozirdanoq nimani tekshirish kerak",
        p: ["Buxgalteringizga berishga arziydigan bir necha savol:"],
        list: [
          "1Cdagi ombor qoldiqlari haqiqiysi bilan mos keladimi?",
          "Barcha kirim rasmiy rasmiylashtirilganmi?",
          "Barcha sotuvlar chek va hisobdan oʻtganmi?",
          "Omborni oxirgi marta qachon toʻliq solishtirgansiz?",
        ],
      },
    ],
    takeaway: "Shuning uchun oxirgi davrni koʻrmasdan ishni olmaymiz va ekspress-auditda omborni solishtiramiz. Xatomiz sabab jarimani oʻzimiz toʻlaymiz — lekin faqat ombor halol yuritilsa.",
    service: "kirish",
  },

  shtat: {
    slug: "shtatdagi-buxgalter-yoki-autsorsing",
    title: "Shtatdagi buxgalter yoki autsorsing: qaysi birini tanlash",
    description:
      "MChJ uchun shtatdagi buxgalter va buxgalteriya autsorsingini halol taqqoslash: javob tezligi, xavflar, qonunlar, soliqlar va xatolar uchun javobgarlik.",
    name: "Shtatdagi buxgalter yoki autsorsing",
    h1: "Shtatdagi buxgalter yoki autsorsing: halol taqqoslash",
    lead: "Koʻp tadbirkorlar yillar davomida bitta buxgalter bilan ishlaydi — bu normal. Lekin tobora koʻproq savol yangraydi: «Menga shtatdagi buxgalter nima kerak, autsorsingga bergan yaxshi emasmi?» Tadbirkor uchun muhim mezonlar boʻyicha koʻrib chiqamiz.",
    published: PUBLISHED,
    minutes: 5,
    body: [
      {
        h2: "Javob tezligi",
        p: [
          "Shtatdagi buxgalter yaqinroqdek tuyuladi: qoʻshni xonada oʻtiradi. Lekin amalda unga baribir Telegramda yozishadi, u esa boʻshaganda javob beradi. Hujjatlar allaqachon Didox va 1Cda, qogʻoz koʻtarib yurish shart emas — demak, yonida oʻtirish ham shart emas.",
          "Muhimi boshqa: savoldan javobgacha qancha vaqt oʻtadi. Toʻlovni bank yopilgunicha oʻtkazish kerak boʻlsa, toʻrt soatdan keyingi javob — yoʻqotilgan kun.",
        ],
      },
      {
        h2: "Bitta odamga bogʻliqlik",
        p: [
          "Dekret, nafaqa, kasallik, oilaviy sabablar — shtatdagi buxgalterda bu ertami-kechmi boʻladi va hisob yarim yoʻlda toʻxtaydi. Autsorsing kompaniyasida ish bitta odamga bogʻliq emas.",
        ],
      },
      {
        h2: "Yangi qonunlar va imtiyozlar",
        p: [
          "Qoidalar tez-tez oʻzgaradi, yangi nizomlar eʼlondan bir necha kun oʻtib chiqadi. Joriy ish bilan band shtatdagi buxgalter ularni har doim ham kuzatmaydi. Tadbirkor imtiyoz haqida Instagramdan bilib qoladi — va buxgalter nega indamadi, deb soʻraydi.",
        ],
      },
      {
        h2: "Soliqni qonuniy kamaytirish",
        p: [
          "Buxgalterning vazifasi — hisobotni vaqtida topshirish va jarima olmaslik. Kamroq toʻlash yoʻllarini izlash odatda uning vazifasiga kirmaydi. Yaxshi autsorsing kompaniyasi buni xizmat qismiga aylantiradi.",
        ],
      },
      {
        h2: "Xatolar uchun javobgarlik",
        p: [
          "Shtatdagi buxgalter xato qilsa, jarimani korxona toʻlaydi. Autsorsing kompaniyasi bilan shartnomada javobgarlikni yozib qoʻyish mumkin: xato bizniki — jarima ham bizniki.",
        ],
      },
      {
        h2: "Qachon baribir shtatdagi buxgalter kerak",
        p: [
          "Hisob juda katta boʻlib, bir necha kishining toʻliq kunini talab qilsa, ichki boʻlim oʻzini oqlashi mumkin. Lekin unda ham autsorsing tekshiruv uchun foydali: yangi koʻz oʻz buxgalteringiz koʻrmay qoʻygan narsani topadi.",
        ],
      },
    ],
    takeaway: "Autsorsing shtatdagi buxgalterda yoʻq narsani bersa yutadi: daqiqalarda javob, qonun va imtiyozlar vaqtida va shartnomadagi javobgarlik. Faqat narxni emas, aynan shuni solishtiring.",
    service: "autsorsing",
  },

  lgoty: {
    slug: "soliqni-qonuniy-kamaytirish",
    title: "Nega qoʻshni kamroq soliq toʻlaydi — va bu qonuniymi",
    description:
      "Nega oʻxshash korxonalarda soliq yuki har xil: imtiyozlar, rejimlar, ortiqcha toʻlov. Biznesingizga nima mosligini qanday bilish va nega buning uchun foiz toʻlash shart emas.",
    name: "Soliqni qonuniy kamaytirish",
    h1: "«Qoʻshnim kamroq toʻlaydi»: soliqni qanday qonuniy kamaytirish mumkin",
    lead: "Tadbirkorlarning eng koʻp beradigan savollaridan biri: «Qoʻshnimning biznesi xuddi meniki, lekin u kamroq soliq toʻlaydi. Balki buxgalterim nimanidir notoʻgʻri qilayotgandir?» Baʼzan — ha. Farq qayerdan kelishini koʻrib chiqamiz.",
    published: PUBLISHED,
    minutes: 4,
    body: [
      {
        h2: "Farq qayerdan keladi",
        p: ["Ikki oʻxshash korxonada soliq bir necha qonuniy sabab bilan farq qilishi mumkin:"],
        list: [
          "Soliqqa tortish tizimlari har xil",
          "Biri imtiyozlardan foydalanadi, boshqasi ular haqida bilmaydi",
          "Birida hech kim qaytarmagan ortiqcha toʻlov bor",
          "Biri yangi soliqlar qoʻshiladigan aylanma chegaralarini kuzatadi, boshqasi — yoʻq",
        ],
      },
      {
        h2: "Imtiyoz koʻp, lekin hammaga emas",
        p: [
          "Soliqni kamaytiradigan amaldagi imtiyozlar — yetmishga yaqin. Lekin deyarli har biri soha yoki shartga bogʻlangan: masalan, quyosh panellarini oʻrnatish yoki maʼlum toifadagi fuqarolarni ishga olish. Aksariyati korxonalarning faqat bir qismiga mos keladi.",
          "Imtiyoz umuman boʻlmasligi ham mumkin: qazib oluvchi korxonalarda ular deyarli yoʻq. Halol maslahatchi buni ochiq aytadi.",
        ],
      },
      {
        h2: "Nega buxgalter indamaydi",
        p: [
          "Buxgalterning odatiy vazifasi — hisobotni vaqtida topshirish va jarima olmaslik. Kamroq toʻlash yoʻlini izlash — odatda hech kim talab qilmaydigan qoʻshimcha ish. Shuning uchun baʼzi kompaniyalar buning uchun tejalgan summadan alohida foiz — 5–10% oladi.",
        ],
      },
      {
        h2: "Sizga nima mosligini qanday bilish mumkin",
        p: [
          "Birinchi kuni javob berib boʻlmaydi — raqamlarni koʻrish kerak: soha, aylanma, xarajatlar tuzilmasi, shtat. Tekshiruvdan keyin qaysi yoʻllar qoʻllanishi mumkin, qaysilari yoʻq va bu qancha berishini aytish mumkin.",
        ],
      },
    ],
    takeaway: "Bizda soliqni qonuniy kamaytirish xizmatga kiradi, tejalgan summadan foiz olmaymiz. Har oy qancha soliq chiqqani va nega ekanini koʻrsatamiz.",
    service: "soliq",
  },

  vybor: {
    slug: "buxgalteriya-kompaniyasini-tanlash",
    title: "Buxgalteriya kompaniyasini qanday tanlash: 8 ta savol",
    description:
      "Shartnomadan oldin buxgalteriya autsorsing kompaniyasiga berish kerak boʻlgan sakkiz savol: javobgarlik, tezlik, dasturlar, tekshiruv, NDA va boshqalar.",
    name: "Buxgalteriya kompaniyasini tanlash",
    h1: "Buxgalteriya kompaniyasini qanday tanlash: shartnomadan oldin 8 ta savol",
    lead: "Buxgalteriya kompaniyalarining saytlari bir-biriga oʻxshaydi: «toʻliq xizmat», «ishonchli hamkor», «10 yildan ortiq tajriba». Farqni koʻrish uchun ularga umumiy soʻzlar bilan javob berib boʻlmaydigan savollar bering.",
    published: PUBLISHED,
    minutes: 5,
    body: [
      {
        h2: "Sakkiz savol",
        ordered: true,
        p: [],
        list: [
          "Hisobimni shaxsan kim yuritadi va unda yana nechta korxona bor?",
          "Savolga necha daqiqada javob berasiz — va bu shartnomada yozilganmi?",
          "Sizning xatoingiz sabab jarima chiqsa, kim toʻlaydi?",
          "Korxonani olishdan oldin hisobni tekshirasizmi va aynan nimani koʻrasiz?",
          "Soliqni qonuniy kamaytirish xizmatga kiradimi yoki bu alohida foizmi?",
          "Qaysi dasturlarda ishlaysiz — litsenziyali 1Cdami?",
          "NDA imzolaysizmi?",
          "Kimni xizmatga olmaysiz?",
        ],
      },
      {
        h2: "Javoblarda nimaga qarash kerak",
        p: [
          "«1 mln dan» va «5 mln dan» narxlar bejiz farq qilmaydi. Buxgalter oʻnlab firmani yuritsa, har birini tekshirishga vaqti yoʻq — faqat hisobot topshirishga ulguradi. Past narxda daromad qilish uchun koʻproq korxona olish kerak.",
          "Kompaniya kimgadir rad javobini berishga tayyor boʻlsa — bu yaxshi belgi. Hisob uchun javobgarlikni oladigan kompaniya faqat naqdda ishlaydigan biznesni qabul qila olmaydi.",
        ],
      },
      {
        h2: "Yuzma-yuz uchrashgan yaxshi",
        p: [
          "Telefonda va Zoomda koʻp narsa koʻrinmaydi. Ofisdagi uchrashuvda kim bilan ishlashingizni tushunish va hisobingiz haqida savol berish osonroq — kompaniyaga pul va hujjatlarni ishonib topshirishdan oldin.",
        ],
      },
    ],
    takeaway: "Sakkiz savolning hammasiga javobimiz shartnomada yozilgan: 10 daqiqagacha javob, xatomiz sabab jarimani oʻzimiz toʻlaymiz, qabuldan oldin tekshiruv, foizsiz optimallashtirish, litsenziyali dasturlar, soʻrov boʻyicha NDA.",
    service: "autsorsing",
  },
};
