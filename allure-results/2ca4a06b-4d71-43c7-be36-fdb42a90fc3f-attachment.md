# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke/smoke.login.spec.ts >> Smoke: Login >> @smoke Login with valid credentials
- Location: tests/smoke/smoke.login.spec.ts:11:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
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
> 10 |         await this.page.goto(path);
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  11 |     }
  12 | 
  13 |     async waitForLoad(){
  14 |         await this.page.waitForLoadState('networkidle');
  15 |     }
  16 | 
  17 |     async getTitle(){
  18 |         return await this.page.title();
  19 |     }
  20 | 
  21 | }
```