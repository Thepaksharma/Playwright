import { test, expect } from "@playwright/test"

test("Assertion test", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    //toHaveTitle
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice")

    //toBeChecked
    const checkbox1 = page.locator("#productTable tbody tr", { hasText: "Smartphone" })
        .locator("css=input[type='checkbox']")
    await checkbox1.check()
    await expect(checkbox1).toBeChecked()

    //TobeVisible
    // A specific element is visible.
    // At least one item in the list is visible.
    // At least one of the two elements is visible, possibly both.
    await expect(page.getByText("Dynamic Web Table")
        .or(page.getByText("Static Web Table"))
        .first()).toBeVisible()


    //toBeEnabled - Element is enabled like button
    await expect(page.getByTestId("footer-button")).toBeEnabled()

    //toContainText - Ensures the Locator points to an element that contains the given text
    await expect(page.locator("xpath=//div[@data-testid='product-card-2']/h4", { hasText: "Product B" })).toContainText("Product B")

    //toHaveAttribute - Ensures the Locator points to an element with given attribute.
    await expect(page.locator("css=input[placeholder='Enter your full name']")).toHaveAttribute('type', 'text')

    //toHaveCount - Ensures the Locator resolves to an exact number of DOM nodes.
    await expect(page.locator("#text-locators ul li")).toHaveCount(3)

    //toHaveText - Ensures the Locator points to an element with the given text
    await expect(page.locator(".title").first()).toHaveText("Automation Testing Practice")

    //toHaveValue - Ensures the Locator points to an element with the given input value.
    const emailAddress = await page.locator("#email")
    await emailAddress.fill("Deepak Sharma")
    await expect(emailAddress).toHaveValue("Deepak Sharma")

    //toHaveURL
    const homePage = await page.locator("#PageList2 .widget-content ul li", { hasText: "Home" })
    await homePage.click()
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")

})