
import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"

let jobtitles = {

    title1: "QA Analyst I",
    title2: "SDET I",
    title3: "Software test Engineer I",
    title4: "QA Engineer I"


}

for (let title in jobtitles) {

    test(`Verify Add Job title functionality - ${jobtitles[title]}`, async ({ page }) => {

        await page.goto('/web/index.php/auth/login')

        await page.locator("input[name='username']").fill(logindata.username)

        await page.locator("//input[@placeholder='Password']").fill(logindata.password)
        await page.locator("//button[@type='submit']").click()
        // assertion - validation

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[1]").click()

        await page.locator("//span[normalize-space(text())='Job']").click()

        await page.locator("//a[normalize-space(text())='Job Titles']").click()

        await page.locator("//button[contains(.,'Add')]").click()

        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitles[title])

        await page.locator("//textarea[@placeholder='Type description here']").pressSequentially("erkjfvnhhr", { delay: 500 })

        await page.locator("//input[@type='file']").setInputFiles('testData/AI-QA.png')

        await page.locator("//button[@type='submit']").click()

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')






    })

}

