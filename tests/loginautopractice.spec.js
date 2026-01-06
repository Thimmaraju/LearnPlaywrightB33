import { test, expect } from '@playwright/test';

test("Verify Login to Automation Practice site ", async ({page}) => {

    await page.goto('https://automationexercise.com/login')

    await page.locator('//input[@data-qa="login-email"]').fill(process.env.APP_USERNAME)

    await page.locator('//input[@data-qa="login-password"]').fill(process.env.APP_PASSWORD)

    await page.locator('//button[@data-qa="login-button"]').click()
    
    await expect(page.locator("//a[@href='/logout']")).toBeVisible()

})