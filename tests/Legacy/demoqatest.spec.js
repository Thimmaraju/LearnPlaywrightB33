import { test, expect } from '@playwright/test';

let username = "Raju G"

test('verify Edit boxes',{tag: "@smoke"}, async ({ page }) => {


  await page.goto('https://demoqa.com/');
  await page.locator('path').first().click();
  await page.getByText('Text Box').click();
  
  await page.getByRole('textbox', { name: 'Full Name' }).fill(username);
 

  await page.getByRole('textbox', { name: 'name@example.com' }).fill('dbsqatechnologgies@gmail.com');

  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');

  await page.locator('#permanentAddress').fill('Bangalore');

  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page.getByText('Name:Raju G')).toBeVisible();
  await expect(page.getByText('Email:dbsqatechnologgies@')).toBeVisible();
  await expect(page.getByText('Current Address :Bangalore')).toBeVisible();
  await expect(page.getByText('Permananet Address :Bangalore')).toBeVisible();

  username = "Rejneesh"
});

test("dummy", async ({page})=>{


  await page.getByRole('textbox', { name: 'Full Name' }).fill(username);

})