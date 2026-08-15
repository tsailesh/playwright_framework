# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/auth-api.spec.ts >> API Auth >> POST /login returns token
- Location: tests/api/auth-api.spec.ts:14:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ApiHelper } from '../../src/utils/api-helper';
  3  | import { ENDPOINTS} from '../../src/constants/endpoints';
  4  | import {NoteTypes} from '../../src/constants/api-enums'
  5  | import { JsonUtils } from '../../src/utils/json-reader';
  6  | import logger from '../../src/utils/logger';
  7  | test.describe('API Auth', () => {
  8  |   let api: ApiHelper;
  9  | 
  10 |   test.beforeEach(async ({ request }) => {
  11 |     api = new ApiHelper(request);
  12 |   });
  13 | 
  14 |   test('POST /login returns token', async () => {
  15 |     const response = await api.post(ENDPOINTS.AUTH.LOGIN, {
  16 |       username: process.env.TEST_EMAIL,
  17 |       password: process.env.TEST_PASSWORD,
  18 |     });
> 19 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  20 |     const data = await response.json();
  21 |     expect(data).toHaveProperty('token');
  22 |   });
  23 | 
  24 |   test('POST /notes return message',async () => {
  25 |     const jsonData = JsonUtils.read('/src/data/data-api.notes.json')
  26 |     logger.info(jsonData);
  27 |     const response = await api.post(ENDPOINTS.NOTES.CREATE, {
  28 |         title:'hel',
  29 |         description:"Test description",
  30 |         category:NoteTypes.HOME
  31 |     })
  32 |   })
  33 | });
```