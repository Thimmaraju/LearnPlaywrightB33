import { test } from '@playwright/test';
import { LoginPage } from '../pages/swaglogin.po';
import testData from '../testData/swaglogin.json';

test.describe('Swag Labs Login Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Verify Page Header', async () => {
    await loginPage.verifyHeader();
  });

  test.describe('Login with different credentials', () => {
    testData.loginTests.forEach((data) => {
      test(`Verify login to Swaglabs ${data.testName}`, async () => {
        await loginPage.login(data.username, data.password);
        
        if (data.isValidLogin) {
          await loginPage.verifySuccessfulLogin();
        } else {
          await loginPage.verifyErrorMessage(data.expectedError);
        }
      });
    });
  });

});
