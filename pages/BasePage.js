/**
 * Base Page Object Model class
 * Provides common functionality for all page objects
 */
class BasePage {
    constructor(page) {
        this.page = page;
    }

    /**
     * Navigate to a URL
     * @param {string} url - The URL to navigate to
     */
    async navigateTo(url) {
        await this.page.goto(url);
    }

    /**
     * Wait for page to load
     */
    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Get page title
     * @returns {string} Page title
     */
    async getTitle() {
        return await this.page.title();
    }

    /**
     * Take screenshot
     * @param {string} name - Screenshot name
     */
    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

    /**
     * Wait for element to be visible
     * @param {Locator} locator - Playwright locator
     */
    async waitForElement(locator) {
        await locator.waitFor({ state: 'visible' });
    }

    /**
     * Click element safely
     * @param {Locator} locator - Playwright locator
     */
    async clickElement(locator) {
        await this.waitForElement(locator);
        await locator.click();
    }

    /**
     * Fill input field
     * @param {Locator} locator - Playwright locator
     * @param {string} text - Text to fill
     */
    async fillInput(locator, text) {
        await this.waitForElement(locator);
        await locator.fill(text);
    }

    /**
     * Get element text
     * @param {Locator} locator - Playwright locator
     * @returns {string} Element text
     */
    async getText(locator) {
        await this.waitForElement(locator);
        return await locator.textContent();
    }
}

module.exports = BasePage;