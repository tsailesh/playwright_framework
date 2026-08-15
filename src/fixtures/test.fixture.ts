import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { Dashboard } from '../pages/dashboard.page';

// Extend the base test with page object fixtures
export const test = base.extend<{
  loginPage: LoginPage;
  dashboardPage: Dashboard;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new Dashboard(page);
    await use(dashboardPage);
  },
});