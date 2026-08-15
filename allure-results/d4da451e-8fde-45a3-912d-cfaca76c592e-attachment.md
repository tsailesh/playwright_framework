# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke/smoke.login.spec.ts >>  @smoke Smoke: Login Test >> Login with invalid credentials should not get logged in
- Location: tests/smoke/smoke.login.spec.ts:24:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Your password is invalid!"
Received: [Function getMessage]
```

# Page snapshot

```yaml
- generic [ref=f30e1]:
  - paragraph [ref=f30e3]:
    - link "PMP Practice" [ref=f30e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Software testing certification" [ref=f30e5] [cursor=pointer]
  - banner [ref=f30e10]:
    - navigation "Main navigation" [ref=f30e11]:
      - link "SUT" [ref=f30e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=f30e13]'
        - text: Practice
      - generic [ref=f30e14]:
        - list [ref=f30e15]:
          - listitem [ref=f30e16]:
            - button "Demos" [ref=f30e17] [cursor=pointer]
          - listitem [ref=f30e18]:
            - link "Tools" [ref=f30e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f30e20]:
            - link "Tips" [ref=f30e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=f30e22]:
            - link "Test Cases" [ref=f30e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=f30e24]:
            - link "API Testing" [ref=f30e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=f30e26]:
            - link "About" [ref=f30e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=f30e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=f30e29]:
    - paragraph [ref=f30e34]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=f30e35] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=f30e36]:
      - insertion [ref=f30e38]:
        - generic [ref=f30e41]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f30e43]: Discover more
          - link "Email & Messaging" [ref=f30e44] [cursor=pointer]
          - link "Test automation tools" [ref=f30e49] [cursor=pointer]
          - link "Web Browsers" [ref=f30e54] [cursor=pointer]
          - link "Internet & Telecom" [ref=f30e59] [cursor=pointer]
          - link "Networking" [ref=f30e64] [cursor=pointer]
          - link "Automation practice website" [ref=f30e69] [cursor=pointer]
          - link "Scripting Languages" [ref=f30e74] [cursor=pointer]
          - link "Login testing guide" [ref=f30e79] [cursor=pointer]
      - generic [ref=f30e85]:
        - generic [ref=f30e86]:
          - navigation "breadcrumb mb-2" [ref=f30e87]:
            - list [ref=f30e88]:
              - listitem [ref=f30e89]:
                - link "Home" [ref=f30e90] [cursor=pointer]:
                  - /url: /
              - listitem [ref=f30e91]: / Login Page
          - heading "Test Login page for Automation Testing Practice" [level=1] [ref=f30e92]
          - generic [ref=f30e94]:
            - paragraph [ref=f30e95]: This Test Login page is designed for automation testing practice. Test various positive and negative login scenarios in a testing environment.
            - paragraph [ref=f30e96]: You can use this login page for practicing with Selenium or other tools like Playwright, Cypress, etc.
            - paragraph [ref=f30e97]:
              - text: Register
              - link "here" [ref=f30e98] [cursor=pointer]:
                - /url: /register
              - text: "or Log in to the secure area with these credentials:"
            - list [ref=f30e99]:
              - listitem [ref=f30e100]: "Username: practice"
              - listitem [ref=f30e101]: "Password: SuperSecretPassword!"
            - paragraph
          - generic [ref=f30e106]:
            - generic [ref=f30e107]:
              - generic [ref=f30e108]:
                - generic [ref=f30e109]: Username
                - textbox "Username" [ref=f30e110]
              - generic [ref=f30e111]:
                - generic [ref=f30e112]: Password
                - textbox "Password" [active] [ref=f30e113]: niceSuperSecretPassword!
            - button "Login" [ref=f30e114] [cursor=pointer]
          - generic [ref=f30e115]:
            - heading "How to test the login page?" [level=2] [ref=f30e116]
            - generic [ref=f30e117]:
              - paragraph [ref=f30e118]:
                - text: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
                - link "Network Security" [ref=f30e119] [cursor=pointer]
              - paragraph [ref=f30e123]: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
              - heading "How Does Form-Based Authentication Work?" [level=3] [ref=f30e124]
              - paragraph [ref=f30e125]:
                - text: "Take a look at this diagram and review the different steps:"
                - link "UI testing tools" [ref=f30e126] [cursor=pointer]
              - img "How Does Form-Based Authentication Work" [ref=f30e130]
              - list [ref=f30e131]:
                - listitem [ref=f30e132]: "Step 1: A client requests access to a protected resource"
                - listitem [ref=f30e133]: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
                - listitem [ref=f30e134]: "Step 3: The client submits the login form to the server"
                - listitem [ref=f30e135]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
        - generic [ref=f30e137]:
          - heading "Login Automation Test Cases" [level=2] [ref=f30e138]
          - insertion [ref=f30e140]:
            - generic [ref=f30e143]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=f30e145]: Discover more
              - link "Test scenario examples" [ref=f30e146] [cursor=pointer]
              - link "Development Tools" [ref=f30e151] [cursor=pointer]
              - link "API testing services" [ref=f30e156] [cursor=pointer]
          - paragraph [ref=f30e161]:
            - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
            - link "WebdriverIO training" [ref=f30e162] [cursor=pointer]
          - paragraph [ref=f30e166]:
            - text: To perform these tests, please navigate to this
            - link "page" [ref=f30e167] [cursor=pointer]:
              - /url: /login
          - heading "Login Automation Test Cases" [level=2] [ref=f30e168]
          - 'heading "Test Case 1: Successful Login" [level=3] [ref=f30e169]'
          - list [ref=f30e170]:
            - listitem [ref=f30e171]: Launch the browser.
            - listitem [ref=f30e172]:
              - text: Navigate to the
              - link "login" [ref=f30e173] [cursor=pointer]:
                - /url: /login
              - text: page URL.
            - listitem [ref=f30e174]: Verify that the login page is displayed successfully.
            - listitem [ref=f30e175]:
              - text: Enter
              - strong [ref=f30e176]: Username
              - text: ":"
              - code [ref=f30e177]: practice
              - text: .
            - listitem [ref=f30e178]:
              - text: Enter
              - strong [ref=f30e179]: Password
              - text: ":"
              - code [ref=f30e180]: SuperSecretPassword!
              - text: .
            - listitem [ref=f30e181]:
              - text: Click the
              - strong [ref=f30e182]: Login
              - text: button.
            - listitem [ref=f30e183]:
              - text: Verify that the user is redirected to the
              - code [ref=f30e184]: /secure
              - text: page.
            - listitem [ref=f30e185]: Confirm the success message "You logged into a secure area!" is visible.
            - listitem [ref=f30e186]:
              - text: Verify that a
              - strong [ref=f30e187]: Logout
              - text: button is displayed.
          - separator [ref=f30e188]
          - 'heading "Test Case 2: Invalid Username" [level=3] [ref=f30e189]'
          - list [ref=f30e190]:
            - listitem [ref=f30e191]: Launch the browser.
            - listitem [ref=f30e192]: Navigate to the login page URL.
            - listitem [ref=f30e193]: Verify that the login page is displayed successfully.
            - listitem [ref=f30e194]:
              - text: Enter an incorrect
              - strong [ref=f30e195]: Username
              - text: (e.g.,
              - code [ref=f30e196]: wrongUser
              - text: ).
            - listitem [ref=f30e197]:
              - text: Enter
              - strong [ref=f30e198]: Password
              - text: ":"
              - code [ref=f30e199]: SuperSecretPassword!
              - text: .
            - listitem [ref=f30e200]:
              - text: Click the
              - strong [ref=f30e201]: Login
              - text: button.
            - listitem [ref=f30e202]: Verify that an error message "Invalid username." is displayed.
            - listitem [ref=f30e203]: Ensure the user remains on the login page.
          - separator [ref=f30e204]
          - 'heading "Test Case 3: Invalid Password" [level=3] [ref=f30e205]'
          - list [ref=f30e206]:
            - listitem [ref=f30e207]: Launch the browser.
            - listitem [ref=f30e208]: Navigate to the login page URL.
            - listitem [ref=f30e209]: Verify that the login page is displayed successfully.
            - listitem [ref=f30e210]:
              - text: Enter
              - strong [ref=f30e211]: Username
              - text: ":"
              - code [ref=f30e212]: practice
              - text: .
            - listitem [ref=f30e213]:
              - text: Enter an incorrect
              - strong [ref=f30e214]: Password
              - text: (e.g.,
              - code [ref=f30e215]: WrongPassword
              - text: ).
            - listitem [ref=f30e216]:
              - text: Click the
              - strong [ref=f30e217]: Login
              - text: button.
            - listitem [ref=f30e218]: Verify that an error message "Invalid password." is displayed.
            - listitem [ref=f30e219]: Ensure the user remains on the login page.
    - insertion [ref=f30e221]:
      - generic [ref=f30e224]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=f30e226]: Discover more
        - link "Dictionaries & Encyclopedias" [ref=f30e227] [cursor=pointer]
        - link "Language Resources" [ref=f30e232] [cursor=pointer]
        - link "Technical Reference" [ref=f30e237] [cursor=pointer]
        - link "Software testing certification" [ref=f30e242] [cursor=pointer]
        - link "Factory Automation" [ref=f30e247] [cursor=pointer]
        - link "Communications & Media Studies" [ref=f30e252] [cursor=pointer]
        - link "Test case management" [ref=f30e257] [cursor=pointer]
        - link "Login page templates" [ref=f30e262] [cursor=pointer]
  - insertion [ref=f30e268]:
    - generic [ref=f30e271]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f30e273]: Discover more
      - link "Software" [ref=f30e274] [cursor=pointer]
      - link "Software Utilities" [ref=f30e279] [cursor=pointer]
      - link "Software testing courses" [ref=f30e284] [cursor=pointer]
  - contentinfo [ref=f30e289]:
    - generic [ref=f30e294]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=f30e295]
      - paragraph [ref=f30e296]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=f30e297] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=f30e298] [cursor=pointer]
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
  21 |     expect(message).toBe(loginMessage.success);
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
> 32 |     expect(message).toBe(loginMessage.failed);
     |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  33 |   });
  34 | });
  35 | 
```