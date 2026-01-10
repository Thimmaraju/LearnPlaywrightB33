import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"

test('Verify logo visibility', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
});



test('Verify login with valid credentials', async ({ page }) => {

    //actions 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[name='username']").fill(logindata.username)

    await page.locator("//input[@placeholder='Password']").fill(logindata.password)
    await page.locator("//button[@type='submit']").click()
   // assertion - validation

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

   await expect(page.locator("//span[text()='PIM']")).toBeVisible()

   await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()

});



test('Verify login valid Username and Invalid password', async ({ page }) => {

    //actions 
    await page.goto('/web/index.php/auth/login')

    await page.locator("input[name='username']").fill(logindata.username)

    await page.locator("//input[@placeholder='Password']").fill(logindata.wrongpassword)
    await page.locator("//button[@type='submit']").click()
   // assertion - validation
   
   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


});

test('Verify login invalid Username and valid password', async ({ page }) => {

    //actions 
    await page.goto('/web/index.php/auth/login')

    await page.locator("input[name='username']").fill(logindata.wrongUsername)

    await page.locator("//input[@placeholder='Password']").fill(logindata.password)
    await page.locator("//button[@type='submit']").click()
   // assertion - validation
   
   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


});

test('Verify login invalid Username and invalid password', async ({ page }) => {

    //actions 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[name='username']").fill(logindata.wrongUsername)

    await page.locator("//input[@placeholder='Password']").fill(logindata.wrongpassword)
    await page.locator("//button[@type='submit']").click()
   // assertion - validation
   
   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


});



test.skip('Verify login with blank fields', async ({ page }) => {

    //actions 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//button[@type='submit']").click()

   // assertion - validation
   
   await expect(page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]")).toBeVisible()

   await expect(page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]")).toBeVisible()


   
});


test("Local Apps test", async ({page}) => {


    await page.goto('http://localhost:3000/')

    await page.waitForTimeout(20000)
})


test('Verify login with SQL injection attempt', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("' OR '1'='1");
    await page.locator("//input[@placeholder='Password']").fill("' OR '1'='1");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

test('Verify login with special characters in credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("admin!@#$%");
    await page.locator("//input[@placeholder='Password']").fill("pass<>?");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

test('Verify login with whitespace in username', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("  admin  ");
    await page.locator("//input[@placeholder='Password']").fill(logindata.password);
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

test('Verify login with case sensitivity', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill(logindata.username.toUpperCase());
    await page.locator("//input[@placeholder='Password']").fill(logindata.password);
    await page.locator("//button[@type='submit']").click();
    //await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});