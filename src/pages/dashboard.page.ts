import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";


export class Dashboard extends BasePage{

    readonly welcomeMessage : Locator;

    constructor(page:Page){
        super(page);
        this.welcomeMessage = page.locator('h1');
    }

    async getWelcomeMessage(){
        return this.welcomeMessage.textContent();
    }
}