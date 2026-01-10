
import { test, expect } from '@playwright/test';

function generateValidEmail() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    return `testuser${timestamp}${randomNum}@rediff.com`;
}

//testuser17680232372547910@rediff.com

//testuser17680232820779225@rediff.com
test("Verify Register flow ", async ({page}) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    await page.locator('//input[@placeholder="Enter your full name"]').fill(generateValidEmail())



})