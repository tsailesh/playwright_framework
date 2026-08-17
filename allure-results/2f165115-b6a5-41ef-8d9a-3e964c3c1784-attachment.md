# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: database/database-test.spec.ts >> Database - Users >> User exists in DB after registration
- Location: tests/database/database-test.spec.ts:5:7

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test() from an async test.describe() block. Only sync ones are supported.
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { userExists } from "../../src/utils/db-helper";
  3  | 
  4  | test.describe("Database - Users", () => {
  5  |   test("User exists in DB after registration", async () => {
> 6  |     test("User exists in DB", async () => {
     |         ^ Error: Playwright Test did not expect test() to be called here.
  7  |       const exists = await userExists(process.env.TEST_USERNAME!);
  8  | 
  9  |       expect(exists).toBeTruthy();
  10 |     });
  11 |   });
  12 | });
  13 | 
```