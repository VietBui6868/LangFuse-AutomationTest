import { Page } from "@playwright/test"
import { lib } from "../lib/lib"
import { login_ob } from "../pageObjects/login_ob";

const loginLocators = new login_ob()

export const loginAction = {
    async navigateToLoginPage(page: Page, url: string){
        await lib.navigateTo(page, url)
    },
    async validateloginPageTitle(page: Page, title: string){
        await lib.validatePageTitle(page, title)
    },
    async Login(email: string, password: string, page : Page)
    {
       //Enter email
       await lib.fillElementByLabel(page, loginLocators.emailTextBox, email);
       //Enter password
       await lib.fillElementByLabel(page, loginLocators.passwordTextBox, password);
       //Click Sign in button
       await lib.click(page, loginLocators.signInButton);
    }
}