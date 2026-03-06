import { test, expect } from '../fixtures/customFixtures';
import TestAutomationPracticePage from '../pages/TestAutomationPracticePage';
import TestDataGenerator from '../utils/TestDataGenerator';
import CommonHelpers from '../helpers/CommonHelpers';
import Logger from '../utils/Logger';

test.describe('Basic Actions Tests @smoke', () => {
    let practicePage;

    test.beforeEach(async ({ page }) => {
        practicePage = new TestAutomationPracticePage(page);
        Logger.step('Navigating to home page');
        await practicePage.navigateToHome();
        await expect(page).toHaveTitle("Automation Testing Practice");
    });

    test("Test checkbox actions", async () => {
        Logger.step('Testing checkbox check');
        await practicePage.checkSunday();
        await expect(practicePage.sundayCheckbox).toBeChecked();

        Logger.step('Testing checkbox uncheck');
        await practicePage.uncheckSunday();
        await expect(practicePage.page.locator("#sunday")).not.toBeChecked();
    });

    test("Test button click and text retrieval", async () => {
        Logger.step('Testing button click');
        await practicePage.clickStart();
        const stopButtonText = await practicePage.getStopButtonText();
        Logger.info(`Stop button text: ${stopButtonText}`);
        expect(stopButtonText).toBeDefined();
    });

    test("Test hover action", async () => {
        Logger.step('Testing hover action');
        await practicePage.hoverDropdown();
        // Add assertion for dropdown visibility if needed
    });

    test("Test form filling", async () => {
        Logger.step('Testing form filling with generated data');
        const contactData = TestDataGenerator.generateContactData();
        await practicePage.fillContactForm(contactData);

        // Verify filled values
        await expect(practicePage.nameInput).toHaveValue(contactData.name);
        await expect(practicePage.emailInput).toHaveValue(contactData.email);
        await expect(practicePage.phoneInput).toHaveValue(contactData.phone);
        await expect(practicePage.addressTextarea).toHaveValue(contactData.address);
    });

    test("Test focus action", async () => {
        Logger.step('Testing focus action');
        await practicePage.focusColorsSelect();
        // Verify focus by checking if element is focused
        await expect(practicePage.colorsSelect).toBeFocused();
    });

    test("Test keyboard actions", async () => {
        Logger.step('Testing keyboard press');
        await practicePage.fillInput(practicePage.addressTextarea, "Test text");
        await practicePage.pressBackspaceInTextarea();
        // Verify text was modified
    });

    test("Test file upload", async () => {
        Logger.step('Testing file upload');
        const filePath = CommonHelpers.getTestFilePath("sample.jpg");
        await practicePage.uploadFile(filePath);
        // Add assertion for file upload success if possible
    });

    test("Test dropdown selection", async () => {
        Logger.step('Testing dropdown selection');
        await practicePage.selectCountry("Japan");
        await expect(practicePage.countrySelect).toHaveValue("Japan");
    });
});