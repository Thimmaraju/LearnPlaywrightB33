import { test, expect } from '@playwright/test';
import logindata from "../../testData/login.json"
import { faker } from '@faker-js/faker';


let employess = {

    emp1: { firstname: "Raju", lastname: "G" },

    emp2: { firstname: "Lakshmi", lastname: "J" },


    emp3: { firstname: "Praveen", lastname: "Y" }
}


for (let emp in employess) {



    test(`Verify Add Employee functionality - ${employess[emp].firstname}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);

        await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('link', { name: 'Add Employee' }).click()

        await page.getByRole('textbox', { name: 'First Name' }).fill(employess[emp].firstname);

        await page.getByRole('textbox', { name: 'Last Name' }).fill(employess[emp].lastname);

        await page.getByRole('textbox').nth(4).fill(faker.string.alpha(5));

        await page.getByRole('button', { name: 'Save' }).click();


        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();



    });
}

