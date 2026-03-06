const { faker } = require('@faker-js/faker');

/**
 * Test Data Generator
 * Provides methods to generate fake test data
 */
class TestDataGenerator {
    /**
     * Generate contact information
     * @returns {Object} Contact data
     */
    static generateContactData() {
        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress()
        };
    }

    /**
     * Generate user data
     * @returns {Object} User data
     */
    static generateUserData() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            zipCode: faker.location.zipCode()
        };
    }

    /**
     * Generate product data
     * @returns {Object} Product data
     */
    static generateProductData() {
        return {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            category: faker.commerce.department()
        };
    }

    /**
     * Generate random text
     * @param {number} length - Length of text
     * @returns {string} Random text
     */
    static generateRandomText(length = 10) {
        return faker.lorem.words(length);
    }

    /**
     * Generate random number
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {number} Random number
     */
    static generateRandomNumber(min = 1, max = 100) {
        return faker.number.int({ min, max });
    }
}

module.exports = TestDataGenerator;