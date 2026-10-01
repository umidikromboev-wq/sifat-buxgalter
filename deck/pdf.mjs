// deck.html → Sifat-Buxgalter-otchet.pdf + превью каждой полосы в preview/
import { chromium } from "/Users/umidikromboev/.claude/tools/site-qa/node_modules/playwright/index.mjs";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto("file://" + join(here, "deck.html"), { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

if (process.argv.includes("--preview")) {
  mkdirSync(join(here, "preview"), { recursive: true });
  const slides = await page.$$(".slide");
  for (const [i, s] of slides.entries()) {
    await s.screenshot({ path: join(here, "preview", `${String(i + 1).padStart(2, "0")}.jpg`), type: "jpeg", quality: 70 });
  }
  console.log("preview:", slides.length);
}
await page.pdf({ path: join(here, "Sifat-Buxgalter-otchet.pdf"), width: "1920px", height: "1080px", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("pdf ok");
