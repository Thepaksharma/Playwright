/**
 * Global setup for Playwright tests
 * Runs before all tests
 */
async function globalSetup() {
    console.log('🚀 Starting Playwright test suite...');

    // Add any global setup logic here
    // For example: database setup, API mocks, etc.

    console.log('✅ Global setup completed');
}

module.exports = globalSetup;