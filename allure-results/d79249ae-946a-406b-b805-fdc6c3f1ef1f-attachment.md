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
    - link "Software testing certification" [ref=e5] [cursor=pointer]
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
          - link "API testing services" [ref=e44] [cursor=pointer]
          - link "Network Security" [ref=e49] [cursor=pointer]
          - link "Automation testing examples" [ref=e54] [cursor=pointer]
          - link "Automation practice website" [ref=e59] [cursor=pointer]
          - link "Dictionaries & Encyclopedias" [ref=e64] [cursor=pointer]
          - link "Test case management" [ref=e69] [cursor=pointer]
          - link "Test automation tools" [ref=e74] [cursor=pointer]
          - link "Software testing courses" [ref=e79] [cursor=pointer]
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
            - paragraph [ref=e96]:
              - text: You can use this login page for practicing with Selenium or other tools like Playwright, Cypress, etc.
              - link "Computer Security" [ref=e97] [cursor=pointer]
            - paragraph [ref=e101]:
              - text: Register
              - link "here" [ref=e102] [cursor=pointer]:
                - /url: /register
              - text: "or Log in to the secure area with these credentials:"
            - list [ref=e103]:
              - listitem [ref=e104]: "Username: practice"
              - listitem [ref=e105]: "Password: SuperSecretPassword!"
            - paragraph
          - generic [ref=e110]:
            - generic [ref=e111]:
              - generic [ref=e112]:
                - generic [ref=e113]: Username
                - textbox "Username" [ref=e114]
              - generic [ref=e115]:
                - generic [ref=e116]: Password
                - textbox "Password" [active] [ref=e117]: wrongwrong
            - button "Login" [ref=e118] [cursor=pointer]
          - generic [ref=e119]:
            - heading "How to test the login page?" [level=2] [ref=e120]
            - generic [ref=e121]:
              - paragraph [ref=e122]:
                - text: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
                - link "Automation practice website" [ref=e123] [cursor=pointer]
              - paragraph [ref=e127]: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
              - heading "How Does Form-Based Authentication Work?" [level=3] [ref=e128]
              - paragraph [ref=e129]:
                - text: "Take a look at this diagram and review the different steps:"
                - link "WebdriverIO training" [ref=e130] [cursor=pointer]
              - img "How Does Form-Based Authentication Work" [ref=e134]
              - list [ref=e135]:
                - listitem [ref=e136]: "Step 1: A client requests access to a protected resource"
                - listitem [ref=e137]: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
                - listitem [ref=e138]: "Step 3: The client submits the login form to the server"
                - listitem [ref=e139]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
        - generic [ref=e141]:
          - heading "Login Automation Test Cases" [level=2] [ref=e142]
          - insertion [ref=e144]:
            - generic [ref=e147]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e149]: Discover more
              - link "Automation testing platform" [ref=e150] [cursor=pointer]
              - link "Web Browsers" [ref=e155] [cursor=pointer]
              - link "Language Resources" [ref=e160] [cursor=pointer]
          - paragraph [ref=e165]:
            - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
            - link "Scripting Languages" [ref=e166] [cursor=pointer]
          - paragraph [ref=e170]:
            - text: To perform these tests, please navigate to this
            - link "page" [ref=e171] [cursor=pointer]:
              - /url: /login
          - heading "Login Automation Test Cases" [level=2] [ref=e172]
          - 'heading "Test Case 1: Successful Login" [level=3] [ref=e173]'
          - list [ref=e174]:
            - listitem [ref=e175]: Launch the browser.
            - listitem [ref=e176]:
              - text: Navigate to the
              - link "login" [ref=e177] [cursor=pointer]:
                - /url: /login
              - text: page URL.
            - listitem [ref=e178]: Verify that the login page is displayed successfully.
            - listitem [ref=e179]:
              - text: Enter
              - strong [ref=e180]: Username
              - text: ":"
              - code [ref=e181]: practice
              - text: .
            - listitem [ref=e182]:
              - text: Enter
              - strong [ref=e183]: Password
              - text: ":"
              - code [ref=e184]: SuperSecretPassword!
              - text: .
            - listitem [ref=e185]:
              - text: Click the
              - strong [ref=e186]: Login
              - text: button.
            - listitem [ref=e187]:
              - text: Verify that the user is redirected to the
              - code [ref=e188]: /secure
              - text: page.
            - listitem [ref=e189]: Confirm the success message "You logged into a secure area!" is visible.
            - listitem [ref=e190]:
              - text: Verify that a
              - strong [ref=e191]: Logout
              - text: button is displayed.
          - separator [ref=e192]
          - 'heading "Test Case 2: Invalid Username" [level=3] [ref=e193]'
          - list [ref=e194]:
            - listitem [ref=e195]: Launch the browser.
            - listitem [ref=e196]: Navigate to the login page URL.
            - listitem [ref=e197]: Verify that the login page is displayed successfully.
            - listitem [ref=e198]:
              - text: Enter an incorrect
              - strong [ref=e199]: Username
              - text: (e.g.,
              - code [ref=e200]: wrongUser
              - text: ).
            - listitem [ref=e201]:
              - text: Enter
              - strong [ref=e202]: Password
              - text: ":"
              - code [ref=e203]: SuperSecretPassword!
              - text: .
            - listitem [ref=e204]:
              - text: Click the
              - strong [ref=e205]: Login
              - text: button.
            - listitem [ref=e206]: Verify that an error message "Invalid username." is displayed.
            - listitem [ref=e207]: Ensure the user remains on the login page.
          - separator [ref=e208]
          - 'heading "Test Case 3: Invalid Password" [level=3] [ref=e209]'
          - list [ref=e210]:
            - listitem [ref=e211]: Launch the browser.
            - listitem [ref=e212]: Navigate to the login page URL.
            - listitem [ref=e213]: Verify that the login page is displayed successfully.
            - listitem [ref=e214]:
              - text: Enter
              - strong [ref=e215]: Username
              - text: ":"
              - code [ref=e216]: practice
              - text: .
            - listitem [ref=e217]:
              - text: Enter an incorrect
              - strong [ref=e218]: Password
              - text: (e.g.,
              - code [ref=e219]: WrongPassword
              - text: ).
            - listitem [ref=e220]:
              - text: Click the
              - strong [ref=e221]: Login
              - text: button.
            - listitem [ref=e222]: Verify that an error message "Invalid password." is displayed.
            - listitem [ref=e223]: Ensure the user remains on the login page.
    - insertion [ref=e225]:
      - generic [ref=e228]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e230]: Discover more
        - link "Login testing guide" [ref=e231] [cursor=pointer]
        - link "Communications & Media Studies" [ref=e236] [cursor=pointer]
        - link "Networking" [ref=e241] [cursor=pointer]
        - link "Playwright testing guide" [ref=e246] [cursor=pointer]
        - link "Factory Automation" [ref=e251] [cursor=pointer]
        - link "Email & Messaging" [ref=e256] [cursor=pointer]
        - link "Software" [ref=e261] [cursor=pointer]
        - link "Technical Reference" [ref=e266] [cursor=pointer]
  - insertion [ref=e272]:
    - generic [ref=e275]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e277]: Discover more
      - link "Internet & Telecom" [ref=e278] [cursor=pointer]
      - link "Test case templates" [ref=e283] [cursor=pointer]
      - link "Software Utilities" [ref=e288] [cursor=pointer]
  - contentinfo [ref=e293]:
    - generic [ref=e298]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e299]
      - paragraph [ref=e300]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e301] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e302] [cursor=pointer]
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