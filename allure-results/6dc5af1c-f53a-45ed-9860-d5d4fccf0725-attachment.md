# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke/smoke.login.spec.ts >>  @smoke Smoke: Login Test >> Login with valid credentials
- Location: tests/smoke/smoke.login.spec.ts:12:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

- Expected  - 1
+ Received  + 4

- You logged into a secure area!
+
+ 		        You logged into a secure area!
+ 		        
+ 		      
```

# Page snapshot

```yaml
- generic [active] [ref=f16e1]:
  - paragraph [ref=f16e3]:
    - link "PMP Practice" [ref=f16e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
  - banner [ref=f16e6]:
    - navigation "Main navigation" [ref=f16e7]:
      - link "SUT" [ref=f16e8] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=f16e9]'
        - text: Practice
      - generic [ref=f16e10]:
        - list [ref=f16e11]:
          - listitem [ref=f16e12]:
            - button "Demos" [ref=f16e13] [cursor=pointer]
          - listitem [ref=f16e14]:
            - link "Tools" [ref=f16e15] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f16e16]:
            - link "Tips" [ref=f16e17] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=f16e18]:
            - link "Test Cases" [ref=f16e19] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=f16e20]:
            - link "API Testing" [ref=f16e21] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=f16e22]:
            - link "About" [ref=f16e23] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=f16e24] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=f16e25]:
    - insertion [ref=f16e29]:
      - iframe [ref=f16e31]:
        
    - alert [ref=f16e35]:
      - text: You logged into a secure area!
      - button "Close" [ref=f16e36] [cursor=pointer]
    - paragraph [ref=f16e38]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=f16e39] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=f16e40]:
      - insertion [ref=f16e42]:
        - iframe [ref=f16e44]:
          
      - generic [ref=f16e47]:
        - navigation "breadcrumb mb-2" [ref=f16e48]:
          - list [ref=f16e49]:
            - listitem [ref=f16e50]:
              - link "Home" [ref=f16e51] [cursor=pointer]:
                - /url: /
            - listitem [ref=f16e52]: / Secure Area
        - heading "Secure Area page for Automation Testing Practice" [level=1] [ref=f16e53]
        - heading "Hi, practice!" [level=3] [ref=f16e54]
        - heading "Welcome to the Secure Area. When you are done click logout below." [level=4] [ref=f16e55]
        - link "Logout" [ref=f16e56] [cursor=pointer]:
          - /url: /logout
      - insertion [ref=f16e58]:
        - iframe [ref=f16e60]:
          
  - contentinfo [ref=f16e61]:
    - generic [ref=f16e66]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=f16e67]
      - paragraph [ref=f16e68]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=f16e69] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=f16e70] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from "../../src/fixtures/test.fixture";
  2  | import loginMessage from "../../src/data/login-message.json";
  3  | 
  4  | test.describe(" @smoke Smoke: Login Test", () => {
  5  |   test.beforeEach(async ({ loginPage }) => {
  6  |     await loginPage.goto();
  7  |     await expect(loginPage.usernameInput).toBeVisible();
  8  |     await expect(loginPage.passwordInput).toBeVisible();
  9  |     await expect(loginPage.loginButton).toBeVisible();
  10 |   });
  11 | 
  12 |   test("Login with valid credentials", async ({
  13 |     loginPage,
  14 |     dashboardPage,
  15 |   }) => {
  16 |     await loginPage.login(
  17 |       process.env.TEST_USERNAME!,
  18 |       process.env.TEST_PASSWORD!,
  19 |     );
  20 |     const message = await dashboardPage.getWelcomeMessage();
> 21 |     expect(message).toBe(loginMessage.success);
     |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |   });
  23 | 
  24 |   test("Login with invalid credentials should not get logged in", async ({
  25 |     loginPage,
  26 |   }) => {
  27 |     await loginPage.login(
  28 |       process.env.TEST_INVALID_USERNAME!,
  29 |       process.env.TEST_PASSWORD!,
  30 |     );
  31 |     const message = loginPage.getMessage;
  32 |     expect(message).toBe(loginMessage.failed);
  33 |   });
  34 | });
  35 | 
```