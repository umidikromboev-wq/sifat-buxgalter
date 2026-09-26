# Sifat Buxgalter — sayt (v2)

Next.js 15 (App Router), TypeScript, oddiy CSS. UZ/RU, 45 sahifa (bosh sahifa, 11 xizmat, hub, narxlar, jamoa, savollar, aloqa, maxfiylik, rahmat), sitemap, robots, hreflang, JSON-LD.

## Ishga tushirish
```bash
npm install
cp .env.example .env.local   # NEXT_PUBLIC_SITE_URL, TELEGRAM_* (ixtiyoriy)
npm run dev                  # http://localhost:3000/uz
npm run build && npm start   # production tekshiruv
```

## Vercel'ga deploy
```bash
npm i -g vercel
vercel --prod
```
Vercel → Settings → Environment Variables: `NEXT_PUBLIC_SITE_URL` (domen), `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` (ariza Telegramga kelishi uchun), `NEXT_PUBLIC_GA_ID` (GA4).

## Matnlar qayerda
- `content/home.ts` — bosh sahifa (UZ/RU)
- `content/services.ts` — 11 xizmat sahifasi
- `content/pages.ts` — hub, narxlar, jamoa, savollar, aloqa, maxfiylik, rahmat
- `content/site.ts` — kontaktlar, mijoz logolari roʻyxati, UI soʻzlar
- URL sluglar: `content/services.ts` (`serviceSlugs`) va `content/routes.ts` (`sections`)

## Mijoz tasdiqlashi kerak (kodda `TASDIQLASH` / `ПОДТВЕРДИТЬ` izohi bilan belgilangan)
1. `content/home.ts` → compare.rows oxirgi qatori — «Oylik narx 4–5 mln» anchor
2. `content/home.ts` → team → Ibrohim → «Hozir — Avangard bosh buxgalteri»
3. Raqamlar bloki: «~20 kompaniya» (oldingi qarorda 200+ edi)
4. Mijoz logolari — hozir matn chip; rasm uchun `public/clients/README.txt`

## Ariza
`app/api/lead/route.ts` → Telegram (env boʻlsa) yoki server log. Yuborilgach `/uz/rahmat` (`/ru/spasibo`) — Google Ads/GA4 konversiya shu URL'ga.
