const puppeteer = require('puppeteer')
const screenshot = 'github.png';
const pass = "password";
const user = "username";
(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('https://github.com/login')
  await page.type('#login_field', user)
  await page.type('#password', pass)
  await page.click('[name="commit"]')
  await page.waitForNavigation()

  let data = await page.evaluate(() => {

    let title = document.querySelector('span[title="Momothebowler.github.io"]').innerText
    return{
        title
    }
  });
    console.log(data);

  browser.close()
})()