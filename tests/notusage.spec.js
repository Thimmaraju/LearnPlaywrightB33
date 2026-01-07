

//Use case 

// status - if already checked dont do anything 

/// status of the checkbox is not checked - then go and select 


import { test, expect } from '@playwright/test';
import { flushCompileCache } from 'module';


test('Verify check box selection', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    await page.locator('//input[@type="checkbox"]').check()

    const statusofcheckbox = await page.locator('//input[@type="checkbox"]').isChecked()  

    // if checked it will true 
    // if not checked it will be false 

    console.log(statusofcheckbox)

    if(statusofcheckbox){


        await page.locator('//input[@type="checkbox"]').uncheck()

    }


})