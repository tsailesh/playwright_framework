import { test, expect } from "@playwright/test";
import { ApiHelper } from "../../src/utils/api-helper";
import { ENDPOINTS } from "../../src/constants/endpoints";
import { NoteTypes } from "../../src/constants/api-enums";
import { JsonUtils } from "../../src/utils/json-reader";
import logger from "../../src/utils/logger";
import {HttpStatus} from '../../src/data/apiStatus.enum'
import { Http } from "winston/lib/winston/transports";

interface NoteData {
  notes_info: {
    title: string;
    description: string;
  }[];
}

test.describe("API Auth", () => {
  let api: ApiHelper;

  test.beforeEach(async ({ request }) => {
    api = new ApiHelper(request);
  });

  test("POST /login return success", async () => {
    const email = process.env.API_USERNAME;
    const password = process.env.API_PASSWORD;
    if (!email || !password) {
      throw new Error("API_USERNAME or API_PASSWORD is not defined");
    }
    const message = process.env.API_LOGIN_SUCCESS_MESSAGE;

    const response = await api.post(
      ENDPOINTS.AUTH.LOGIN,
      {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      undefined,
      {
        email,
        password,
      },
    );
    logger.info(JSON.stringify(response));
    expect(response.status()).toBe(HttpStatus.OK);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
      success: true,
      status: HttpStatus.OK,
      message,
    });
  });

  test("POST /notes return message", async () => {
    const jsonData = JsonUtils.read<NoteData>("src/data/notes-data-api.json");

    const title = JsonUtils.get<string>(jsonData, "notes_info.0.title");

    const description = JsonUtils.get<string>(
      jsonData,
      "notes_info.0.description",
    );
    const token = process.env.API_TOKEN;
    if(!token) {
      throw new Error("No API Token is found");
    }

    if (!title || !description) {
      throw new Error("Title or description not found in test data");
    }

    logger.info(`Title: ${title}`);
    logger.info(`Description: ${description}`);

    const response = await api.post(ENDPOINTS.NOTES.CREATE, {
      accept: "application/json",
      "x-auth-token":token,
        "Content-Type": "application/x-www-form-urlencoded",
    },undefined,{
      title,description,category: NoteTypes.PERSONAL,
    });

    const responseBody = await response.json();

    logger.info(`Response: ${JSON.stringify(responseBody)}`);

    logger.info(`Status: ${response.status()}`);

    const message = process.env.API_NOTE_CREATED_MESSAGE;

    if (!message) {
      throw new Error("API_NOTE_CREATED_MESSAGE is not defined");
    }

    expect(response.status()).toBe(HttpStatus.OK);

    expect(responseBody).toMatchObject({
      success: true,
      status: HttpStatus.OK,
      message,
    });
  });
});
