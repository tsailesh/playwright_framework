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
    - paragraph [ref=e34]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e35] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e36]:
      - insertion [ref=e38]:
        - generic [ref=e41]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e43]: Discover more
          - link "Login testing guide" [ref=e44] [cursor=pointer]
          - link "Playwright testing guide" [ref=e49] [cursor=pointer]
          - link "WebdriverIO training" [ref=e54] [cursor=pointer]
          - link "Scripting Languages" [ref=e59] [cursor=pointer]
          - link "Communications & Media Studies" [ref=e64] [cursor=pointer]
          - link "Dictionaries & Encyclopedias" [ref=e69] [cursor=pointer]
          - link "Test automation tools" [ref=e74] [cursor=pointer]
          - link "Test case templates" [ref=e79] [cursor=pointer]
      - generic [ref=e85]:
        - generic [ref=e86]:
          - navigation "breadcrumb mb-2" [ref=e87]:
            - list [ref=e88]:
              - listitem [ref=e89]:
                - link "Home" [ref=e90] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e91]: / Login Page
          - heading "Test Login page for Automation Testing Practice" [level=1] [ref=e92]
          - generic [ref=e94]:
            - paragraph [ref=e95]: This Test Login page is designed for automation testing practice. Test various positive and negative login scenarios in a testing environment.
            - paragraph [ref=e96]: You can use this login page for practicing with Selenium or other tools like Playwright, Cypress, etc.
            - paragraph [ref=e97]:
              - text: Register
              - link "here" [ref=e98] [cursor=pointer]:
                - /url: /register
              - text: "or Log in to the secure area with these credentials:"
            - list [ref=e99]:
              - listitem [ref=e100]: "Username: practice"
              - listitem [ref=e101]: "Password: SuperSecretPassword!"
            - paragraph
          - generic [ref=e106]:
            - generic [ref=e107]:
              - generic [ref=e108]:
                - generic [ref=e109]: Username
                - textbox "Username" [ref=e110]
              - generic [ref=e111]:
                - generic [ref=e112]: Password
                - textbox "Password" [active] [ref=e113]: wrongwrong
            - button "Login" [ref=e114] [cursor=pointer]
          - generic [ref=e115]:
            - heading "How to test the login page?" [level=2] [ref=e116]
            - generic [ref=e117]:
              - paragraph [ref=e118]:
                - text: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
                - link "Login page templates" [ref=e119] [cursor=pointer]
              - paragraph [ref=e123]: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
              - heading "How Does Form-Based Authentication Work?" [level=3] [ref=e124]
              - paragraph [ref=e125]:
                - text: "Take a look at this diagram and review the different steps:"
                - link "UI testing tools" [ref=e126] [cursor=pointer]
              - img "How Does Form-Based Authentication Work" [ref=e130]
              - list [ref=e131]:
                - listitem [ref=e132]: "Step 1: A client requests access to a protected resource"
                - listitem [ref=e133]: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
                - listitem [ref=e134]: "Step 3: The client submits the login form to the server"
                - listitem [ref=e135]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
        - generic [ref=e137]:
          - heading "Login Automation Test Cases" [level=2] [ref=e138]
          - insertion [ref=e140]:
            - generic [ref=e143]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e145]: Discover more
              - link "Network Security" [ref=e146] [cursor=pointer]
              - link "Software testing courses" [ref=e151] [cursor=pointer]
              - link "Factory Automation" [ref=e156] [cursor=pointer]
          - paragraph [ref=e161]:
            - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
            - link "Playwright testing guide" [ref=e162] [cursor=pointer]
          - paragraph [ref=e166]:
            - text: To perform these tests, please navigate to this
            - link "page" [ref=e167] [cursor=pointer]:
              - /url: /login
          - heading "Login Automation Test Cases" [level=2] [ref=e168]
          - 'heading "Test Case 1: Successful Login" [level=3] [ref=e169]'
          - list [ref=e170]:
            - listitem [ref=e171]: Launch the browser.
            - listitem [ref=e172]:
              - text: Navigate to the
              - link "login" [ref=e173] [cursor=pointer]:
                - /url: /login
              - text: page URL.
            - listitem [ref=e174]: Verify that the login page is displayed successfully.
            - listitem [ref=e175]:
              - text: Enter
              - strong [ref=e176]: Username
              - text: ":"
              - code [ref=e177]: practice
              - text: .
            - listitem [ref=e178]:
              - text: Enter
              - strong [ref=e179]: Password
              - text: ":"
              - code [ref=e180]: SuperSecretPassword!
              - text: .
            - listitem [ref=e181]:
              - text: Click the
              - strong [ref=e182]: Login
              - text: button.
            - listitem [ref=e183]:
              - text: Verify that the user is redirected to the
              - code [ref=e184]: /secure
              - text: page.
            - listitem [ref=e185]: Confirm the success message "You logged into a secure area!" is visible.
            - listitem [ref=e186]:
              - text: Verify that a
              - strong [ref=e187]: Logout
              - text: button is displayed.
          - separator [ref=e188]
          - 'heading "Test Case 2: Invalid Username" [level=3] [ref=e189]'
          - list [ref=e190]:
            - listitem [ref=e191]: Launch the browser.
            - listitem [ref=e192]: Navigate to the login page URL.
            - listitem [ref=e193]: Verify that the login page is displayed successfully.
            - listitem [ref=e194]:
              - text: Enter an incorrect
              - strong [ref=e195]: Username
              - text: (e.g.,
              - code [ref=e196]: wrongUser
              - text: ).
            - listitem [ref=e197]:
              - text: Enter
              - strong [ref=e198]: Password
              - text: ":"
              - code [ref=e199]: SuperSecretPassword!
              - text: .
            - listitem [ref=e200]:
              - text: Click the
              - strong [ref=e201]: Login
              - text: button.
            - listitem [ref=e202]: Verify that an error message "Invalid username." is displayed.
            - listitem [ref=e203]: Ensure the user remains on the login page.
          - separator [ref=e204]
          - 'heading "Test Case 3: Invalid Password" [level=3] [ref=e205]'
          - list [ref=e206]:
            - listitem [ref=e207]: Launch the browser.
            - listitem [ref=e208]: Navigate to the login page URL.
            - listitem [ref=e209]: Verify that the login page is displayed successfully.
            - listitem [ref=e210]:
              - text: Enter
              - strong [ref=e211]: Username
              - text: ":"
              - code [ref=e212]: practice
              - text: .
            - listitem [ref=e213]:
              - text: Enter an incorrect
              - strong [ref=e214]: Password
              - text: (e.g.,
              - code [ref=e215]: WrongPassword
              - text: ).
            - listitem [ref=e216]:
              - text: Click the
              - strong [ref=e217]: Login
              - text: button.
            - listitem [ref=e218]: Verify that an error message "Invalid password." is displayed.
            - listitem [ref=e219]: Ensure the user remains on the login page.
    - insertion [ref=e221]:
      - generic [ref=e224]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e226]: Discover more
        - link "Technical Reference" [ref=e227] [cursor=pointer]
        - link "Networking" [ref=e232] [cursor=pointer]
        - link "UI testing tools" [ref=e237] [cursor=pointer]
        - link "Internet & Telecom" [ref=e242] [cursor=pointer]
        - link "Language Resources" [ref=e247] [cursor=pointer]
        - link "Login page templates" [ref=e252] [cursor=pointer]
        - link "Email & Messaging" [ref=e257] [cursor=pointer]
        - link "Test case management" [ref=e262] [cursor=pointer]
  - insertion [ref=e268]:
    - generic [ref=e271]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e273]: Discover more
      - link "Software testing certification" [ref=e274] [cursor=pointer]
      - link "Software" [ref=e279] [cursor=pointer]
      - link "Software Utilities" [ref=e284] [cursor=pointer]
  - contentinfo [ref=e289]:
    - generic [ref=e294]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e295]
      - paragraph [ref=e296]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e297] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e298] [cursor=pointer]
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