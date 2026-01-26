
import { test, expect } from '@playwright/test';
import { totalmem } from 'node:os';

test("Get the String from DOM ", async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const usernametext = await page.locator('//p[@class="oxd-text oxd-text--p"]').first().textContent()

    console.log(usernametext)

    const passwordtext = await page.locator('//p[@class="oxd-text oxd-text--p"]').last().textContent()

    console.log(passwordtext)

    const username = usernametext.split(" ")[2]

   console.log(username)

    const password = passwordtext.split(" ")[2]

   console.log(password)

   await page.locator('//input[@name="username"]').fill(username)

})

let x = "cart"

test(`Verify total price  - ${x}`, async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')


    await page.locator("//h4[text()='Brocolli - 1 Kg']/../div[3]/button").click()
    await page.locator("//h4[text()='Cauliflower - 1 Kg']/../div[3]/button").click()

    const price1 = Number(await page.locator("//h4[text()='Brocolli - 1 Kg']/../p").textContent())

    console.log(price1)

    const price2 = Number(await page.locator("//h4[text()='Cauliflower - 1 Kg']/../p").textContent())

    console.log(price2)

    const totalprice = Number(await page.locator('//table/tbody/tr[2]/td[3]/strong').textContent())

    console.log(totalprice)

    expect(price1+price2).toBe(totalprice)


    


   

})