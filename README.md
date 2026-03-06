# Playwright Automation Framework

An industry-level Playwright automation testing framework with Page Object Model, utilities, and best practices.

## 🚀 Features

- **Page Object Model (POM)**: Organized page objects for maintainable code
- **Custom Fixtures**: Reusable test fixtures for common setup
- **Test Data Management**: Centralized test data with Faker.js integration
- **Configuration Management**: Environment-based configuration
- **Logging**: Built-in logging utilities
- **Parallel Execution**: Optimized for parallel test execution
- **Multiple Reporters**: HTML, JSON, and JUnit reports
- **CI/CD Ready**: GitHub Actions workflow included
- **ESLint Integration**: Code quality checks

## 📁 Project Structure

```
├── config/                 # Configuration files
│   ├── config.js          # Environment configuration
│   ├── global-setup.js    # Global test setup
│   └── global-teardown.js # Global test teardown
├── fixtures/              # Custom Playwright fixtures
│   └── customFixtures.js
├── helpers/               # Helper utilities
│   └── CommonHelpers.js
├── pages/                 # Page Object Models
│   ├── BasePage.js       # Base page class
│   └── TestAutomationPracticePage.js
├── test-data/             # Test data files
│   └── testData.js
├── tests/                 # Test files
│   ├── basicActions.spec.js
│   └── Revision/
├── utils/                 # Utility classes
│   ├── Logger.js
│   └── TestDataGenerator.js
├── .env.example           # Environment variables template
├── .eslintrc.json         # ESLint configuration
├── jsconfig.json          # JavaScript configuration
├── package.json           # Dependencies and scripts
└── playwright.config.js   # Playwright configuration
```

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npm run install:browsers
   ```
4. Copy environment file:
   ```bash
   cp .env.example .env
   ```

## 🏃 Running Tests

### All Tests
```bash
npm test
```

### Headed Mode (visible browser)
```bash
npm run test:headed
```

### Debug Mode
```bash
npm run test:debug
```

### UI Mode
```bash
npm run test:ui
```

### Tagged Tests
```bash
npm run test:smoke    # Run @smoke tagged tests
npm run test:regression  # Run @regression tagged tests
```

### View Reports
```bash
npm run report
```

## 📝 Writing Tests

### Using Page Objects

```javascript
import { test, expect } from '../fixtures/customFixtures';
import TestAutomationPracticePage from '../pages/TestAutomationPracticePage';

test('Example test using POM', async ({ practicePage }) => {
    await practicePage.navigateToPracticePage();
    await practicePage.fillContactForm(testData.contactData.validUser);
    // Add assertions
});
```

### Using Test Data

```javascript
import { testData } from '../test-data/testData';
import TestDataGenerator from '../utils/TestDataGenerator';

// Use static test data
const user = testData.contactData.validUser;

// Generate dynamic test data
const randomUser = TestDataGenerator.generateContactData();
```

### Using Helpers and Utils

```javascript
import Logger from '../utils/Logger';
import CommonHelpers from '../helpers/CommonHelpers';

test('Example with utilities', async ({ page }) => {
    Logger.step('Starting test');
    await page.goto('https://example.com');
    await CommonHelpers.wait(1000);
    Logger.info('Test completed');
});
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file with:

```env
BASE_URL=https://testautomationpractice.blogspot.com
BROWSER=chromium
HEADLESS=false
TIMEOUT=30000
RETRIES=0
ENV=staging
SCREENSHOT_ON_FAILURE=true
WORKERS=4
RECORD_VIDEO=false
```

### Playwright Configuration

Modify `playwright.config.js` for:
- Browser settings
- Parallel execution
- Reporting options
- Global setup/teardown

## 🏷️ Test Tags

Use tags to organize tests:

```javascript
test('Smoke test @smoke', async () => {
    // Test code
});

test('Regression test @regression', async () => {
    // Test code
});
```

## 📊 Reporting

- **HTML Report**: `playwright-report/index.html`
- **JSON Report**: `test-results/results.json`
- **JUnit Report**: `test-results/results.xml`

## 🔍 Linting

Run ESLint to check code quality:

```bash
npm run lint
npm run lint:fix  # Auto-fix issues
```

## 🤝 Contributing

1. Follow the established project structure
2. Use Page Object Model for new pages
3. Add appropriate test data to `test-data/`
4. Include JSDoc comments for new functions
5. Run linting before committing

## 📈 Best Practices

- Use descriptive test names
- Keep tests independent and isolated
- Use page objects for element interactions
- Leverage fixtures for common setup
- Add appropriate waits and assertions
- Use test data generators for dynamic data
- Log important steps in tests
- Follow the single responsibility principle

## 🚀 CI/CD

GitHub Actions workflow is configured for:
- Automated test execution
- Multi-browser testing
- Report generation and artifact upload
- Failure notifications

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Page Object Model Guide](https://playwright.dev/docs/pom)
- [Test Configuration](https://playwright.dev/docs/test-configuration)
- [Best Practices](https://playwright.dev/docs/best-practices)