import { test } from "@playwright/test"
import { textboxpage } from "../pages/textboxpage.po"

test.describe("DemoQA Text Box Tests", () => {

   let textboxPage

   test.beforeEach(async ({ page }) => {
      textboxPage = new textboxpage(page)
      await textboxPage.launchURL()
   })

   test("TC_001: Fill and Submit Text Box Form with Valid Data", async ({ page }) => {
      // Test data
      const fullName = "John Doe"
      const email = "john.doe@example.com"
      const currentAddress = "123 Main Street, New York, NY 10001"
      const permanentAddress = "456 Oak Avenue, Boston, MA 02101"

      // Fill all details
      await textboxPage.fillAllDetails(fullName, email, currentAddress, permanentAddress)

      // Click submit button
      await textboxPage.clickSubmitButton()

      // Verify submit was successful and output is displayed
      await textboxPage.verifySubmitSuccess()

      // Verify all entered details are displayed correctly
      await textboxPage.verifyOutputDetails(fullName, email, currentAddress, permanentAddress)
   })

   test("TC_002: Verify Form with Different Valid Data", async ({ page }) => {
      // Test data
      const fullName = "Jane Smith"
      const email = "jane.smith@test.com"
      const currentAddress = "789 Elm Street, Chicago, IL 60601"
      const permanentAddress = "321 Pine Road, Houston, TX 77001"

      // Fill all details
      await textboxPage.fillAllDetails(fullName, email, currentAddress, permanentAddress)

      // Click submit button
      await textboxPage.clickSubmitButton()

      // Verify submit was successful
      await textboxPage.verifySubmitSuccess()

      // Verify all entered details are displayed correctly
      await textboxPage.verifyOutputDetails(fullName, email, currentAddress, permanentAddress)
   })

   test("TC_003: Submit with Mandatory Fields Only (Email)", async ({ page }) => {
      // Test data - only full name and email (mandatory fields)
      const fullName = "Alex Johnson"
      const email = "alex.johnson@example.com"
      const currentAddress = ""
      const permanentAddress = ""

      // Fill only name and email
      await textboxPage.fillFullName(fullName)
      await textboxPage.fillEmail(email)

      // Click submit button
      await textboxPage.clickSubmitButton()

      // Verify submit was successful
      await textboxPage.verifySubmitSuccess()

      // Verify the provided details are displayed
      await textboxPage.verifyOutputDetails(fullName, email, currentAddress, permanentAddress)
   })
})
