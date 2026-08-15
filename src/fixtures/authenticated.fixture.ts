import { test as base } from './test.fixture';
import { Dashboard } from '../pages/dashboard.page';

// Extended fixture that provides an authenticated dashboard page
export const test = base.extend<{
  authenticatedDashboard: Dashboard;
}>({
  authenticatedDashboard: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
    const dashboard = new Dashboard(page);
    await use(dashboard);
  },
});