import { test, expect } from '@playwright/test';

test('Drop down example 1 ', async ({ page }) => {


    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    //await page.locator('select[name^="DOB_Month"]').selectOption("07")

    await page.locator('select[name^="DOB_Year"]').selectOption("1991")

    // //await page.locator('select[name^="DOB_Month"]').selectOption("07")

     await page.locator('select[name^="DOB_Month"]').selectOption({index : 8})



})
