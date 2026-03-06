const path = require('path');

/**
 * Common helper functions
 */
class CommonHelpers {
    /**
     * Generate random string
     * @param {number} length - Length of string
     * @returns {string} Random string
     */
    static generateRandomString(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Wait for specified milliseconds
     * @param {number} ms - Milliseconds to wait
     */
    static async wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Get file path relative to project root
     * @param {string} fileName - File name
     * @returns {string} Absolute path
     */
    static getTestFilePath(fileName) {
        return path.join(__dirname, '..', 'tests', 'files', fileName);
    }

    /**
     * Format date for screenshots
     * @returns {string} Formatted date string
     */
    static getCurrentDateTime() {
        const now = new Date();
        return now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
    }

    /**
     * Check if element is visible
     * @param {Locator} locator - Playwright locator
     * @returns {boolean} True if visible
     */
    static async isElementVisible(locator) {
        try {
            return await locator.isVisible();
        } catch (error) {
            return false;
        }
    }

    /**
     * Scroll to element
     * @param {Locator} locator - Playwright locator
     */
    static async scrollToElement(locator) {
        await locator.scrollIntoViewIfNeeded();
    }
}

module.exports = CommonHelpers;