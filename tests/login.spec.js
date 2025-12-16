import { test, expect } from '@playwright/test';

test('Verify logo visibility', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
});



test('Verify login with valid credentials', async ({ page }) => {

    //actions 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
   // assertion - validation

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

   await expect(page.locator("//span[text()='PIM']")).toBeVisible()


});



test('Verify login valid Username and Invalid password', async ({ page }) => {

    //actions 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("//input[@placeholder='Password']").fill("efgverhgvyugher")
    await page.locator("//button[@type='submit']").click()
   // assertion - validation
   
   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


});

test('Verify login invalid Username and valid password', async ({ page }) => {

    //actions 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[name='username']").fill("Adjhbgfhmin")

    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
   // assertion - validation
   
   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


});

test('Verify login invalid Username and invalid password', async ({ page }) => {

    //actions 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[name='username']").fill("Adjhbgfhmin")

    await page.locator("//input[@placeholder='Password']").fill("sfvdfv")
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


