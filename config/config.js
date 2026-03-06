require('dotenv').config();

/**
 * Environment configuration
 */
const config = {
    // Base URLs
    baseURL: process.env.BASE_URL || 'https://testautomationpractice.blogspot.com',

    // Browser configuration
    browser: process.env.BROWSER || 'chromium',
    headless: process.env.HEADLESS === 'true' || false,

    // Test execution
    timeout: parseInt(process.env.TIMEOUT) || 30000,
    retries: parseInt(process.env.RETRIES) || 0,

    // Environment
    environment: process.env.ENV || 'staging',

    // Screenshots
    screenshotOnFailure: process.env.SCREENSHOT_ON_FAILURE === 'true' || true,

    // Parallel execution
    workers: parseInt(process.env.WORKERS) || 4,

    // Test data
    testDataPath: './test-data',

    // Reports
    reportPath: './playwright-report'
};

module.exports = config;