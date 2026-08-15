import { test, expect } from '../../src/fixtures/test.fixture';

test.describe('Smoke: Login', () => {
  test('Login page loads', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('Login with valid credentials', async ({ loginPage, dashboardPage }) => {
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
    await expect(dashboardPage.welcomeMessage).toBeVisible();
  });
});