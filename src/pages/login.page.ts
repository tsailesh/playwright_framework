import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  //Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator(".alert-danger");
    this.successMessage = page.locator(".alert-success");
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
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLoginButton
    await this.waitForLoad();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}
