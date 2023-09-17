import puppeteer from "puppeteer";
import path from 'path';
import "dotenv/config";

(async () => {
  // Load extensions: (uBlock, )
  const pathToExtension = path.join(process.cwd(), "./extensions/uBlock0.chromium");

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://developer.chrome.com/");

  // Set screen size
  await page.setViewport({ width: 1920, height: 1080 });

  // grab screenshot (or pdf())
  await page.screenshot({ path: "example.png", fullPage: true });
  //await browser.close(); //closes the browser
})();
