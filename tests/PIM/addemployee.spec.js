import { test, expect } from '@playwright/test';

import {loginpage } from "../../pages/loginpage.po"
import {dashboardPage} from "../../pages/dashboardpage.po"
import {addEmployeePage} from "../../pages/PIM/addemployee.po"

import addempData from "../../testData/PIM/addemployee.json"

let login
let dashboard 
let addemp 

test.beforeEach( async ({page}) => {

    login = new loginpage(page)
    dashboard = new dashboardPage(page)
    addemp = new addEmployeePage(page)
    await login.launchURL()
    await login.logoVisible()
    await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await login.loginSuccess()
    await dashboard.clickPIM()
})

test("Verify add Employee with Madatory Details", async () => {

   await addemp.clickAddEmployee()
   await addemp.addEmployee(addempData.firstname, addempData.lastname)
   await addemp.empCreationSuccess()

})

