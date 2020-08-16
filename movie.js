const puppeteer = require('puppeteer');

(async () => {
    let MovieURL = "https://www.imdb.com/title/tt0371746/?ref_=nv_sr_srsg_0";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(MovieURL, {waitUntil: 'networkidle2'});

    let data = await page.evaluate(() => {

        let title = document.querySelector('div[class = "title_wrapper"] > h1').innerText;
        let rating = document.querySelector('span[itemprop="ratingValue').innerText;

        return{
            title,
            rating
        }
    });
    console.log(data);

    await browser.close();
})();