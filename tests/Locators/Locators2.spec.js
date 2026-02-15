import { test, expect } from "@playwright/test"
test("Locators 2 tests", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await expect(page).toHaveTitle("Swag Labs")
    await page.locator("xpath=//input[@id='user-name']").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator("css=input[class='submit-button btn_action']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})