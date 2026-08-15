# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/login.spec.ts >> Login E2E >> should show error for invalid credentials
- Location: tests/e2e/login.spec.ts:11:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.alert-danger')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "API testing services" [ref=e5] [cursor=pointer]
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - insertion [ref=e33]:
      - generic [ref=e36]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e38]: Discover more
        - link "Download Secure Browsers" [ref=e39] [cursor=pointer]
        - link "Compare Developer Tools" [ref=e44] [cursor=pointer]
        - link "Download Reference Apps" [ref=e49] [cursor=pointer]
    - paragraph [ref=e55]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e56] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e59]:
      - generic [ref=e60]:
        - navigation "breadcrumb mb-2" [ref=e61]:
          - list [ref=e62]:
            - listitem [ref=e63]:
              - link "Home" [ref=e64] [cursor=pointer]:
                - /url: /
            - listitem [ref=e65]: / Login Page
        - heading "Test Login page for Automation Testing Practice" [level=1] [ref=e66]
        - generic [ref=e68]:
          - paragraph [ref=e69]: This Test Login page is designed for automation testing practice. Test various positive and negative login scenarios in a testing environment.
          - paragraph [ref=e70]:
            - text: You can use this login page for practicing with Selenium or other tools like Playwright, Cypress, etc.
            - link "Download Reference Apps" [ref=e71] [cursor=pointer]
          - paragraph [ref=e75]:
            - text: Register
            - link "here" [ref=e76] [cursor=pointer]:
              - /url: /register
            - text: "or Log in to the secure area with these credentials:"
          - list [ref=e77]:
            - listitem [ref=e78]: "Username: practice"
            - listitem [ref=e79]: "Password: SuperSecretPassword!"
          - paragraph
        - generic [ref=e84]:
          - generic [ref=e85]:
            - generic [ref=e86]:
              - generic [ref=e87]: Username
              - textbox "Username" [ref=e88]
            - generic [ref=e89]:
              - generic [ref=e90]: Password
              - textbox "Password" [active] [ref=e91]: wrongwrong
          - button "Login" [ref=e92] [cursor=pointer]
        - generic [ref=e93]:
          - heading "How to test the login page?" [level=2] [ref=e94]
          - generic [ref=e95]:
            - paragraph [ref=e96]:
              - text: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
              - link "Download Productivity Apps" [ref=e97] [cursor=pointer]
            - paragraph [ref=e101]: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
            - heading "How Does Form-Based Authentication Work?" [level=3] [ref=e102]
            - paragraph [ref=e103]: "Take a look at this diagram and review the different steps:"
            - img "How Does Form-Based Authentication Work" [ref=e104]
            - list [ref=e105]:
              - listitem [ref=e106]: "Step 1: A client requests access to a protected resource"
              - listitem [ref=e107]: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
              - listitem [ref=e108]: "Step 3: The client submits the login form to the server"
              - listitem [ref=e109]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
      - generic [ref=e111]:
        - heading "Login Automation Test Cases" [level=2] [ref=e112]
        - insertion [ref=e114]:
          - generic [ref=e117]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e119]: Discover more
            - link "Switch Broadband Providers" [ref=e120] [cursor=pointer]
            - link "Audit Cyber Security" [ref=e125] [cursor=pointer]
            - link "Automation testing examples" [ref=e130] [cursor=pointer]
        - paragraph [ref=e135]:
          - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
          - link "Playwright testing guide" [ref=e136] [cursor=pointer]
        - paragraph [ref=e140]:
          - text: To perform these tests, please navigate to this
          - link "page" [ref=e141] [cursor=pointer]:
            - /url: /login
        - heading "Login Automation Test Cases" [level=2] [ref=e142]
        - 'heading "Test Case 1: Successful Login" [level=3] [ref=e143]'
        - list [ref=e144]:
          - listitem [ref=e145]: Launch the browser.
          - listitem [ref=e146]:
            - text: Navigate to the
            - link "login" [ref=e147] [cursor=pointer]:
              - /url: /login
            - text: page URL.
          - listitem [ref=e148]: Verify that the login page is displayed successfully.
          - listitem [ref=e149]:
            - text: Enter
            - strong [ref=e150]: Username
            - text: ":"
            - code [ref=e151]: practice
            - text: .
          - listitem [ref=e152]:
            - text: Enter
            - strong [ref=e153]: Password
            - text: ":"
            - code [ref=e154]: SuperSecretPassword!
            - text: .
          - listitem [ref=e155]:
            - text: Click the
            - strong [ref=e156]: Login
            - text: button.
          - listitem [ref=e157]:
            - text: Verify that the user is redirected to the
            - code [ref=e158]: /secure
            - text: page.
          - listitem [ref=e159]: Confirm the success message "You logged into a secure area!" is visible.
          - listitem [ref=e160]:
            - text: Verify that a
            - strong [ref=e161]: Logout
            - text: button is displayed.
        - separator [ref=e162]
        - 'heading "Test Case 2: Invalid Username" [level=3] [ref=e163]'
        - list [ref=e164]:
          - listitem [ref=e165]: Launch the browser.
          - listitem [ref=e166]: Navigate to the login page URL.
          - listitem [ref=e167]: Verify that the login page is displayed successfully.
          - listitem [ref=e168]:
            - text: Enter an incorrect
            - strong [ref=e169]: Username
            - text: (e.g.,
            - code [ref=e170]: wrongUser
            - text: ).
          - listitem [ref=e171]:
            - text: Enter
            - strong [ref=e172]: Password
            - text: ":"
            - code [ref=e173]: SuperSecretPassword!
            - text: .
          - listitem [ref=e174]:
            - text: Click the
            - strong [ref=e175]: Login
            - text: button.
          - listitem [ref=e176]: Verify that an error message "Invalid username." is displayed.
          - listitem [ref=e177]: Ensure the user remains on the login page.
        - separator [ref=e178]
        - 'heading "Test Case 3: Invalid Password" [level=3] [ref=e179]'
        - list [ref=e180]:
          - listitem [ref=e181]: Launch the browser.
          - listitem [ref=e182]: Navigate to the login page URL.
          - listitem [ref=e183]: Verify that the login page is displayed successfully.
          - listitem [ref=e184]:
            - text: Enter
            - strong [ref=e185]: Username
            - text: ":"
            - code [ref=e186]: practice
            - text: .
          - listitem [ref=e187]:
            - text: Enter an incorrect
            - strong [ref=e188]: Password
            - text: (e.g.,
            - code [ref=e189]: WrongPassword
            - text: ).
          - listitem [ref=e190]:
            - text: Click the
            - strong [ref=e191]: Login
            - text: button.
          - listitem [ref=e192]: Verify that an error message "Invalid password." is displayed.
          - listitem [ref=e193]: Ensure the user remains on the login page.
  - insertion [ref=e195]:
    - generic [ref=e198]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e200]: Discover more
      - link "Login testing guide" [ref=e201] [cursor=pointer]
      - link "Login page templates" [ref=e206] [cursor=pointer]
      - link "Optimize System Speed" [ref=e211] [cursor=pointer]
  - contentinfo [ref=e216]:
    - generic [ref=e221]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e222]
      - paragraph [ref=e223]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e224] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e225] [cursor=pointer]
