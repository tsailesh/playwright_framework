import { test as base,expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { Dashboard } from '../pages/dashboard.page';
import { LogoutPage } from '../pages/logout.page';

// Extend the base test with page object fixtures
export const test = base.extend<{
  loginPage: LoginPage;
  dashboardPage: Dashboard;
  logout:LogoutPage;
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

export {expect};