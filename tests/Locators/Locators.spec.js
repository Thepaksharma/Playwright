//getByRole

import { test, expect } from "@playwright/test"
test("Locators", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice")
    const locator = page.getByRole("button", { name: "Primary Action" })
    await expect(locator).toHaveText("Primary Action")
    await locator.click()
    await expect(locator).toBeVisible()
    await page.getByRole("textbox", {}).toBeVisible
    await page.getByRole("checkbox", { name: " Accept terms" }).check()
    await expect(page.getByRole("button", { name: "Div with button role" })).toBeVisible()
})