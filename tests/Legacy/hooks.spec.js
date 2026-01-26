
import { test, expect } from '@playwright/test';





test.describe("Group 1", () => {

    
test.afterAll(() => {

    console.log("After All tests")
})

test.beforeAll(() => {

    console.log("Before All tests")
})
test.beforeEach(() => {

    console.log("Raju")
})


test.afterEach(() => {

    console.log("Madhu")
})




    test("test case1", () => {


        console.log("Lakshmi")


    })


    test("test case2", () => {


        console.log("Mounika")


    })


    test("test case3", () => {


        console.log("DHanusha")

    })


    test("test case4", () => {



        console.log("Pavan")

    })


})



test.describe("group 2", () => {

    test("test case5", () => {



        console.log("praveen")

    })

})






