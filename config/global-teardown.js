/**
 * Global teardown for Playwright tests
 * Runs after all tests
 */
async function globalTeardown() {
    console.log('🛑 Finishing Playwright test suite...');

    // Add any global cleanup logic here
    // For example: database cleanup, report generation, etc.

    console.log('✅ Global teardown completed');
}

module.exports = globalTeardown;