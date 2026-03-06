const { test: base, expect } = require('@playwright/test');
const TestAutomationPracticePage = require('../pages/TestAutomationPracticePage');

/**
 * Custom test fixtures
 */
const test = base.extend({
    /**
     * Authenticated page fixture
     */
    authenticatedPage: async ({ page }, use) => {
        // Add authentication logic here if needed
        await use(page);
    },

    /**
     * Test automation practice page fixture
     */
    practicePage: async ({ page }, use) => {
        const practicePage = new TestAutomationPracticePage(page);
        await use(practicePage);
    },

    /**
     * Browser context with custom settings
     */
    context: async ({ browser }, use) => {
        const context = await browser.newContext({
            viewport: { width: 1280, height: 720 },
            recordVideo: process.env.RECORD_VIDEO === 'true' ? { dir: 'videos/' } : undefined
        });
        await use(context);
        // Don't close context here - Playwright handles it
    },

    /**
     * Page with custom settings
     */
    page: async ({ context }, use) => {
        const page = await context.newPage();
        // Set default timeout
        page.setDefaultTimeout(30000);
        await use(page);
    }
});

module.exports = { test, expect };