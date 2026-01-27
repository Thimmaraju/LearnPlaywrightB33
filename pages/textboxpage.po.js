import { expect } from "@playwright/test"

exports.textboxpage = class textboxpage {

   constructor(page) {
      this.page = page
      this.fullNameInput = page.locator('#fullName')
      this.emailInput = page.locator('#userEmail')
      this.currentAddressInput = page.locator('#currentAddress')
      this.permanentAddressInput = page.locator('#permanentAddress')
      this.submitBtn = page.locator('button#submit')
      this.outputContainer = page.locator('#output')
      this.successMessage = page.locator('.border')
   }

   async launchURL() {
      await this.page.goto('https://demoqa.com/text-box')
   }

   async fillFullName(fullName) {
      await this.fullNameInput.fill(fullName)
   }

   async fillEmail(email) {
      await this.emailInput.fill(email)
   }

   async fillCurrentAddress(address) {
      await this.currentAddressInput.fill(address)
   }

   async fillPermanentAddress(address) {
      await this.permanentAddressInput.fill(address)
   }

   async clickSubmitButton() {
      await this.submitBtn.click()
   }

   async fillAllDetails(fullName, email, currentAddress, permanentAddress) {
      await this.fillFullName(fullName)
      await this.fillEmail(email)
      await this.fillCurrentAddress(currentAddress)
      await this.fillPermanentAddress(permanentAddress)
   }

   async verifyOutputDetails(expectedFullName, expectedEmail, expectedCurrentAddress, expectedPermanentAddress) {
      const outputText = await this.outputContainer.textContent()

      expect(outputText).toContain(expectedFullName)
      expect(outputText).toContain(expectedEmail)
      expect(outputText).toContain(expectedCurrentAddress)
      expect(outputText).toContain(expectedPermanentAddress)
   }

   async verifySubmitSuccess() {
      await expect(this.outputContainer).toBeVisible()
   }
}
