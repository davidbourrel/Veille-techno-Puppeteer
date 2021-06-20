'use strict';

const puppeteer = require('puppeteer');
require('dotenv').config();

const url = 'https://odyssey.wildcodeschool.com/';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      '--disable-notifications',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.type('#login-email', process.env.EMAIL, { delay: 150 });
    await page.type('#login-password', process.env.PASSWORD, { delay: 150 });
    await page.click('#login-submit');

    await page.waitForSelector('._ob_sidebar_reviews');
    await page.click('._ob_sidebar_reviews');

    await page.waitForSelector('.review_buttonContainer > a');
    await page.click('.review_buttonContainer > a');

    await page.waitForSelector('.MuiInputBase-input');
    await page.type('.MuiInputBase-input', 'C KOI LE LIEN DU MEET ?', {
      delay: 200,
    });
    await page.click('input[type=checkbox]');
  } catch (err) {
    console.error(err.message);
  } finally {
    // await browser.close();
  }
})();
