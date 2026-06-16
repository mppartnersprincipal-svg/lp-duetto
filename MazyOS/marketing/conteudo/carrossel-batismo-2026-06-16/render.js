const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const file = 'file://' + path.resolve(__dirname, 'carrossel.html');
  const out = path.resolve(__dirname, 'instagram');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1180, height: 1400 }, deviceScaleFactor: 2 });
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1200);
  const slides = await page.$$('.slide');
  let i = 1;
  for (const s of slides) {
    const n = String(i).padStart(2, '0');
    await s.screenshot({ path: path.join(out, `slide-${n}.png`) });
    console.log('slide-' + n + '.png');
    i++;
  }
  await browser.close();
  console.log('OK ' + (i - 1) + ' slides');
})();
