import { BasePage } from "./base.page"
import { Page, Locator } from "@playwright/test";


export class LogoutPage extends BasePage{

//Locators
readonly logout : Locator;

constructor(page:Page) {
    super(page);
    this.logout= page.getByRole("link",{name:"Logout"})
}

async clicklogout(){
    await this.logout.click();
}
    
}