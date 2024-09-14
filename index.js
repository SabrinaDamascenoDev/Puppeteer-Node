const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  //acessa o site
  await page.goto('https://dontpad.com/sabsWeb');

  //digita no site
  await page.type('textarea[id="text"]', 'oi,putas'); 
  console.log("Deu certo, acessei");
  //tira print do site
  await page.screenshot({path: 'exemple.png'});
  //fecha o site
  await browser.close();
})();
