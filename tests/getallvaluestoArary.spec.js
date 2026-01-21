import { test, expect } from '@playwright/test';


test('Verify menu items ',  async ({ page }) => {

    //actions 
   await  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Pending 

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
   // assertion - validation

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

   await page.waitForTimeout(5000)
   const menuitemtext = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first().textContent()


   console.log(menuitemtext)
})