const { browser, test, expect } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

  test("browse context test", async ({browser}) => {

    test.slow()
    const context1 = await browser.newContext();

    const context2 = await browser.newContext();


     const page1 = await context1.newPage();

    const page2 = await context2.newPage();


    await page1.goto('https://opensource-demo.orangehrmlive.com/');
    await page1.locator('input[name="username"]').fill("Admin")
    await page1.locator("input[type='password']").fill("admin123")
    await page1.locator("input[type='password']").press("Enter")

    await expect(page1).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page1.locator('span').filter({ hasText: 'PIM' }).click();
    await page1.locator("//a[text()='Add Employee']").click()
    await page1.getByPlaceholder('First Name').fill(`praveen`);
    await page1.getByPlaceholder('Last Name').fill(`abc`);
    await page1.locator('//input[@type="checkbox"]').dispatchEvent('click');
    await page1.locator("//label[text()='Username']/../following-sibling::div/input").fill("praveenabc")
    await page1.locator("//label[text()='Password']/../following-sibling::div/input").fill("Pass@1234")
    await page1.locator("//label[text()='Confirm Password']/../following-sibling::div/input").fill("Pass@1234")

    await page1.locator('button[type="submit"]').click();


    await page2.goto('https://opensource-demo.orangehrmlive.com/');
    await page2.locator('input[name="username"]').fill("praveenabc")
    await page2.locator("input[type='password']").fill("Pass@1234")
    await page2.locator("input[type='password']").press("Enter")

    await expect(page2).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')




    //console.log(browser.contexts().length);

    await page1.waitForTimeout(10000)

      await page2.waitForTimeout(10000)

    //await browser.close();
  });

})