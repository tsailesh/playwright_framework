# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke/smoke.login.spec.ts >>  @smoke Smoke: Login Test >> Login with valid credentials
- Location: tests/smoke/smoke.login.spec.ts:14:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "https://practice.expandtesting.com/secure"
Received: [Function url]
```

# Page snapshot

```yaml
- generic [active] [ref=f16e1]:
  - paragraph [ref=f16e3]:
    - link "PMP Practice" [ref=f16e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Download Productivity Apps" [ref=f16e5] [cursor=pointer]
  - banner [ref=f16e10]:
    - navigation "Main navigation" [ref=f16e11]:
      - link "SUT" [ref=f16e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=f16e13]'
        - text: Practice
      - generic [ref=f16e14]:
        - list [ref=f16e15]:
          - listitem [ref=f16e16]:
            - button "Demos" [ref=f16e17] [cursor=pointer]
          - listitem [ref=f16e18]:
            - link "Tools" [ref=f16e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f16e20]:
            - link "Tips" [ref=f16e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=f16e22]:
            - link "Test Cases" [ref=f16e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=f16e24]:
            - link "API Testing" [ref=f16e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=f16e26]:
            - link "About" [ref=f16e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=f16e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=f16e29]:
    - alert [ref=f16e36]:
      - text: You logged into a secure area!
      - button "Close" [ref=f16e37] [cursor=pointer]
    - paragraph [ref=f16e39]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=f16e40] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=f16e41]:
      - insertion [ref=f16e43]:
        - generic [ref=f16e46]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f16e48]: Discover more
          - link "Test case management" [ref=f16e49] [cursor=pointer]
          - link "Download Productivity Apps" [ref=f16e54] [cursor=pointer]
          - link "Free mock exams" [ref=f16e59] [cursor=pointer]
          - link "Download Reference Apps" [ref=f16e64] [cursor=pointer]
          - link "Automation practice website" [ref=f16e69] [cursor=pointer]
          - link "Test automation tools" [ref=f16e74] [cursor=pointer]
          - link "Login security audit" [ref=f16e79] [cursor=pointer]
          - link "Automation testing platform" [ref=f16e84] [cursor=pointer]
      - generic [ref=f16e91]:
        - navigation "breadcrumb mb-2" [ref=f16e92]:
          - list [ref=f16e93]:
            - listitem [ref=f16e94]:
              - link "Home" [ref=f16e95] [cursor=pointer]:
                - /url: /
            - listitem [ref=f16e96]: / Secure Area
        - heading "Secure Area page for Automation Testing Practice" [level=1] [ref=f16e97]
        - heading "Hi, practice!" [level=3] [ref=f16e98]
        - heading "Welcome to the Secure Area. When you are done click logout below." [level=4] [ref=f16e99]
        - link "Logout" [ref=f16e100] [cursor=pointer]:
          - /url: /logout
      - insertion [ref=f16e102]:
        - generic [ref=f16e105]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f16e107]: Discover more
          - link "Cypress automation guide" [ref=f16e108] [cursor=pointer]
          - link "Earn Professional Certifications" [ref=f16e113] [cursor=pointer]
          - link "Login page tester" [ref=f16e118] [cursor=pointer]
          - link "Compare Developer Tools" [ref=f16e123] [cursor=pointer]
          - link "API testing guide" [ref=f16e128] [cursor=pointer]
          - link "Software testing course" [ref=f16e133] [cursor=pointer]
          - link "Discover Degree Programs" [ref=f16e138] [cursor=pointer]
          - link "Download Tech Manuals" [ref=f16e143] [cursor=pointer]
  - contentinfo [ref=f16e148]:
    - generic [ref=f16e153]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=f16e154]
      - paragraph [ref=f16e155]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=f16e156] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=f16e157] [cursor=pointer]
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
  17 |     page,
  18 |   }) => {
  19 |     await loginPage.login(
  20 |       process.env.TEST_USERNAME!,
  21 |       process.env.TEST_PASSWORD!,
  22 |     );
  23 |     const locator = await loginPage.getMessage();
  24 |     await locator.isVisible();
  25 |     logger.info(page.url);
> 26 |     expect(page.url).toBe(`${process.env.BASE_URL}/secure`);
     |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  27 |   });
  28 | 
  29 |   test("Login with invalid credentials", async ({ loginPage, page }) => {
  30 |     await loginPage.login(
  31 |       process.env.TEST_INVALID_USERNAME!,
  32 |       process.env.TEST_PASSWORD!,
  33 |     );
  34 |     const locator = await loginPage.getMessage();
  35 |     await locator.isVisible();
  36 |     logger.info(page.url);
  37 |     expect(page.url).toBe(`${process.env.BASE_URL}/login`);
  38 |   });
  39 | });
  40 | 
```