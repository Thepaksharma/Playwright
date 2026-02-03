import { test, expect } from "@playwright/test"
test("My first test in Playwright", async ({ page }) => {
    await page.goto("https://www.nirankari.org/")
    await expect(page).toHaveTitle("Sant Nirankari Mission")
})