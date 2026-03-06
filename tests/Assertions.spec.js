import { test, expect } from '../fixtures/customFixtures';
import TestAutomationPracticePage from '../pages/TestAutomationPracticePage';
import { testData } from '../test-data/testData';
import Logger from '../utils/Logger';

test.describe('Assertion Tests @regression', () => {
    let practicePage;

    test.beforeEach(async ({ page }) => {
        practicePage = new TestAutomationPracticePage(page);
        Logger.step('Navigating to practice page');
        await practicePage.navigateToPracticePage();
    });

    test("Verify page title", async () => {
        Logger.step('Verifying page title');
        await expect(practicePage.page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
    });

    test("Verify checkbox functionality", async () => {
        Logger.step('Testing checkbox check/uncheck');
        const checkbox = await practicePage.checkSmartphone();
        await expect(checkbox).toBeChecked();
    });

    test("Verify element visibility", async () => {
        Logger.step('Verifying element visibility');
        await expect(practicePage.page.getByText("Dynamic Web Table")
            .or(practicePage.page.getByText("Static Web Table"))
            .first()).toBeVisible();
    });

    test("Verify button is enabled", async () => {
        Logger.step('Verifying button is enabled');
        await expect(practicePage.footerButton).toBeEnabled();
    });

    test("Verify text content", async () => {
        Logger.step('Verifying text content');
        await expect(practicePage.page.locator("xpath=//div[@data-testid='product-card-2']/h4", { hasText: "Product B" })).toContainText("Product B");
    });

    test("Verify input attributes", async () => {
        Logger.step('Verifying input attributes');
        await expect(practicePage.page.locator("css=input[placeholder='Enter your full name']")).toHaveAttribute('type', 'text');
    });

    test("Verify list item count", async () => {
        Logger.step('Verifying list item count');
        await expect(practicePage.page.locator("#text-locators ul li")).toHaveCount(3);
    });

    test("Verify element text", async () => {
        Logger.step('Verifying element text');
        await expect(practicePage.page.locator(".title").first()).toHaveText("Automation Testing Practice");
    });

    test("Verify input value", async () => {
        Logger.step('Testing input value');
        const emailInput = practicePage.page.locator("#email");
        await emailInput.fill("Deepak Sharma");
        await expect(emailInput).toHaveValue("Deepak Sharma");
    });

    test("Verify URL after navigation", async () => {
        Logger.step('Testing URL navigation');
        await practicePage.clickHomeLink();
        await expect(practicePage.page).toHaveURL("https://testautomationpractice.blogspot.com/");
    });
});