const BasePage = require('./BasePage');

/**
 * Page Object for Test Automation Practice website
 */
class TestAutomationPracticePage extends BasePage {
    constructor(page) {
        super(page);
    }

    // Locators as getter methods
    get title() { return this.page.locator('.title'); }
    get nameInput() { return this.page.getByPlaceholder("Enter Name"); }
    get emailInput() { return this.page.locator("#email"); }
    get phoneInput() { return this.page.getByRole("textbox", { name: "phone" }); }
    get addressTextarea() { return this.page.locator("#textarea"); }
    get countrySelect() { return this.page.locator("#country"); }
    get colorsSelect() { return this.page.locator("#colors"); }
    get singleFileInput() { return this.page.locator("#singleFileInput"); }
    get sundayCheckbox() { return this.page.getByRole("checkbox", { name: "Sunday" }); }
    get startButton() { return this.page.getByRole("button", { name: "START" }); }
    get stopButton() { return this.page.getByRole("button", { name: "STOP" }); }
    get dropbtn() { return this.page.locator(".dropbtn"); }
    get dynamicWebTable() { return this.page.getByText("Dynamic Web Table"); }
    get staticWebTable() { return this.page.getByText("Static Web Table"); }
    get footerButton() { return this.page.getByTestId("footer-button"); }
    get productCard2() { return this.page.locator("xpath=//div[@data-testid='product-card-2']/h4"); }
    get fullNameInput() { return this.page.locator("css=input[placeholder='Enter your full name']"); }
    get textLocatorsList() { return this.page.locator("#text-locators ul li"); }
    get homeLink() { return this.page.locator("#PageList2 .widget-content ul li"); }
    get productTable() { return this.page.locator("#productTable tbody tr"); }

    /**
     * Navigate to the practice page
     */
    async navigateToPracticePage() {
        await this.navigateTo("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    }

    /**
     * Navigate to home page
     */
    async navigateToHome() {
        await this.navigateTo("https://testautomationpractice.blogspot.com/");
    }

    /**
     * Fill contact form
     * @param {Object} contactData - Contact information
     */
    async fillContactForm(contactData) {
        await this.fillInput(this.nameInput, contactData.name);
        await this.fillInput(this.emailInput, contactData.email);
        await this.fillInput(this.phoneInput, contactData.phone);
        await this.fillInput(this.addressTextarea, contactData.address);
    }

    /**
     * Select country
     * @param {string} country - Country name
     */
    async selectCountry(country) {
        await this.countrySelect.selectOption({ label: country });
    }

    /**
     * Upload file
     * @param {string} filePath - Path to file
     */
    async uploadFile(filePath) {
        await this.singleFileInput.setInputFiles(filePath);
    }

    /**
     * Check Sunday checkbox
     */
    async checkSunday() {
        await this.sundayCheckbox.check();
    }

    /**
     * Uncheck Sunday checkbox
     */
    async uncheckSunday() {
        const sundayLocator = this.page.locator("#sunday");
        await sundayLocator.uncheck();
    }

    /**
     * Click start button
     */
    async clickStart() {
        await this.startButton.click();
    }

    /**
     * Get stop button text
     * @returns {string} Stop button text
     */
    async getStopButtonText() {
        return await this.stopButton.innerText();
    }

    /**
     * Hover over dropdown button
     */
    async hoverDropdown() {
        await this.dropbtn.hover();
    }

    /**
     * Focus on colors select
     */
    async focusColorsSelect() {
        await this.colorsSelect.focus();
    }

    /**
     * Press backspace in textarea
     */
    async pressBackspaceInTextarea() {
        await this.addressTextarea.press("Backspace");
    }

    /**
     * Check smartphone checkbox in product table
     */
    async checkSmartphone() {
        const checkbox = this.page.locator(this.productTable, { hasText: "Smartphone" })
            .locator("css=input[type='checkbox']");
        await checkbox.check();
        return checkbox;
    }

    /**
     * Click home link
     */
    async clickHomeLink() {
        const homeLink = this.page.locator(this.homeLink, { hasText: "Home" });
        await homeLink.click();
    }
}

module.exports = TestAutomationPracticePage;