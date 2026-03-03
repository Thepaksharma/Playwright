import { test, expect } from "@playwright/test"
test("Revision for Locatos and Basic actions in Playwright", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");

    //getByRole
    await page.getByRole("button", { name: "Primary Action" }).click()
    await expect(page.getByRole("button", { name: "Primary Action" })).toBeVisible()

    //getByText
    await page.getByText("Submit Form").click()
    await expect(page.getByText("List item 1")).toBeVisible()

    //getByLabel
    await page.getByLabel("Email Address:").fill("Deepak")
    await expect(page.getByLabel("Email Address:")).toHaveValue("Deepak");

    //getByPalaceholder
    await page.getByPlaceholder("Enter your full name").fill("Deepak Sharma")
    await expect(page.getByPlaceholder("Enter your full name")).toHaveValue("Deepak Sharma");

    //getByAltText
    await expect(page.getByAltText("logo image", { exact: true })).toBeVisible()

    //getByTitle
    await expect(page.getByTitle("Home page link")).toBeVisible()
    await expect(page.getByTitle("Click to save your changes", { exact: true })).toBeVisible()

    //getByTestId
    await page.getByTestId("edit-profile-btn").click()
    await expect(page.getByTestId("edit-profile-btn")).toBeVisible()

    //CSS
    await page.locator("css=button[role='button']").click()
    // await expect(page.locator("css=button[text()='Primary Action']")).toBeVisible()

    //XPATH
    await page.locator("xpath=//button[@aria-pressed='false']").click()
    await expect(page.locator("xpath=//button[text()='Primary Action']")).toBeVisible()

    //shadow DOM
    await expect(page.locator("#shadow_host").getByText("Mobiles")).toBeVisible()
    await page.locator("#shadow_host").getByRole("textbox").fill("Deepak Sharma - Shadow DOM")

    //Filter by hasText
    await expect(page.locator("xpath=//section[@id='text-locators']/ul").filter({ hasText: "Special: Unique text identifier" })).toBeVisible()
    await expect(page.locator("xpath=//section[@id='title-locators']/div/ul").filter({ hasText: "This text has a tooltip" })).toBeVisible()

    //Filter by Child or Descendant
    // await expect(page.locator("xpath=//section[@id='text-locators']")).toBeVisible()
   await expect(page.locator("#text-locators ul").filter({has : page.locator("li",{ hasText: 'Special: Unique text identifier' })})).toBeVisible()
})