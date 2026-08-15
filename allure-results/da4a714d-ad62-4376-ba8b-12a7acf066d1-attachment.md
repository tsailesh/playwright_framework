# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/login.spec.ts >> Login E2E >> should login with valid credentials and see dashboard
- Location: tests/e2e/login.spec.ts:4:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Welcome"
Received string:    "Test Login page for Automation Testing Practice"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1')
    14 × locator resolved to <h1>Test Login page for Automation Testing Practice</h1>
       - unexpected value "Test Login page for Automation Testing Practice"

```

```yaml
- heading "Test Login page for Automation Testing Practice" [level=1]
```

# Test source

```ts
  1  | import { test, expect} from '../../src/fixtures/test.fixture';
  2  | 
  3  | test.describe('Login E2E', () => {
  4  |   test('should login with valid credentials and see dashboard', async ({ loginPage, dashboardPage }) => {
  5  |     await loginPage.goto();
  6  |     await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  7  | 
> 8  |     await expect(dashboardPage.welcomeMessage).toContainText('Welcome');
     |                                                ^ Error: expect(locator).toContainText(expected) failed
  9  |   });
  10 | 
  11 |   test('should show error for invalid credentials', async ({ loginPage }) => {
  12 |     await loginPage.goto();
  13 |     await loginPage.login('wrong', 'wrong');
  14 | 
  15 |     const error = await loginPage.getErrorMessage();
  16 |     expect(error).toContain('Invalid username or password');
  17 |   });
  18 | });
```