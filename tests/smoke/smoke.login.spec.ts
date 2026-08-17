import { test, expect } from "../../src/fixtures/test.fixture";
import logger from "../../src/utils/logger";

test.describe(" @smoke Smoke: Login Test", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test("Login with valid credentials", async ({
    loginPage,
    dashboardPage,
    page,
  }) => {
    await loginPage.login(
      process.env.TESTER_USERNAME!,
      process.env.TESTER_PASSWORD!,
    );
    const locator = await dashboardPage.getMessage();
    loginPage.waitForLoad();
    await locator.isVisible();
    logger.info(page.url());
    loginPage.waitForLoad();
    expect(page.url()).toBe(`${process.env.BASE_URL}/secure`);
    loginPage.waitForLoad();
    await dashboardPage.clicklogout();
  });

  test("Login with invalid credentials", async ({ loginPage, page }) => {
    await loginPage.login(
      process.env.TEST_INVALID_USERNAME!,
      process.env.TESTER_PASSWORD!,
    );
    const locator = await loginPage.getMessage();
    await locator.isVisible();
    logger.info(page.url());
    expect(page.url()).toBe(`${process.env.BASE_URL}/login`);
  });
});
