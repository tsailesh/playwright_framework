# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke/smoke.login.spec.ts >>  @smoke Smoke: Login Test >> Login with valid credentials
- Location: tests/smoke/smoke.login.spec.ts:12:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#flash')
  - operation was aborted: Test timeout of 30000ms exceeded.

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
          - link "Automation testing examples" [ref=e44] [cursor=pointer]
          - link "Computer Security" [ref=e49] [cursor=pointer]
          - link "Automation testing platform" [ref=e54] [cursor=pointer]
          - link "Software testing courses" [ref=e59] [cursor=pointer]
          - link "Development Tools" [ref=e64] [cursor=pointer]
          - link "Test scenario examples" [ref=e69] [cursor=pointer]
          - link "Language Resources" [ref=e74] [cursor=pointer]
          - link "Software" [ref=e79] [cursor=pointer]
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
              - link "Network Security" [ref=e97] [cursor=pointer]
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
                - textbox "Password" [active] [ref=e117]: practiceSuperSecretPassword!
            - button "Login" [ref=e118] [cursor=pointer]
          - generic [ref=e119]:
            - heading "How to test the login page?" [level=2] [ref=e120]
            - generic [ref=e121]:
              - paragraph [ref=e122]:
                - text: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
                - link "UI testing tools" [ref=e123] [cursor=pointer]
              - insertion [ref=e128]:
                - iframe [ref=e130]:
                  - generic [ref=f11e3]:
                    - button [ref=f11e4]
                    - generic [ref=f11e7]:
                      - generic [ref=f11e9]:
                        - generic [ref=f11e13]:
                          - button "Play video" [ref=f11e17] [cursor=pointer]
                          - button "Unmute video" [ref=f11e23] [cursor=pointer]
                        - generic [ref=f11e30]:
                          - button "Learn more" [ref=f11e32] [cursor=pointer]
                          - button "Replay" [ref=f11e34] [cursor=pointer]
                      - button "Learn more" [ref=f11e43] [cursor=pointer]
              - paragraph [ref=e131]: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
              - heading "How Does Form-Based Authentication Work?" [level=3] [ref=e132]
              - paragraph [ref=e133]:
                - text: "Take a look at this diagram and review the different steps:"
                - link "Development Tools" [ref=e134] [cursor=pointer]
              - img "How Does Form-Based Authentication Work" [ref=e138]
              - list [ref=e139]:
                - listitem [ref=e140]: "Step 1: A client requests access to a protected resource"
                - listitem [ref=e141]: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
                - listitem [ref=e142]: "Step 3: The client submits the login form to the server"
                - listitem [ref=e143]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
        - generic [ref=e145]:
          - heading "Login Automation Test Cases" [level=2] [ref=e146]
          - insertion [ref=e148]:
            - generic [ref=e151]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e153]: Discover more
              - link "Login page templates" [ref=e154] [cursor=pointer]
              - link "Email & Messaging" [ref=e159] [cursor=pointer]
              - link "Test case templates" [ref=e164] [cursor=pointer]
          - paragraph [ref=e169]:
            - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
            - link "Scripting Languages" [ref=e170] [cursor=pointer]
          - paragraph [ref=e174]:
            - text: To perform these tests, please navigate to this
            - link "page" [ref=e175] [cursor=pointer]:
              - /url: /login
          - heading "Login Automation Test Cases" [level=2] [ref=e176]
          - 'heading "Test Case 1: Successful Login" [level=3] [ref=e177]'
          - list [ref=e178]:
            - listitem [ref=e179]: Launch the browser.
            - listitem [ref=e180]:
              - text: Navigate to the
              - link "login" [ref=e181] [cursor=pointer]:
                - /url: /login
              - text: page URL.
            - listitem [ref=e182]: Verify that the login page is displayed successfully.
            - listitem [ref=e183]:
              - text: Enter
              - strong [ref=e184]: Username
              - text: ":"
              - code [ref=e185]: practice
              - text: .
            - listitem [ref=e186]:
              - text: Enter
              - strong [ref=e187]: Password
              - text: ":"
              - code [ref=e188]: SuperSecretPassword!
              - text: .
            - listitem [ref=e189]:
              - text: Click the
              - strong [ref=e190]: Login
              - text: button.
            - listitem [ref=e191]:
              - text: Verify that the user is redirected to the
              - code [ref=e192]: /secure
              - text: page.
            - listitem [ref=e193]: Confirm the success message "You logged into a secure area!" is visible.
            - listitem [ref=e194]:
              - text: Verify that a
              - strong [ref=e195]: Logout
              - text: button is displayed.
          - separator [ref=e196]
          - 'heading "Test Case 2: Invalid Username" [level=3] [ref=e197]'
          - list [ref=e198]:
            - listitem [ref=e199]: Launch the browser.
            - listitem [ref=e200]: Navigate to the login page URL.
            - listitem [ref=e201]: Verify that the login page is displayed successfully.
            - listitem [ref=e202]:
              - text: Enter an incorrect
              - strong [ref=e203]: Username
              - text: (e.g.,
              - code [ref=e204]: wrongUser
              - text: ).
            - listitem [ref=e205]:
              - text: Enter
              - strong [ref=e206]: Password
              - text: ":"
              - code [ref=e207]: SuperSecretPassword!
              - text: .
            - listitem [ref=e208]:
              - text: Click the
              - strong [ref=e209]: Login
              - text: button.
            - listitem [ref=e210]: Verify that an error message "Invalid username." is displayed.
            - listitem [ref=e211]: Ensure the user remains on the login page.
          - separator [ref=e212]
          - 'heading "Test Case 3: Invalid Password" [level=3] [ref=e213]'
          - list [ref=e214]:
            - listitem [ref=e215]: Launch the browser.
            - listitem [ref=e216]: Navigate to the login page URL.
            - listitem [ref=e217]: Verify that the login page is displayed successfully.
            - listitem [ref=e218]:
              - text: Enter
              - strong [ref=e219]: Username
              - text: ":"
              - code [ref=e220]: practice
              - text: .
            - listitem [ref=e221]:
              - text: Enter an incorrect
              - strong [ref=e222]: Password
              - text: (e.g.,
              - code [ref=e223]: WrongPassword
              - text: ).
            - listitem [ref=e224]:
              - text: Click the
              - strong [ref=e225]: Login
              - text: button.
            - listitem [ref=e226]: Verify that an error message "Invalid password." is displayed.
            - listitem [ref=e227]: Ensure the user remains on the login page.
    - insertion [ref=e229]:
      - generic [ref=e232]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e234]: Discover more
        - link "API testing services" [ref=e235] [cursor=pointer]
        - link "Playwright testing guide" [ref=e240] [cursor=pointer]
        - link "Login testing guide" [ref=e245] [cursor=pointer]
        - link "Software Utilities" [ref=e250] [cursor=pointer]
        - link "Dictionaries & Encyclopedias" [ref=e255] [cursor=pointer]
        - link "Network Security" [ref=e260] [cursor=pointer]
        - link "Automation practice website" [ref=e265] [cursor=pointer]
        - link "WebdriverIO training" [ref=e270] [cursor=pointer]
  - insertion [ref=e276]:
    - generic [ref=e279]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e281]: Discover more
      - link "Communications & Media Studies" [ref=e282] [cursor=pointer]
      - link "Test automation tools" [ref=e287] [cursor=pointer]
      - link "Factory Automation" [ref=e292] [cursor=pointer]
  - contentinfo [ref=e297]:
    - generic [ref=e302]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e303]
      - paragraph [ref=e304]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e305] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e306] [cursor=pointer]
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./base.page";
  3  | 
  4  | 
  5  | export class Dashboard extends BasePage{
  6  | 
  7  |     readonly welcomeMessage : Locator;
  8  | 
  9  |     constructor(page:Page){
  10 |         super(page);
  11 |         this.welcomeMessage = page.locator('#flash')
  12 |     }
  13 | 
  14 |     async getWelcomeMessage(){
> 15 |         return this.welcomeMessage.textContent();
     |                                    ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  16 |     }
  17 | }
```