import type { Story } from "./types";

// Все факты — из интервью 25.09 и PDF услуг. Ничего не выдумано: ни отзывов, ни дедлайнов.
export const storyUz: Story = {
  meta: {
    title: "Jim xato 2 milliardga qanday aylanadi — Sifat Buxgalter",
    description:
      "Bosh buxgalter Ibrohimning tadbirkorlarga xati: buxgalteriyadagi xato qanday qilib ikki yil sezilmay, uchinchi yili katta jarimaga aylanadi va bu xavfni qanday oʻz zimmamizga olamiz.",
  },
  top: { cta: "10 daqiqalik qoʻngʻiroq", switchTo: "RU" },
  callout: "Yillik aylanmasi 1 milliard soʻmdan oshgan MCHJ egalari uchun",
  h1: "Buxgalteriyadagi xato ikki yil jim turadi. Uchinchi yili u 2 milliard soʻm boʻlib qaytishi mumkin.",
  sub: "Bu xatda — bu qanday sodir boʻlishi, nega arzon buxgalter uni koʻrmasligi va **biz bu xavfni qanday oʻz zimmamizga olishimiz** haqida.",
  readTime: "Oʻqish — 7 daqiqa",
  byline: { name: "Ibrohim", role: "Bosh buxgalter" },
  cta: { label: "Bepul 10 daqiqalik qoʻngʻiroq", note: "Hech qayerga borish shart emas. Bekzod odatda 10 daqiqada qoʻngʻiroq qiladi" },
  greeting: "Hurmatli tadbirkor,",
  opening: {
    id: "tanish",
    num: "I",
    title: "Sizga tanish boʻlishi mumkin boʻlgan kun",
    blocks: [
      { p: "Soat 17:40. Bankdan xorijga toʻlov chiqarish kerak, konvertatsiya bugun ketmasa, yetkazib beruvchi kutib turadi. Siz buxgalterga yozasiz." },
      { p: "Javob **toʻrt soatdan keyin** keladi. Bank allaqachon yopilgan." },
      { p: "Keyin qoʻshningiz bilan gaplashib qolasiz. Uning firmasi sizniki bilan deyarli bir xil. Lekin u soliqqa sizdan kam toʻlaydi. Nega — hech kim tushuntirib bermaydi." },
      { p: "Bir kuni Instagram’da videoni koʻrasiz: yangi imtiyoz chiqibdi, sizning sohangizga ham toʻgʻri keladi. Buxgalteringiz bu haqda **bir ogʻiz ham aytmagan**." },
      { p: "Bizga murojaat qilgan tadbirkorlar birinchi suhbatda deyarli soʻzma-soʻz bir xil gapni aytadi:" },
      { quote: "Buxgalterim kechikyapti." },
      { quote: "Soliqdagi yangi oʻzgarishlarni bilmaydi." },
      { quote: "Men kamroq soliq toʻlashni xohlayman — qonuniy yoʻl bilan." },
      { p: "Yana bir holat bor. Jamoamiz 800 dan ortiq tadbirkor bilan gaplashdi. Ularning har ellikta biridan birida buxgalter kutilmaganda ketib qolgan: dekretga, pensiyaga yoki shunchaki boshqa ishga. **Hisob-kitob yarim yoʻlda qoladi.**" },
    ],
  },
  inside: {
    id: "ichidan",
    num: "II",
    title: "Men buni ichidan koʻrdim",
    blocks: [
      { p: "Ismim Ibrohim, Sifat Buxgalter bosh buxgalteriman. Shu yillar ichida 20 ga yaqin kompaniyaning hisobini yuritganman." },
      { p: "Bir vaqtlar uch oy autsorsing firmasining ichida ishladim. U yerda koʻrganimni bir soʻz bilan aytaman: **tartibsizlik**. Bitta buxgalterda oʻnlab firma. Soliq oxirgi kuni toʻlanadi. Tadbirkorning savoli ertasiga javob oladi." },
      { p: "Keyin bitta kompaniyani ketayotgan buxgalterdan qabul qilib oldim. 1C oxirigacha kiritilmagan edi. Hisobning bir qismi — Excel’da, bir qismi — hech qayerda." },
      { p: "Bu dangasalik emas. **Bu arifmetika.**" },
      { p: "Buxgalteriyada har oy tekshirilishi kerak boʻlgan joy yuzga yaqin. Arzon buxgalter yaxshi daromad qilishi uchun bir vaqtda beshta, oʻnta firma olishi kerak. Oʻnta firmada yuzta joyni tekshirishga uning vaqti yetmaydi. Shuning uchun u faqat hisobotni vaqtida joʻnatadi — va hammasi joyida koʻrinadi." },
      { p: "Koʻrinadi. Toki soliq tekshiruvi kelmaguncha." },
    ],
  },
  trap: {
    num: "III",
    title: "Jim xato qanday ishlaydi",
    intro: "Mana eng koʻp uchraydigan holat. Unda hech kim oʻgʻirlik qilmaydi, hech kim jinoyat qilmaydi. **Shunchaki hisob notoʻgʻri yuritiladi.**",
    steps: [
      {
        year: "1-yil",
        title: "Hammasi joyida",
        text: "Tovar hisobi Excel’da yuritiladi. Baʼzi kirimlar rasmiy qilinmagan, baʼzi sotuvlar chekisiz. Hisobotlar vaqtida ketadi. Jarima yoʻq.",
      },
      {
        year: "2-yil",
        title: "Hali ham joyida",
        text: "Omborda yoʻq tovar hujjatda sotilgan boʻlib chiqadi, kirim qilinmagan tovar sotiladi. Hech kim sezmaydi — tekshiruv yoʻq.",
      },
      {
        year: "3-yil",
        title: "Soliq auditi",
        text: "Tekshiruv oldingi ikki yilni koʻtaradi. Hujjat bilan ombor mos kelmaydi. Endi buni toʻgʻrilab boʻlmaydi — faqat toʻlash mumkin.",
      },
    ],
    sumLabel: "Hisob-kitob misoli: ikki yilda 10 mlrd yashirilgan aylanma × 20%",
    sum: "2 000 000 000",
    sumNote: "soʻm",
    outro: "Bu raqamni oʻylab topmadim — tekshiruvlarda shunday hisoblanadi. Va eng yomoni: **birinchi ikki yil davomida buxgalteringiz sizga «hammasi joyida» deb aytgan boʻladi.** U yolgʻon gapirmagan. U shunchaki tekshirishga ulgurmagan.",
  },
  epiphany: {
    id: "tushundim",
    num: "IV",
    title: "Men tushungan bitta narsa",
    blocks: [
      { p: "Buxgalterning majburiyati — hisobotni vaqtida topshirish va jarima kelmasligi. Vassalom." },
      { p: "Soliqni qonuniy kamaytirish — **majburiyat emas**. Bu ustunlik. Shuning uchun uni yo hech kim qilmaydi, yo alohida pul soʻraydi: baʼzi firmalar tejalgan summadan 5–10% oladi." },
      { p: "Oldingi buxgalterning xatolarini tekshirish ham majburiyat emas. Shuning uchun yangi buxgalter oldingisining xatosini meros qilib oladi va jim turadi." },
      { p: "Shuning uchun biz boshqacha qurdik:" },
      {
        list: [
          "Kam firma olamiz — har birini oxirigacha tekshirish uchun.",
          "Olishdan oldin oxirgi davrni tekshiramiz, chunki shartnomadan keyin javobgarlik bizga oʻtadi.",
          "Soliq optimizatsiyasi narx ichida. 10 million tejaysizmi, 100 millionmi — foiz olmaymiz.",
          "Har oy aytib boramiz: qancha soliq chiqdi, nega, qayerda kamroq toʻlash mumkin.",
        ],
      },
      { p: "Bu arzon emas. Lekin **arzon buxgalteriya aslida arzon emas** — faqat hisob kechroq keladi." },
    ],
  },
  beliefs: {
    num: "V",
    title: "Hozir xayolingizdan oʻtayotgan uchta shubha",
    intro: "Ularni tadbirkorlardan har hafta eshitamiz. Toʻgʻri shubhalar. Javob beraman.",
    thinkLabel: "Siz oʻylaysiz",
    truthLabel: "Aslida",
    items: [
      {
        think: "Hujjatlarimni begonalarga berib boʻlmaydi.",
        truth: "Bizda ofis bor — Yangi Sergeli, 7/2: istalgan vaqtda kelib, hisobingizni kim yuritishini koʻrishingiz mumkin. **Soʻrasangiz, maxfiylik shartnomasi (NDA) tuzamiz.** Litsenziyali 1C, Didox, soliq kabineti — hammasi rasmiy.",
      },
      {
        think: "Bu men uchun qimmat.",
        truth: "Hozirgi buxgalteringiz bizdan arzonroq boʻlishi mumkin. Endi solishtiring: kechikkan hisobot uchun rahbar shaxsan jarimaga tortiladi — MJtKning 175-moddasiga koʻra 10 BHMgacha (4,4 mln soʻm), soliq organi esa hisobraqamdagi operatsiyalarni toʻxtatib qoʻyishi mumkin. Yashirin aylanmani topgan bitta tekshiruv — **aylanmadan hisoblanadigan jarima, bizning misolda 2 mlrd**. Qonuniy optimizatsiya esa odatda xizmat narxidan koʻproq tejaydi — va bizda u uchun alohida foiz yoʻq.",
      },
      {
        think: "Mening hisobim chalkash, hech kim tuzatolmaydi.",
        truth: "Aynan shuning uchun biz kirish auditidan boshlaymiz. Xatolarni topamiz, qaysini tuzatish mumkinligini va qaysi biri qancha jarimaga olib kelishi mumkinligini ochiq aytamiz. **Keyin javobgarlik bizga oʻtadi.**",
      },
    ],
  },
  stack: {
    num: "VI",
    title: "Shartnoma imzolasangiz nima olasiz",
    intro: "Hammasi bitta oylik toʻlov ichida. Qoʻshimcha foizsiz.",
    rows: [
      { what: "Kirish auditi", detail: "Shartnomadan oldin oxirgi davrni tekshiramiz: nima bor, nima xato, nima xavfli." },
      { what: "Toʻliq buxgalteriya va soliq hisoboti", detail: "Hisobotlar muddatidan oldin, litsenziyali 1C’da." },
      { what: "Qonuniy soliq optimizatsiyasi", detail: "70 ga yaqin imtiyozdan sizga toʻgʻri keladiganlarini topamiz va qoʻllaymiz.", tag: "boshqalarda — tejalgan summaning 5–10%" },
      { what: "Bank va valyuta operatsiyalari", detail: "Toʻlovlar, konvertatsiya, import-eksport kontraktlari. Oddiy savolga — 5 daqiqa." },
      { what: "10 daqiqada javob", detail: "Haftada 7 kun. Shanba kuni — bir soatgacha." },
      { what: "Oyiga 3 marta ofisingizga tashrif", detail: "Hujjatlar, ombor, savollar — joyida." },
      { what: "Oylik hisobot sizga", detail: "Qancha soliq chiqdi, nega, keyingi oy nimaga tayyorlanish kerak." },
      { what: "Maxfiylik shartnomasi", detail: "Soʻrovingiz boʻyicha." },
    ],
    note: "Xizmat qiymati aylanmaga emas, **ish hajmiga** bogʻliq: 4 ta mijozga sotadigan 25 milliardlik firma 1000 ta mijozga sotadigan 5 milliardlik firmadan kamroq ish talab qilishi mumkin. Shuning uchun qiymatni qoʻngʻiroqdan keyin, vaziyatingizni tushunib aytamiz.",
  },
  guarantee: {
    num: "VII",
    title: "Kafolat",
    text: "Bizning davrimizda **bizning xatomiz sabab jarima kelsa — uni biz toʻlaymiz.** Soʻz bilan emas, shartnomada.",
    condition: "Bitta shart bor va uni oldindan ochiq aytaman: omborni siz ham toʻgʻri yuritishingiz kerak. Agar tovar naqdga, hujjatsiz sotilsa, biz hisobotni qanchalik toʻgʻri joʻnatmaylik — omborda boʻlmagan narsani hech kim himoya qila olmaydi.",
    seal: "Sifat Buxgalter · kafolat",
  },
  notFor: {
    num: "VIII",
    title: "Kimlar bilan ishlamaymiz",
    intro: "Biz hammani olmaymiz. Bu sizni ham himoya qiladi — biz olgan har bir mijozga javob beramiz.",
    items: [
      "Faqat naqd pul bilan ishlaydigan biznes — masalan, bozordan naqdga oladigan va kirim qilmaydigan qurilish firmalari.",
      "Alkogol va tamaki savdosi.",
      "«Bir yoʻlini qilib yuboraylik» degan yondashuv.",
    ],
    outro: "Agar siz daromadni rasmiy qilishga va soliqni vaqtida toʻlashga tayyor boʻlsangiz, **biz aynan siz uchun ishlaymiz.** Ayniqsa import-eksport, ulgurji savdo, turizm va oʻquv markazlari uchun.",
  },
  next: {
    num: "IX",
    title: "Keyingi qadam",
    steps: [
      { title: "Ariza qoldirasiz", text: "Ism va telefon. Bir daqiqa." },
      { title: "10 daqiqalik suhbat", text: "Bekzod bir soat ichida, odatda 10 daqiqada qoʻngʻiroq qiladi. Vaziyatni tinglab, birinchi navbatda nimani tekshirishni aytamiz." },
      { title: "Uchrashuv — xohlasangiz", text: "Ofisda yoki Zoomda, oʻzingiz vaqti keldi deb hisoblaganingizda." },
      { title: "Kirish auditi va shartnoma", text: "Faqat shundan keyin — javobgarlik bizga oʻtadi." },
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
    "**P.S.** Vaqtingiz boʻlmasa, bitta narsani eslab qoling: buxgalterning «hammasi joyida» degani — hisobot joʻnatilgani, xolos. Ombor va hujjat bir-biriga mos kelishini kimdir tekshirganmi — buni bilish uchun kirish auditi kerak.",
    "**P.P.S.** Soliq qonunchiligi tez-tez oʻzgaradi: prezident yigʻilishidan keyin 2–3 kunda yangi nizom chiqadi. Imtiyozni oʻz vaqtida bilmaslik ham — pulni yoʻqotish.",
  ],
};
