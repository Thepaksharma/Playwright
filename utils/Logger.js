/**
 * Logger utility for test execution
 */
class Logger {
    /**
     * Log info message
     * @param {string} message - Message to log
     */
    static info(message) {
        console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }

    /**
     * Log error message
     * @param {string} message - Error message
     */
    static error(message) {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    }

    /**
     * Log warning message
     * @param {string} message - Warning message
     */
    static warn(message) {
        console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
    }

    /**
     * Log debug message
     * @param {string} message - Debug message
     */
    static debug(message) {
        console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
    }

    /**
     * Log step in test
     * @param {string} step - Test step description
     */
    static step(step) {
        console.log(`[STEP] ${step}`);
    }
}

module.exports = Logger;