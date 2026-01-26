import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.appLogo = page.locator("//div[normalize-space(text())='Swag Labs']");
    this.usernameInput = page.locator("//input[@data-test='username']");
    this.passwordInput = page.locator("input[type='password']");
    this.loginButton = page.locator("input[type='submit']");
    this.errorMessage = page.locator("//h3[@data-test='error']");
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async verifyHeader() {
    await expect(this.appLogo).toBeVisible();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/inventory.html'
    );
  }

  async verifyErrorMessage(expectedText) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(expectedText);
  }
}
