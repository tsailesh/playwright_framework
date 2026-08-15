# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/login.spec.ts >> Login E2E >> should login with valid credentials and see dashboard
- Location: tests/e2e/login.spec.ts:4:7

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

```
Error: page.waitForLoadState: Test ended.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Software testing courses" [ref=e5] [cursor=pointer]
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
          - link "Scripting Languages" [ref=e44] [cursor=pointer]
          - link "Computer Security" [ref=e49] [cursor=pointer]
          - link "Software" [ref=e54] [cursor=pointer]
          - link "API testing services" [ref=e59] [cursor=pointer]
          - link "Web Browsers" [ref=e64] [cursor=pointer]
          - link "Test case templates" [ref=e69] [cursor=pointer]
          - link "Software testing courses" [ref=e74] [cursor=pointer]
          - link "Network Security" [ref=e79] [cursor=pointer]
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
                - textbox "Password" [ref=e113]
            - button "Login" [ref=e114] [cursor=pointer]
          - generic [ref=e115]:
            - heading "How to test the login page?" [level=2] [ref=e116]
            - generic [ref=e117]:
              - paragraph [ref=e118]:
                - text: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
                - link "Login testing guide" [ref=e119] [cursor=pointer]
              - generic:
                - insertion:
                  - iframe [ref=e124]:
                    
              - paragraph [ref=e125]: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
              - heading "How Does Form-Based Authentication Work?" [level=3] [ref=e126]
              - paragraph [ref=e127]:
                - text: "Take a look at this diagram and review the different steps:"
                - link "Automation practice website" [ref=e128] [cursor=pointer]
              - img "How Does Form-Based Authentication Work" [ref=e132]
              - list [ref=e133]:
                - listitem [ref=e134]: "Step 1: A client requests access to a protected resource"
                - listitem [ref=e135]: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
                - listitem [ref=e136]: "Step 3: The client submits the login form to the server"
                - listitem [ref=e137]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
        - generic [ref=e139]:
          - heading "Login Automation Test Cases" [level=2] [ref=e140]
          - insertion [ref=e142]:
            - generic [ref=e145]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e147]: Discover more
              - link "Login page templates" [ref=e148] [cursor=pointer]
              - link "Test case management" [ref=e153] [cursor=pointer]
              - link "Test scenario examples" [ref=e158] [cursor=pointer]
          - paragraph [ref=e163]:
            - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
            - link "WebdriverIO training" [ref=e164] [cursor=pointer]
          - paragraph [ref=e168]:
            - text: To perform these tests, please navigate to this
            - link "page" [ref=e169] [cursor=pointer]:
              - /url: /login
          - heading "Login Automation Test Cases" [level=2] [ref=e170]
          - 'heading "Test Case 1: Successful Login" [level=3] [ref=e171]'
          - list [ref=e172]:
            - listitem [ref=e173]: Launch the browser.
            - listitem [ref=e174]:
              - text: Navigate to the
              - link "login" [ref=e175] [cursor=pointer]:
                - /url: /login
              - text: page URL.
            - listitem [ref=e176]: Verify that the login page is displayed successfully.
            - listitem [ref=e177]:
              - text: Enter
              - strong [ref=e178]: Username
              - text: ":"
              - code [ref=e179]: practice
              - text: .
            - listitem [ref=e180]:
              - text: Enter
              - strong [ref=e181]: Password
              - text: ":"
              - code [ref=e182]: SuperSecretPassword!
              - text: .
            - listitem [ref=e183]:
              - text: Click the
              - strong [ref=e184]: Login
              - text: button.
            - listitem [ref=e185]:
              - text: Verify that the user is redirected to the
              - code [ref=e186]: /secure
              - text: page.
            - listitem [ref=e187]: Confirm the success message "You logged into a secure area!" is visible.
            - listitem [ref=e188]:
              - text: Verify that a
              - strong [ref=e189]: Logout
              - text: button is displayed.
          - separator [ref=e190]
          - 'heading "Test Case 2: Invalid Username" [level=3] [ref=e191]'
          - list [ref=e192]:
            - listitem [ref=e193]: Launch the browser.
            - listitem [ref=e194]: Navigate to the login page URL.
            - listitem [ref=e195]: Verify that the login page is displayed successfully.
            - listitem [ref=e196]:
              - text: Enter an incorrect
              - strong [ref=e197]: Username
              - text: (e.g.,
              - code [ref=e198]: wrongUser
              - text: ).
            - listitem [ref=e199]:
              - text: Enter
              - strong [ref=e200]: Password
              - text: ":"
              - code [ref=e201]: SuperSecretPassword!
              - text: .
            - listitem [ref=e202]:
              - text: Click the
              - strong [ref=e203]: Login
              - text: button.
            - listitem [ref=e204]: Verify that an error message "Invalid username." is displayed.
            - listitem [ref=e205]: Ensure the user remains on the login page.
          - separator [ref=e206]
          - 'heading "Test Case 3: Invalid Password" [level=3] [ref=e207]'
          - list [ref=e208]:
            - listitem [ref=e209]: Launch the browser.
            - listitem [ref=e210]: Navigate to the login page URL.
            - listitem [ref=e211]: Verify that the login page is displayed successfully.
            - listitem [ref=e212]:
              - text: Enter
              - strong [ref=e213]: Username
              - text: ":"
              - code [ref=e214]: practice
              - text: .
            - listitem [ref=e215]:
              - text: Enter an incorrect
              - strong [ref=e216]: Password
              - text: (e.g.,
              - code [ref=e217]: WrongPassword
              - text: ).
            - listitem [ref=e218]:
              - text: Click the
              - strong [ref=e219]: Login
              - text: button.
            - listitem [ref=e220]: Verify that an error message "Invalid password." is displayed.
            - listitem [ref=e221]: Ensure the user remains on the login page.
    - insertion [ref=e223]:
      - generic [ref=e226]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e228]: Discover more
        - link "UI testing tools" [ref=e229] [cursor=pointer]
        - link "Automation practice website" [ref=e234] [cursor=pointer]
        - link "Software Utilities" [ref=e239] [cursor=pointer]
        - link "Development Tools" [ref=e244] [cursor=pointer]
        - link "Test automation tools" [ref=e249] [cursor=pointer]
        - link "Automation testing examples" [ref=e254] [cursor=pointer]
        - link "Networking" [ref=e259] [cursor=pointer]
        - link "Dictionaries & Encyclopedias" [ref=e264] [cursor=pointer]
  - insertion [ref=e270]:
    - iframe [ref=e272]:
      
  - contentinfo [ref=e273]:
    - generic [ref=e278]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e279]
      - paragraph [ref=e280]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e281] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e282] [cursor=pointer]
```

# Test source

```ts
  1  | import {Page} from "@playwright/test";
  2  | 
  3  | export class BasePage{
  4  |     protected page: Page;
  5  |     constructor(page:Page) {
  6  |         this.page = page;
  7  |     }
  8  | 
  9  |     async navigate(path:string){
  10 |         await this.page.goto(path);
  11 |     }
  12 | 
  13 |     async waitForLoad(){
> 14 |         await this.page.waitForLoadState('networkidle');
     |                         ^ Error: page.waitForLoadState: Test ended.
  15 |     }
  16 | 
  17 |     async getTitle(){
  18 |         return await this.page.title();
  19 |     }
  20 | 
  21 | }
```