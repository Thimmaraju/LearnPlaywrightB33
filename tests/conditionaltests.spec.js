//const { test, expect } = require('@playwright/test'); //before es6 

import { test, expect, chromium, firefox } from '@playwright/test';  // after es6 


test("Click one of the elements that is visible out of two", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

    await page.waitForTimeout(5000)


    const portfolio = page.getByRole("link", { name: "Portfolio" });
    const gallery = page.getByRole("link", { name: "Gallery" });

    if (await gallery.isVisible()) {
        await gallery.click();
        console.log("clicked on Gallery")
    }
    else
    {
        await portfolio.click();
        console.log("clicked on Portfolio")
    }


});

test("Click one of the elements that is present out of two", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

    const contactus = page.getByRole("link", { name: "Contact Us" });
    const portfolio = page.getByRole("link", { name: "Portfolio" });

    if (await contactus.isVisible()) {
        await contactus.click();
        console.log("contactus was present")
    } else if (await portfolio.isVisible()) {
        await portfolio.click();
    }

    await expect(page).toHaveURL(/.*contact-us|.*portfolio/);
});


test("Based on BrowserName skip", async ({ page, browserName }) => {

    test.skip(browserName == 'chromium', 'Only relevant for firefox');

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");


})

// chromium  - chrome , chromium

// firefox  - firefox

// webkit - Safari 