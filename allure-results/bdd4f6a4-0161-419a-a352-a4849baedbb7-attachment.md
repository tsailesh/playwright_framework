# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/login.spec.ts >> Login E2E >> should login with valid credentials and see dashboard
- Location: tests/e2e/login.spec.ts:4:7

# Error details

```
Error: toContainText can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [active] [ref=f16e1]:
  - paragraph [ref=f16e3]:
    - link "PMP Practice" [ref=f16e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Best testing website" [ref=f16e5] [cursor=pointer]
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
          - link "Free mock exams" [ref=f16e49] [cursor=pointer]
          - link "Training & Certification" [ref=f16e54] [cursor=pointer]
          - link "Technical Reference" [ref=f16e59] [cursor=pointer]
          - link "Language Resources" [ref=f16e64] [cursor=pointer]
          - link "Computer Security" [ref=f16e69] [cursor=pointer]
          - link "Dictionaries & Encyclopedias" [ref=f16e74] [cursor=pointer]
          - link "Factory Automation" [ref=f16e79] [cursor=pointer]
          - link "Web Browsers" [ref=f16e84] [cursor=pointer]
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
        - iframe [ref=f16e104]:
          - generic [ref=f21e1]:
            - generic [ref=f21e3]:
              - link:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Cx97ekgiDar7tGMax88EPzYWf-ALpwcz6iAHapZqTsRa0rZS_oA4QASCVlJmjAWCNBKABqY-6oCjIAQKoAwHIA8kEqgSHAk_QKCthp2yvxX5-mnuNjlAS0__DaspV07et1vfeiE-VOPSfrdXoiKzi3C_2Ny4o0QMTdo2IZJK1j6CXc6FOFNEomKS0--Ij7yrdtZze2NJLJYdrM1oGYZoLq6ZNVhb0v2UJv2K_aQDlCLjt5KnpAkeLQWA399jShBUGz_m3hgJZ_sXD8Ta5LXbRtBVw7OQXRoroS-xH5ZNxv97yCTtbu3vOsHHBoHcAkCMvX9irjaLjm9PHzgB9jvxDmOgER8CJSZodRBrIsy7Rhwa596ZFO-yE4PXYg-cSVf3tMi4VYSt66FgylMztzQu2_cVhy0Yqa_W9MmM6FHfqdldF5cqYAE1HKOJlzLOSwASR2_uC4wWIBdjl6edZoAYCgAepx4qAA6gHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljRzq_M3qeWA2ABsQmAIhgoPo3FDYAKAZgLAcgLAaoNAk5QyA0B6g0TCM2EsMzep5YDFcbYPAIdzcIHL_ANAogOCdgTA9AVAcoWAgoA-BYBgBcBshcQGAEqCjI0MDYzMzU3NDNQBroXAjgBqhgXCQAAAAAABbtAEgoyNDA2MzM1NzQzGAGyGAkSAutoGAIiAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIvv6vzN6nlgMVxtg8Ah3NwgcvEAEYASAAEgI_5fD_BwE&num=1&cid=CAQSjQIAEQoqgYGH2Jzb2sK--PIXwM6TP0iHmjdgJgpqylVt-5-9-9ip-z7YQnvrLSWGrEUbZEB_IJgn26xHKv7_kB0f880zwDEEmW-txKtr1PyBuFyWEluKOAGZUAjM_BRda_ttSRnmzH_cGqxS9ojuFf1usRJHSXTAvu28PI-TgJruGQOET3tzvcDkhXtoJOET1QVps9KT5--vficZJ_Ox_2tn4ER5If_hN-WZ8KE_qUw7r2r3zi3_aElkixL2IelKmZXSpZa9gnxjA2NG-7sAmG48ja-2DMrVGvyz7xoHNUBmfmFFunjuC4mPB4T5YG0o_uvkMceJKv6IHW2h6qs_l08frwg9GETvYDaW34mKXBgB&sig=AOD64_0e2RZcQPO0QY6fv0qiZk_2Es069g&client=ca-pub-1056034821646296&rf=2&nb=2&adurl=https://samsungsmartlife.com/blogs/turning-remittance-into-opportunity-with-samsung-nepals-remit-ma-benefit-campaign%3Fgad_source%3D5%26gad_campaignid%3D24108495576%26gclid%3DEAIaIQobChMIvv6vzN6nlgMVxtg8Ah3NwgcvEAEYASAAEgI_5fD_BwE
              - generic [ref=f21e4] [cursor=pointer]
              - button [ref=f21e9] [cursor=pointer]
            - iframe
  - contentinfo [ref=f16e105]:
    - generic [ref=f16e110]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=f16e111]
      - paragraph [ref=f16e112]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=f16e113] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=f16e114] [cursor=pointer]
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
     |                                                ^ Error: toContainText can be only used with Locator object, was called with undefined
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