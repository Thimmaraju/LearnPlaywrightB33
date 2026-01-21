import { test, expect } from '@playwright/test';

import addempdata from "../../testData/PIM/addemployee.json"

import logindata from "../../testData/login.json"

import { faker } from '@faker-js/faker';

//for (let count = 1; count <= 10; count++) {


  test(`Verify Add Employee functionality `,{tag: "@smoke"}, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();

    //await page.getByRole('button', {name : "Submit"}).click()

    await page.getByRole('textbox', { name: 'First Name' }).fill("Madhukar");

    await page.getByRole('textbox', { name: 'Last Name' }).fill("B");

    await page.getByRole('textbox').nth(4).fill(faker.string.alpha(5));

    await page.getByRole('button', { name: 'Save' }).click();

    let i =0
    while (i<=10){

         await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
         i++
    }

 
  });
//}



