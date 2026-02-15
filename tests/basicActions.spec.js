import { test, expect } from "@playwright/test"
test("Basic Actions in Playwright", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")

    //locator.check()
    await page.getByRole("checkbox", { name: "Sunday" }).check()
    await expect(page.getByRole("checkbox", { name: "Sunday" })).toBeChecked()

    //locator.click()
    await page.getByRole("button", { name: "START" }).click()
    const stpButton = await page.getByRole("button", { name: "STOP" }).innerText()
    console.log(stpButton)
})