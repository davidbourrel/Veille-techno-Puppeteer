const puppeteer = require('puppeteer');

const url = 'https://www.wildcodeschool.com/fr-FR';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--disable-notifications'],
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  await browser.close();
})();
