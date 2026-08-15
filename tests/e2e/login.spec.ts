import { test, expect} from '../../src/fixtures/test.fixture';

test.describe('Login E2E', () => {
  test('should login with valid credentials and see dashboard', async ({ loginPage, dashboardPage }) => {
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);

    await expect(dashboardPage.welcomeMessage).toContainText('Welcome');
  });

  test('should show error for invalid credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('wrong', 'wrong');

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid username or password');
  });
});