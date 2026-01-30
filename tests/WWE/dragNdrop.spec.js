const { test, expect } = require('@playwright/test');


test('drag and drop- example13', async ({ page }) => {
    // Go to the page
    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop');



    // await page.locator("#menu-fried-chicken").dragTo(page.locator("#plate-items"))

    //     await page.locator('#menu-hamburger').dragTo( page.locator('#plate-items'))

    //     await page.locator('#menu-ice-cream').dragTo( page.locator('#plate-items'))

    // const sourcesitems = ["#menu-fried-chicken", '#menu-hamburger', '#menu-ice-cream']
    // for (let item of sourcesitems) {

    //     await page.locator(item).dragTo(page.locator('#plate-items'))
    // }

    // await page.waitForTimeout(5000)

    const sourceFriedChicken = await page.locator('#menu-fried-chicken');
    const sourceHamburger = await page.locator('#menu-hamburger');
    const sourceIceCream = await page.locator('#menu-ice-cream');

     const targetPlateItems = await page.locator('#plate-items');

    await sourceFriedChicken.dragTo(targetPlateItems);

    await page.locator('#plate').screenshot({path : "tests/dragndrop/option1.jpg"})
    await sourceHamburger.dragTo(targetPlateItems);

    await page.locator('#plate').screenshot({path : "tests/dragndrop/option2.jpg"})
    await sourceIceCream.dragTo(targetPlateItems);
    await page.locator('#plate').screenshot({path : "tests/dragndrop/option3.jpg"})
    // // await page.waitForTimeout(5000)

})

