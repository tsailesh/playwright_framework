import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import logger from "../utils/logger";
import loginMessage from "../../src/data/login-message.json"

export class LoginPage extends BasePage {
  //Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.getByRole('button', { name: 'Login' })
  }

  async goto() {
    await this.navigate("/login");
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password:string) {
    await this.passwordInput.fill(password);
  }
  
  async clickLoginButton(){
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    logger.info(`Filling username ${username}`)
    await this.fillUsername(username);
    logger.info(`Filling password ${password}`)
    await this.fillPassword(password);
    logger.info("Clicking login button")
    await this.clickLoginButton();
    await this.waitForLoad();
  }

  async getMessage() {
    logger.info("Getting message from login page");
    await this.waitForLoad();
    return this.page.getByText(loginMessage.failed);
  }
}
