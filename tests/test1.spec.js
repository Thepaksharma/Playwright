const { test, expect } = require('@playwright/test')

test("My first test", async ({ page }) => {
    await page.goto("https://www.nirankari.org/")
    await expect(page).toHaveTitle("Sant Nirankari Mission")
})