//getByRole
import { test, expect } from "@playwright/test"
test("Testing locators", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice")
    await page.getByRole("button", { name: "Primary Action" }).click()
    await expect(page.getByRole("button", { name: "Primary Action" })).toBeVisible()
    await expect(page.getByRole("textbox", { name: "username" })).toBeVisible()
    await page.getByRole("checkbox", { name: "Accept terms" }).check()
    await expect(page.getByRole("checkbox", { name: "Accept terms" })).toBeChecked()
    await page.getByRole("menuitem", { name: "Home" }).click()
    await expect(page.getByRole("menuitem", { name: "Home" })).toBeVisible()
})