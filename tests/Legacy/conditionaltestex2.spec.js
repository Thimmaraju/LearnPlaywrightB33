import { test, expect } from '@playwright/test';

// test("Based on BrowserName skip", async ({ page, browserName }) => {

//     test.skip(browserName == 'chromium', 'Only relevant for other bowsers');

//     await page.goto("https://the-internet.herokuapp.com/disappearing_elements");


// })


test("Based on BrowserName run different script", async ({ page, browserName }) => {

    switch (browserName) {
        case "chromium":

            await page.goto("https://www.flipkart.com/");
            //await page.close()

            break;

        case "firefox":

            await page.goto("https://www.amazon.in/");
            //await page.close()

            break;
        case "webkit":

            await page.goto("https://www.myntra.com/");
            //await page.close()

            break;

    }


})


test("Based on BrowserName run different script - don env ", async ({ page }) => {

    switch (process.env.ENVIRONMENT) {
        case "dev":

            await page.goto("https://www.flipkart.com/");
            //await page.close()

            break;

        case "qa":

            await page.goto("https://www.amazon.in/");
            //await page.close()

            break;
        case "staging":

            await page.goto("https://www.myntra.com/");
            //await page.close()

            break;

    }


})

