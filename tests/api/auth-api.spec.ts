import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../src/utils/api-helper';
import { ENDPOINTS} from '../../src/constants/endpoints';
import {NoteTypes} from '../../src/constants/api-enums'
import { JsonUtils } from '../../src/utils/json-reader';
import logger from '../../src/utils/logger';
test.describe('API Auth', () => {
  let api: ApiHelper;

  test.beforeEach(async ({ request }) => {
    api = new ApiHelper(request);
  });

  test('POST /login returns token', async () => {
    const response = await api.post(ENDPOINTS.AUTH.LOGIN, {
      username: process.env.TEST_EMAIL,
      password: process.env.TEST_PASSWORD,
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('token');
  });

  test('POST /notes return message',async () => {
    const jsonData = JsonUtils.read('/src/data/data-api.notes.json')
    logger.info(jsonData);
    const response = await api.post(ENDPOINTS.NOTES.CREATE, {
        title:'hel',
        description:"Test description",
        category:NoteTypes.HOME
    })
  })
});