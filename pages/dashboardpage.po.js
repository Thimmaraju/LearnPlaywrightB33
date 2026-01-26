import { expect } from "@playwright/test"

exports.dashboardPage = class dashboardPage{


   constructor(page){

      this.page = page 
      this.pimMenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]');
      
   
   }

   async clickPIM(){

    await  this.pimMenu.click()
   }

}