
import { test, expect } from '@playwright/test';

test("Verify Register flow ", async ({page}) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    await page.locator('//input[@placeholder="Enter your full name"]').fill("Raju G")

    //await page.locator('input[placeholder="Enter your full name"]').fill("Raju G")


})