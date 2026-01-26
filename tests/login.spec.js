import { test, expect } from '@playwright/test';

import {loginpage } from "../pages/loginpage.po"

import logindata from  "../testData/login.json"


let login

test.beforeEach( async ({page}) => {

    login = new loginpage(page)
    await login.launchURL()
    await login.logoVisible()
})

test("Verify login with Valid Credentials", async ()=>{

    await login.loginwithCreds(logindata.username, logindata.password)
    await login.loginSuccess()
})

test("Verify login with Valid username and Invalid Password", async () => {

      await login.loginwithCreds(logindata.username, logindata.wrongpassword)

      await login.loginFailure()

})

test("Verify login with INValid username and valid Password", async () => {

      await login.loginwithCreds(logindata.wrongUsername, logindata.password)

      await login.loginFailure()

})

test("Verify login with INValid username and Invalid Password", async () => {

      await login.loginwithCreds(logindata.wrongUsername, logindata.wrongpassword)

      await login.loginFailure()

})