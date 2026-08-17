import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import logger from "../utils/logger";
import loginMessage from "../../src/data/login-message.json";

export class Dashboard extends BasePage {

  readonly logoutBtn : Locator;

  constructor(page: Page) {
    super(page);
    this.logoutBtn = page.getByRole("link", { name: "Logout" });
  }

  async getMessage() {
    logger.info("Getting message from dashboard page");
    await this.waitForLoad()
    return await this.page.getByText(loginMessage.success);
  }
  async clicklogout(){
    await this.logoutBtn.click();
  }

}