```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { BasePage } from "./base.page";
  3  | 
  4  | export class LoginPage extends BasePage {
  5  |   //Locators
  6  |   readonly usernameInput: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly loginButton: Locator;
  9  |   readonly errorMessage: Locator;
  10 |   readonly successMessage: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     super(page);
  14 |     this.usernameInput = page.locator("#username");
  15 |     this.passwordInput = page.locator("#password");
  16 |     this.loginButton = page.locator('button[type="submit"]');
  17 |     this.errorMessage = page.locator(".alert-danger");
  18 |     this.successMessage = page.locator(".alert-success");
  19 |   }
  20 | 
  21 |   async goto() {
  22 |     await this.navigate("/login");
  23 |   }
  24 | 
  25 |   async fillUsername(username: string) {
  26 |     await this.usernameInput.fill(username);
  27 |   }
  28 | 
  29 |   async fillPassword(password:string) {
  30 |     await this.passwordInput.fill(password);
  31 |   }
  32 |   
  33 |   async clickLoginButton(){
  34 |     await this.loginButton.click();
  35 |   }
  36 | 
  37 |   async login(username: string, password: string) {
  38 |     this.fillUsername(username);
  39 |     this.fillPassword(password);
  40 |     this.clickLoginButton
  41 |     await this.waitForLoad();
  42 |   }
  43 | 
  44 |   async getErrorMessage() {
> 45 |     return await this.errorMessage.textContent();
     |                                    ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  46 |   }
  47 | 
  48 |   async getSuccessMessage() {
  49 |     return await this.successMessage.textContent();
  50 |   }
  51 | }
  52 | 
```