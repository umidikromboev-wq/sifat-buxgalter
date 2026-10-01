import type { Story } from "./types";

// Все факты: из интервью 25.09 и PDF услуг. Ничего не выдумано: ни отзывов, ни дедлайнов.
export const storyUz: Story = {
  meta: {
    title: "Jim yotgan xato qanday qilib 2 milliardga aylanadi | Sifat Buxgalter",
    description:
      "Bosh buxgalter Ibrohimning tadbirkorlarga maktubi: buxgalteriyadagi xato qanday qilib ikki yil bilinmay yotadi, uchinchi yili katta jarima boʻlib chiqadi va biz bu xavfni qanday oʻz zimmamizga olamiz.",
  },
  top: { cta: "10 daqiqalik qoʻngʻiroq", switchTo: "RU" },
  callout: "Yillik aylanmasi 1 milliard soʻmdan oshgan MChJ egalari uchun",
  h1: "Buxgalteriyadagi xato ikki yil bilinmay yotadi. Uchinchi yili esa 2 milliard soʻm boʻlib qaytishi mumkin.",
  sub: "Bu maktubda shu qanday boʻlishini, nega arzon buxgalter buni koʻrmasligini va **bu xavfni qanday qilib oʻz zimmamizga olishimizni** aytib beraman.",
  readTime: "Oʻqishga 7 daqiqa",
  byline: { name: "Ibrohim", role: "Bosh buxgalter" },
  cta: { label: "Bepul 10 daqiqalik qoʻngʻiroq", note: "Hech qayerga borishingiz shart emas. Bekzod odatda 10 daqiqada qoʻngʻiroq qiladi" },
  greeting: "Hurmatli tadbirkor,",
  opening: {
    id: "tanish",
    num: "I",
    title: "Sizga tanish boʻlsa kerak",
    blocks: [
      { p: "Soat 17:40. Chet elga toʻlov oʻtkazish kerak: konvertatsiya bugun ketmasa, yetkazib beruvchi kutib qoladi. Buxgalterga yozasiz." },
      { p: "Javob **toʻrt soatdan keyin** keladi. Bank allaqachon yopilib boʻlgan." },
      { p: "Keyin tanishingiz bilan gaplashib qolasiz. Firmasi xuddi siznikiga oʻxshaydi, lekin soliqni sizdan kam toʻlaydi. Nega shunaqa, hech kim tushuntirib bermaydi." },
      { p: "Bir kuni Instagramda video koʻrib qolasiz: yangi imtiyoz chiqibdi, sizning sohangizga ham toʻgʻri keladi. Buxgalteringiz bu haqda **bir ogʻiz ham gapirmagan**." },
      { p: "Bizga kelgan tadbirkorlar birinchi suhbatdayoq deyarli bir xil gapni aytishadi:" },
      { quote: "Buxgalterim hamma narsani kechiktiradi." },
      { quote: "Soliqdagi yangiliklardan bexabar." },
      { quote: "Soliqni kamroq toʻlamoqchiman. Faqat qonuniy yoʻl bilan." },
      { p: "Yana bir holat bor. Jamoamiz 800 dan ortiq tadbirkor bilan gaplashgan. Har ellik kishidan birida buxgalter birdan ketib qolgan: dekretga, pensiyaga yoki boshqa ishga. **Hisob yarim yoʻlda qolib ketadi.**" },
    ],
  },
  inside: {
    id: "ichidan",
    num: "II",
    title: "Men buni ichidan koʻrganman",
    blocks: [
      { p: "Ismim Ibrohim, Sifat Buxgalter bosh buxgalteriman. Shu yillarda 20 ga yaqin kompaniyaning hisobini yuritganman." },
      { p: "Bir paytlar uch oy autsorsing firmasida ishlaganman. U yerda koʻrganlarimni bir soʻz bilan aytsam: **tartibsizlik**. Bitta buxgalterda oʻnlab firma. Soliq oxirgi kuni toʻlanadi. Tadbirkor savoliga javobni ertasi kuni oladi." },
      { p: "Keyin bir kompaniyani ishdan ketayotgan buxgalterdan qabul qilib oldim. 1C ga hamma narsa kiritilmagan edi. Hisobning bir qismi Excelda, bir qismi esa hech qayerda yoʻq edi." },
      { p: "Gap dangasalikda emas. **Gap oddiy hisobda.**" },
      { p: "Buxgalteriyada har oy tekshirib turish kerak boʻlgan joy yuzga yaqin. Arzon buxgalter yaxshi pul topishi uchun bir vaqtda besh-oʻnta firma olishi kerak. Oʻnta firmaning har biridagi yuzta joyni tekshirishga vaqti yetmaydi. Shuning uchun u faqat hisobotni vaqtida topshiradi, tashqaridan esa hammasi joyidadek koʻrinadi." },
      { p: "Koʻrinadi. Soliq tekshiruvi kelguncha." },
    ],
  },
  trap: {
    num: "III",
    title: "Bilinmay yotgan xato qanday ishlaydi",
    intro: "Mana eng koʻp uchraydigan holat. Bunda hech kim oʻgʻirlik ham, jinoyat ham qilmaydi. **Shunchaki hisob notoʻgʻri yuritiladi.**",
    steps: [
      {
        year: "1-yil",
        title: "Hammasi joyida",
        text: "Tovar hisobi Excelda. Baʼzi kirimlar rasmiylashtirilmagan, baʼzi sotuvlarga chek urilmagan. Hisobotlar vaqtida topshiriladi. Jarima yoʻq.",
      },
      {
        year: "2-yil",
        title: "Hali ham joyida",
        text: "Omborda yoʻq tovar hujjatda sotilgan boʻlib chiqadi, kirim qilinmagan tovar esa sotilib ketadi. Tekshiruv yoʻq, hech kim sezmaydi.",
      },
      {
        year: "3-yil",
        title: "Soliq tekshiruvi",
        text: "Tekshiruv oldingi ikki yilni ham koʻtaradi. Hujjat bilan ombor toʻgʻri kelmaydi. Endi buni tuzatib boʻlmaydi, faqat toʻlash qoladi.",
      },
    ],
    sumLabel: "Bu faqat SK 223-moddasi boʻyicha jarima: 10 mlrd yashirilgan tushumning 20%. Soliq va penya bunga qoʻshiladi",
    sum: "2 000 000 000",
    sumNote: "soʻm",
    outro: "Bu raqamni oʻzimdan toʻqiganim yoʻq, tekshiruvlarda shunday hisoblanadi. Eng yomoni: **ikki yil davomida buxgalteringiz sizga «hammasi joyida» deb kelgan boʻladi.** U yolgʻon gapirmagan. Shunchaki tekshirishga ulgurmagan.",
  },
  epiphany: {
    id: "tushundim",
    num: "IV",
    title: "Men bitta narsani tushundim",
    blocks: [
      { p: "Buxgalterning vazifasi hisobotni vaqtida topshirish va jarimaga yoʻl qoʻymaslik. Vassalom." },
      { p: "Soliqni qonuniy kamaytirish uning **vazifasiga kirmaydi**. Bu qoʻshimcha foyda. Shuning uchun bu bilan yo hech kim shugʻullanmaydi, yo alohida pul soʻrashadi: baʼzi firmalar tejalgan summadan 5–10% oladi." },
      { p: "Oldingi buxgalterning xatolarini tekshirish ham vazifaga kirmaydi. Shuning uchun yangi buxgalter eski xatolarni meros qilib oladi-yu, indamay yuraveradi." },
      { p: "Shuning uchun biz ishni boshqacha yoʻlga qoʻydik:" },
      {
        list: [
          "Kam firma olamiz, har birini oxirigacha tekshirishga vaqtimiz yetsin deb.",
          "Ishni olishdan oldin oxirgi davrni tekshiramiz, chunki shartnomadan keyin javobgarlik bizda boʻladi.",
          "Soliqni kamaytirish narxga kiradi. 10 million tejaysizmi, 100 millionmi, foiz olmaymiz.",
          "Har oy aytib turamiz: qancha soliq chiqdi, nima uchun va qayerda kamroq toʻlasa boʻladi.",
        ],
      },
      { p: "Bu arzon emas. Lekin **arzon buxgalteriya aslida arzonga tushmaydi**: shunchaki hisob-kitob keyinroq keladi." },
    ],
  },
  beliefs: {
    num: "V",
    title: "Hozir xayolingizdan oʻtayotgan uchta gumon",
    intro: "Bularni tadbirkorlardan har hafta eshitamiz. Gumon qilishingiz tabiiy. Javob beraman.",
    thinkLabel: "Siz oʻylaysiz",
    truthLabel: "Aslida",
    items: [
      {
        think: "Hujjatlarimni begona odamlarga bera olmayman.",
        truth: "Ofisimiz bor, Yakkasaroy tumani, Muqimiy koʻchasida: xohlagan vaqtingizda kelib, hisobingizni kim yuritishini koʻrishingiz mumkin. **Soʻrasangiz, maxfiylik shartnomasi (NDA) imzolaymiz.** Litsenziyali 1C, Didox, soliq kabineti: hammasi rasmiy.",
      },
      {
        think: "Bu menga qimmatlik qiladi.",
        truth: "Hozirgi buxgalteringiz bizdan arzonroq boʻlishi mumkin. Endi solishtirib koʻring: hisobot kechiksa, rahbarning oʻzi jarimaga tortiladi (MJtK 175-modda, 10 BHMgacha, yaʼni 4,4 mln soʻm), soliq esa hisob raqamini toʻxtatib qoʻyishi mumkin. Yashirin aylanmani topgan bitta tekshiruv esa **aylanmadan hisoblanadigan jarima, bizning misolda 2 mlrd**. Qonuniy optimallashtirish odatda xizmat narxidan koʻproq pul tejaydi, buning uchun alohida foiz ham olmaymiz.",
      },
      {
        think: "Hisobim chalkashib ketgan, buni hech kim tuzatolmaydi.",
        truth: "Shuning uchun ham ekspress-auditdan boshlaymiz. Xatolarni topamiz, qaysi birini tuzatsa boʻlishini va qaysi biri qancha jarimaga olib kelishi mumkinligini ochiq aytamiz. **Shundan keyin javobgarlik bizda.**",
      },
    ],
  },
  stack: {
    num: "VI",
    title: "Shartnoma imzolasangiz, nimalar olasiz",
    intro: "Hammasi bitta oylik toʻlovga kiradi. Ustiga foiz yoʻq.",
    rows: [
      { what: "Ekspress-audit", detail: "Shartnomadan oldin oxirgi davrni tekshiramiz: nima bor, qayerda xato, nima xavfli." },
      { what: "Toʻliq buxgalteriya va soliq hisoboti", detail: "Hisobotlar muddatidan oldin topshiriladi, litsenziyali 1C da." },
      { what: "Soliqni qonuniy kamaytirish", detail: "70 ga yaqin imtiyozdan sizga toʻgʻri keladiganlarini topamiz va qoʻllaymiz.", tag: "boshqalarda tejalgan summaning 5–10%" },
      { what: "Bank va valyuta operatsiyalari", detail: "Toʻlovlar, konvertatsiya, import-eksport shartnomalari. Oddiy savolga 5 daqiqada javob." },
      { what: "10 daqiqada javob", detail: "Kecha-yu kunduz, shanba-yakshanba ham." },
      { what: "Oyiga 3 marta ofisingizga tashrif", detail: "Hujjatlar, ombor, savollar: hammasini joyida koʻramiz." },
      { what: "Oylik hisobot sizga", detail: "Qancha soliq chiqdi, nima uchun va keyingi oyga nimaga tayyorlanish kerak." },
      { what: "Maxfiylik shartnomasi", detail: "Soʻrasangiz, imzolaymiz." },
    ],
    note: "Narx aylanmaga emas, **ish hajmiga** qarab belgilanadi: 4 ta mijozga sotadigan 25 milliardlik firmada ish 1000 ta mijozga sotadigan 5 milliardlik firmadan kam boʻlishi mumkin. Shuning uchun narxni qoʻngʻiroqdan keyin, vaziyatingizni bilib olgach aytamiz.",
  },
  guarantee: {
    num: "VII",
    title: "Kafolat",
    text: "Biz ishlagan davrda **bizning xatomiz bilan jarima chiqsa, uni oʻzimiz toʻlaymiz.** Ogʻzaki emas, shartnomada yozilgan.",
    condition: "Bitta shartimiz bor, uni oldindan ochiq aytaman: omborni siz ham toʻgʻri yuritishingiz kerak. Tovar naqdga, hujjatsiz sotilsa, hisobotni qanchalik toʻgʻri topshirmaylik, omborda yoʻq narsani hech kim himoya qila olmaydi.",
    seal: "Sifat Buxgalter · kafolat",
  },
  notFor: {
    num: "VIII",
    title: "Kimlar bilan ishlamaymiz",
    intro: "Hammani ham olavermaymiz. Bu sizni ham himoya qiladi: olgan har bir mijozimiz uchun javob beramiz.",
    items: [
      "Faqat naqd pulda ishlaydigan biznes. Masalan, materialni bozordan naqdga olib, kirim qilmaydigan qurilish firmalari.",
      "Alkogol va tamaki savdosi.",
      "«Bir yoʻlini qilib yuboraylik» degan yondashuv.",
    ],
    outro: "Daromadni rasmiy koʻrsatishga va soliqni vaqtida toʻlashga tayyor boʻlsangiz, **biz aynan siz uchun ishlaymiz.** Ayniqsa import-eksport, ulgurji savdo, turizm va oʻquv markazlari bilan.",
  },
  next: {
    num: "IX",
    title: "Keyingi qadam",
    steps: [
      { title: "Ariza qoldirasiz", text: "Ism va telefon, bir daqiqalik ish." },
      { title: "10 daqiqalik suhbat", text: "Bekzod bir soat ichida, koʻpincha 10 daqiqada qoʻngʻiroq qiladi. Vaziyatingizni eshitib, avval nimani tekshirish kerakligini aytamiz." },
      { title: "Uchrashuv, xohlasangiz", text: "Ofisda yoki Zoomda, oʻzingizga qulay paytda." },
      { title: "Ekspress-audit va shartnoma", text: "Shundan keyingina javobgarlik bizga oʻtadi." },
    ],
  },
  sign: {
    closing: "Hurmat bilan,",
    people: [
      { name: "Ibrohim", role: "Bosh buxgalter" },
      { name: "Bekzod", role: "Mijozlar bilan ishlash" },
    ],
  },
  ps: [
    "**P.S.** Vaqtingiz boʻlmasa, bitta narsani eslab qoling: buxgalter «hammasi joyida» desa, bu faqat hisobot topshirilgan degani. Ombor bilan hujjat bir-biriga toʻgʻri kelishini kimdir tekshirganmi, buni bilish uchun kirish auditi kerak.",
    "**P.P.S.** Soliq qonunlari tez-tez oʻzgaradi: prezident yigʻilishidan keyin 2–3 kunda yangi nizom chiqadi. Imtiyozdan vaqtida xabar topmaslik ham pul yoʻqotish degani.",
  ],
};
