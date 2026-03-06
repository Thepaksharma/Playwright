/**
 * Test data for contact forms
 */
const contactData = {
    validUser: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        address: "123 Main St, Anytown, USA"
    },
    invalidUser: {
        name: "",
        email: "invalid-email",
        phone: "abc",
        address: ""
    }
};

/**
 * Test data for products
 */
const productData = {
    smartphone: {
        name: "Smartphone",
        price: "$999",
        description: "Latest smartphone with advanced features"
    },
    laptop: {
        name: "Laptop",
        price: "$1299",
        description: "High-performance laptop for professionals"
    }
};

/**
 * Test data for countries
 */
const countryData = {
    countries: ["Japan", "India", "United States", "Canada", "Australia"]
};

module.exports = {
    contactData,
    productData,
    countryData
};