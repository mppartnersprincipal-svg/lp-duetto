const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const file = 'file://' + path.resolve(__dirname, 'carrossel-stories.html');
  const out = path.resolve(__dirname, 'stories');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1180, height: 2000 }, deviceScaleFactor: 2 });
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1200);
  const slides = await page.$$('.slide');
  let i = 1;
  for (const s of slides) {
    const n = String(i).padStart(2, '0');
    await s.screenshot({ path: path.join(out, `story-${n}.png`) });
    console.log('story-' + n + '.png');
    i++;
  }
  await browser.close();
  console.log('OK ' + (i - 1) + ' stories');
})();
