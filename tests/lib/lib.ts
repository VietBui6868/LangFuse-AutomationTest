
import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';

export class lib {
    static async navigateTo(page: Page, url: string) {
        await page.goto(url);
        await page.waitForLoadState('domcontentloaded');
    }

    static async waitingForPageLoaded(page: Page) {
        await page.waitForLoadState('domcontentloaded');
    }

    static async waitForElementDisplay(page : Page, locator: string){
        await page.locator(locator).waitFor({state : 'visible'});
    }

    static async validatePageTitle(page: Page, title: string) {
        await expect(page.title()).toBe(title);
    }

    static async validateElementVisible(page: Page, locator: string) {
        await expect(page.locator(locator)).toBeVisible();
    }

    static async validateElementEnabled(page: Page, locator: string) {
        await expect(page.locator(locator)).toBeEnabled();
    }

    static async validateElementText(page: Page, locator: string, text: string) {
        await expect(page.locator(locator)).toHaveText(text);
    }

    static async fill(page: Page, locator: string, text: string) {
        await page.locator(locator).fill(text);
    }

    static async fillElementByLabel(page: Page, label: string, text: string) {
        await page.getByLabel(label).fill(text);
    }

    static async Type(page: Page, locator: string, text: string) {
        await page.locator(locator).type(text);
    }


    static async click(page: Page, locator: string) {
        await page.locator(locator).click();
    }

    static async clickByLabel(page: Page, label: string) {
        await page.getByLabel(label).click();
    }

    static async clickFilterButton(page: Page, locator: string) {
        await page.locator(locator).click();
        this.validateElementAddtribute(page, locator, 'aria-expanded', 'true');
        this.validateElementAddtribute(page, locator, 'data-state', 'true');
    }

    static async selectOption(page: Page, option: string) {
        const optionLocator = page.getByRole('option', { name: new RegExp(`^${option}$`) });
        await optionLocator.scrollIntoViewIfNeeded();
        await optionLocator.click();
    }

    static async numberOfElementsDisplayed(page: Page, locator: string) {
        return await page.locator(locator).count();
    }

    static async validateElementAddtribute(page: Page, locator: string, attribute: string, value: string) {
        await expect(page.locator(locator)).toHaveAttribute(attribute, value);
    }

    static async doesElementContainText(page: Page, locator: string, text: string) {
        const elementText = await page.locator(locator).textContent();
        return elementText!.includes(text);
    }

    static async elementTextContent(page : Page, locator: string){
        return await page.locator(locator).innerText();
    }
}