# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke/smoke.login.spec.ts >>  @smoke Smoke: Login Test >> Login with valid credentials
- Location: tests/smoke/smoke.login.spec.ts:13:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText('You logged into a secure area!')
Expected: visible
Received: undefined

```

# Test source

```ts
  1  | import { test, expect } from "../../src/fixtures/test.fixture";
  2  | import logger from "../../src/utils/logger";
  3  | import loginMessage from "../../src/data/login-message.json";
  4  | import { BasePage } from "../../src/pages/base.page";
  5  | 
  6  | test.describe(" @smoke Smoke: Login Test", () => {
  7  |   test.beforeEach(async ({ loginPage }) => {
  8  |     await loginPage.goto();
  9  |     await expect(loginPage.usernameInput).toBeVisible();
  10 |     await expect(loginPage.passwordInput).toBeVisible();
  11 |     await expect(loginPage.loginButton).toBeVisible();
  12 |   });
  13 | 
  14 |   test("Login with valid credentials", async ({
  15 |     loginPage,
  16 |     dashboardPage,
  17 |     page
  18 |   }) => {
  19 |     await loginPage.login(
  20 |       process.env.TEST_USERNAME!,
  21 |       process.env.TEST_PASSWORD!,
  22 |     );
> 23 |     const message = await dashboardPage.getMessage();
     |                           ^ Error: expect(locator).toBeVisible() failed
  24 |     await expect(message).toBeVisible();
  25 |     logger.info(page.url);
  26 |     await expect(page.url).toBe(`${process.env.BASE_URL}/secure`);
  27 |   });
  28 | 
  29 |   test("Login with invalid credentials", async ({
  30 |     loginPage,page,
  31 |   }) => {
  32 |     await loginPage.login(
  33 |       process.env.TEST_USERNAME!,
  34 |       process.env.TEST_PASSWORD!,
  35 |     );
  36 |     const message = await loginPage.getMessage();
  37 |     await expect(message).toBeVisible();
  38 |     logger.info(page.url);
  39 |     await expect(page.url).toBe(`${process.env.BASE_URL}/login`);
  40 |   });
  41 | });
  42 | 
```