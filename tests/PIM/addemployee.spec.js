import { test, expect } from '@playwright/test';

import addempdata from "../../testData/PIM/addemployee.json"

import logindata from "../../testData/login.json"

test('Verify Add Employee functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).fill(addempdata.firstname);

  await page.getByRole('textbox', { name: 'Last Name' }).fill(addempdata.lastname);
 
  await page.getByRole('textbox').nth(4).fill(addempdata.empID);

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});