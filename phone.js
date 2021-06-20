const puppeteer = require('puppeteer');

const url = 'https://www.boulanger.com/ref/1150997';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  let price = await page.evaluate(() => {
    return document.querySelector('.fix-price > span').innerText;
  });

  if (price < 600) {
    console.log(`Le prix du téléphone est de ${price}€ ! Il y a une promo !`);
  } else {
    console.log('Pas encore de promo');
  }

  // await browser.close();
})();
