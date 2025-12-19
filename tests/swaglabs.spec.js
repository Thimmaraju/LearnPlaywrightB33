import { test, expect } from '@playwright/test';

test("Verify Page Header ", async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
   
    await expect(page.locator("//div[normalize-space(text())='Swag Labs']")).toBeVisible()


})

test("Verify login to Swaglabs using valid credentials", async ({page}) => {

    await page.goto('https://www.saucedemo.com/')

    await page.locator("//input[@data-test='username']").fill('standard_user')

    await page.locator("input[type='password']").fill('secret_sauce')

    await page.locator("input[type='submit']").click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})

test("Verify login to Swaglabs using Invalid Username  ", async ({}) => {

    
})

test("Verify login to Swaglabs using Invalid password ", async ({}) => {

    
})


test("Verify login to Swaglabs using Both  Invalid ", async ({}) => {

    
})

test("Verify login to Swaglabs using Locked out User  ", async ({page}) => {

    
    await page.goto('https://www.saucedemo.com/')

    await page.locator("//input[@data-test='username']").fill('locked_out_user')

    await page.locator("input[type='password']").fill('secret_sauce')

    await page.locator("input[type='submit']").click()
   
    await expect(page.locator('//h3[@data-test="error"]')).toBeVisible()

    await expect(page.locator('//h3[@data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.', {timeout: 30000});

    await expect(page.locator('//h3[@data-test="error"]')).toContainText('Epic sadface: Sorry');

})