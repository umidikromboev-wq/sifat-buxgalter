import { chromium } from "playwright";
const b = await chromium.launch(); const p = await b.newPage();
await p.goto("file://" + process.cwd() + "/sifat-promo.html", { waitUntil: "load" }); await p.waitForTimeout(2500);
const r = await p.evaluate(() => [...document.querySelectorAll(".page")].map((pg, i) => {
  const pad = pg.querySelector(".pad"); const foot = pg.querySelector(".foot");
  const pb = pg.getBoundingClientRect();
  let maxBottom = 0;
  pad.querySelectorAll("*").forEach(el => { const r = el.getBoundingClientRect(); if (r.height) maxBottom = Math.max(maxBottom, r.bottom); });
  const footTop = foot.getBoundingClientRect().top;
  return `${i + 1}: over=${Math.round(pad.scrollHeight - pad.clientHeight)} gapToFoot=${Math.round(footTop - maxBottom)}`;
}));
console.log(r.join("\n")); await b.close();
