import { test, expect } from '@playwright/test';

test('Drop down example 1 ', async ({ page }) => {


    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    // entire page 
    await page.screenshot({path: "tests/screenshots/beforeselectiong.jpg"})

    await page.locator('select[name^="DOB_Year"]').screenshot({path: "tests/screenshots/elementbeforeselecting.jpg"})

    //await page.locator('select[name^="DOB_Month"]').selectOption("07")

    await page.locator('select[name^="DOB_Year"]').selectOption("1991")

      await page.screenshot({path: "tests/screenshots/afterselectiong.jpg"})

          await page.locator('select[name^="DOB_Year"]').screenshot({path: "tests/screenshots/elementafterselecting.jpg"})

    // //await page.locator('select[name^="DOB_Month"]').selectOption("07")

     await page.locator('select[name^="DOB_Month"]').selectOption({index : 8})



})
