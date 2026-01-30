const { test, expect } = require('@playwright/test');
const moment = require('moment');

test.describe('Calendar Feature', () => {

    test('should display the calendar', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/')
        await page.getByRole('textbox', { name: 'Username' }).fill("Admin");

        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await page.getByRole('textbox', { name: 'Password' }).press('Enter')

        await page.locator('//a[@href="/web/index.php/leave/viewLeaveModule"]').click()

        // await page.locator('(//div[@class="oxd-date-input"]/input)[1]').fill('2008-18-09');

        // await page.locator('(//div[@class="oxd-date-input"]/input)[2]').fill("2026-18-09")
   

         await page.locator('(//div[@class="oxd-date-input"]/input)[1]').fill(moment().format('YYYY-DD-MM'));

         await page.goBack()

         await page.waitForTimeout(3000)

         await page.goForward()

              await page.waitForTimeout(3000)

        await page.reload()

        // await page.locator('(//div[@class="oxd-date-input"]/input)[2]').fill(moment().add(2, 'days').format('YYYY-DD-MM'))
    });


    test("Nested Iframes ", async ({page}) =>{

        await page.goto('https://www.dezlearn.com/nested-iframes-example/')

        await page.frameLocator('#parent_iframe').frameLocator('#iframe1').locator('#u_5_6').click()
    })
});