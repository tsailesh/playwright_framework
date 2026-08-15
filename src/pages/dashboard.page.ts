import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import logger from "../utils/logger";
import loginMessage from "../../src/data/login-message.json";

export class Dashboard extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async getMessage() {
    logger.info("Getting message from dashboard page");
    await this.waitForLoad
    return await this.page.getByText(loginMessage.success);
  }
}
