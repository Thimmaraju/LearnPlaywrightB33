import { expect } from "@playwright/test"

exports.addEmployeePage = class addEmployeePage{


   constructor(page){

      this.page = page 
      this.addempSubmenu = page.locator("//a[text()='Add Employee']")
      this.firstNameInput = page.locator('input[name="firstName"]')
      this.lastnameInput = page.locator('input[name="lastName"]')
      this.saveBtn = page.locator('button[type="submit"]')
      this.personalDetails = page.locator("//h6[text()='Personal Details']")
   
   }

   async clickAddEmployee(){

    await  this.addempSubmenu.click()
   }

   async addEmployee(firstname, lastName){

       await this.firstNameInput.fill(firstname)
       await this.lastnameInput.fill(lastName)
       await this.saveBtn.click()
   }

   async empCreationSuccess(){

       await expect(this.personalDetails).toBeVisible()
   }

}