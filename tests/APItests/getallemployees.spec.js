import { test, expect } from '@playwright/test';

import payload from "../../testData/CreateempPayload.json"

import { faker } from '@faker-js/faker';

test("Verify GET API - get all Employees ", async ({ request }) => {

    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=5&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC"

    const GetALLEmployees = await request.get(url, {
        headers: {

            cookie: process.env.COOKIEVALUE

        }
    })

    expect(GetALLEmployees.status()).toBe(200)

    const response = await GetALLEmployees.json()

    console.log(response)


})


test("Verify POST API - Create  Employee", async ({ request }) => {

    payload.firstName = faker.person.firstName()
    payload.lastName = faker.person.lastName()
    payload.employeeId  = faker.string.alpha(5)
    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"
    const createEmployee = await request.post(url, {
        headers: {
            cookie: process.env.COOKIEVALUE
        },
        data: payload

    })

    console.log(await createEmployee.json())

    const responsecreateemp = await createEmployee.json()

    expect(createEmployee.status()).toBe(200)

    expect(responsecreateemp.data.firstName).toBe(payload.firstName)
    expect(responsecreateemp.data.lastName).toBe(payload.lastName)
    expect(responsecreateemp.data.employeeId).toBe(payload.employeeId)

})


test("Verify GET API - GEt all  Users ", async ({ request }) => {

    const url = "https://reqres.in/api/users"
    const getALUsers = await request.get(url, {
        headers: {
            "x-api-key": "reqres_fd961708e7c04c8a8725daf6895e10a3"
        }
    })

    const resusers = await getALUsers.json()

    console.log(resusers)

    expect(getALUsers.status()).toBe(200)

    expect(resusers.page).toBe(1)

    expect(resusers.per_page).toBe(6)

    expect(resusers.total).toBe(12)

    expect(resusers.data[0].id).toBe(1)
    expect(resusers.data[0].email).toBe("george.bluth@reqres.in")




})

