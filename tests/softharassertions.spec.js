import { test, expect } from '@playwright/test';


 test('Verify login with valid credentials',async ({ page }) => {

       
       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

       await expect.soft(page.locator('//img[@alt="company-branding1"]')).toBeVisible()

        await page.locator("input[name='username']").fill("bnjhb")

        await page.locator("//input[@placeholder='Password']").fill("admin123")
        await page.locator("//button[@type='submit']").click()
        // assertion - validation

        await expect.soft(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        await expect.soft(page.locator("//span[text()='PIM']")).toBeVisible()

        await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()

    });