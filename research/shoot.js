// Первые экраны конкурентов 1440×900 → shots30/<домен>.jpg
const fs = require('fs');
let chromium;
for (const m of ['playwright','playwright-core','/Users/umidikromboev/Downloads/Проекты/euromed-deck/node_modules/playwright-core']) {
  try { chromium = require(m).chromium; break; } catch (e) {}
}
const domains = process.argv.slice(2);
(async () => {
  const base = process.env.HOME + '/Library/Caches/ms-playwright';
  const dir = fs.readdirSync(base).filter(d => d.startsWith('chromium_headless_shell')).find(d => fs.existsSync(`${base}/${d}/chrome-headless-shell-mac-arm64/chrome-headless-shell`));
  const b = await chromium.launch({ executablePath: `${base}/${dir}/chrome-headless-shell-mac-arm64/chrome-headless-shell` });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, locale: 'ru-RU',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36' });
  for (const d of domains) {
    const p = await ctx.newPage();
    try {
      await p.goto(d.startsWith('http') ? d : 'https://' + d, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await p.waitForTimeout(3500);
      for (const t of ['Accept All Cookies','I accept all cookies','Accept all cookies','I AGREE','Accept','Принять','Согласен','Qabul qilish']) {
        const btn = p.getByRole('button', { name: t, exact: false }).first();
        if (await btn.isVisible().catch(() => false)) { await btn.click().catch(() => {}); await p.waitForTimeout(1200); break; }
      }
      await p.screenshot({ path: `shots30/${d.replace(/^https?:\/\//,'')}.jpg`, type: 'jpeg', quality: 72 });
      console.log('OK', d, p.url(), (await p.title()).slice(0, 70));
    } catch (e) { console.log('FAIL', d, e.message.split('\n')[0]); }
    await p.close();
  }
  await b.close();
})();
