import { test, expect } from '@playwright/test';

test.describe('Validate Orange HRM Login functionality with SessionStorage', () => {


      test('Add Employee ', async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
        await page.getByRole('textbox', { name: 'First Name' }).fill("RAJU");
        await page.getByRole('textbox', { name: 'Last Name' }).fill("G");
         const random5Char = Math.random().toString(36).substring(2, 7); 
        await page.locator('(//input[@class="oxd-input oxd-input--active"])[last()]').fill(random5Char)
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

    });

       test('Add job title ', async ({ page }) => {


        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
        const random5Char = Math.random().toString(36).substring(2, 7); // 5 chars 

        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("SDET" + random5Char)

        await page.locator("//textarea[@placeholder='Type description here']").fill("Automation")

        await page.locator('input[type="file"]').setInputFiles("testData/fileuploads/learn.jpg")

        await page.locator("//button[@type='submit']").click();

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")


    });

    test("Buzz post", async ({page}) =>{

     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')

    })


    test("Attendance post", async ({page}) =>{

     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchOut')

    })


})