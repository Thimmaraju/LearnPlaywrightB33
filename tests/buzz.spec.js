import { test, expect } from '@playwright/test';
import { loginpage } from "../pages/loginpage.po"
import { buzzpage } from "../pages/buzzpage.po"
import logindata from "../testData/login.json"
import buzzdata from "../testData/buzz.json"

let login
let buzz

test.beforeEach(async ({ page }) => {

    login = new loginpage(page)
    buzz = new buzzpage(page)
    await login.launchURL()
    await login.logoVisible()
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.loginSuccess()

})

test("Add Buzz Post with Valid Text", async ({ page }) => {

    await buzz.navigateToBuzz()
    await buzz.addBuzzPost(buzzdata.buzzPost1)

})

test("Add Multiple Buzz Posts", async ({ page }) => {

    await buzz.navigateToBuzz()
    await buzz.addBuzzPost(buzzdata.buzzPost2)
    await page.waitForTimeout(2000)
    await buzz.addBuzzPost(buzzdata.buzzPost3)

})

test("Add Buzz Post with Congratulations Message", async ({ page }) => {

    await buzz.navigateToBuzz()
    await buzz.addBuzzPost(buzzdata.buzzPost4)

})

test("Verify Buzz Post appears in Feed", async ({ page }) => {

    await buzz.navigateToBuzz()
    const postText = buzzdata.buzzPost1
    await buzz.addBuzzPost(postText)
    
    // Verify the post is visible in the feed
    const postInFeed = page.locator(`//p[contains(text(), "${postText.substring(0, 20)}")]`)
    await expect(postInFeed).toBeVisible()

})
