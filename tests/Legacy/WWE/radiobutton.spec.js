import { test, expect } from '@playwright/test';

 test("Working with Radio button", async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await expect(page.locator('//input[@value="radio2"]')).not.toBeChecked()
    await page.locator('//input[@value="radio2"]').click()

    await expect(page.locator('//input[@value="radio2"]')).toBeChecked()


    const radiobuttonstatus = await page.locator('//input[@value="radio2"]').isChecked()

    console.log(radiobuttonstatus)

    //await page.locator('//input[@value="radio2"]').uncheck()

 })