//getByRole
import { test, expect, defineConfig } from "@playwright/test"
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

    //getByLabel
    await page.getByLabel("Email Address:").fill("Deepak")
    await page.getByLabel("password:").fill("Sharma")
    await page.getByLabel("Your Age:").fill("29")
    await page.getByLabel(" Standard").click()
    await expect(page.getByLabel("Standard")).toBeChecked()
    await expect(page.getByLabel("Express")).not.toBeChecked()
    await page.getByLabel("Express").click()
    await expect(page.getByLabel("Express")).toBeChecked()

    //getByPlaceHolder
    await page.getByPlaceholder("Enter your full name").fill("Deepak.sharma@gmail.com")
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("1234567890")
    await page.getByPlaceholder("Type your message here...").fill("Why very kind deepak ?")
    await page.getByPlaceholder("Search products...").fill("Camera")
    await page.getByRole("button", { name: "Search" }).click()

    //getByText
    await expect(page.getByText("This paragraph contains some ")).toBeVisible()
    await expect(page.getByText("List item 1", { exact: true })).toBeVisible()
    await expect(page.getByText("List item 2 with ")).toBeVisible()


    //getByAlt
    await expect(page.getByAltText("logo image")).toBeVisible()

    //getByTitle
    await expect(page.getByTitle("Home page link")).toBeVisible()
    await expect(page.getByTitle("HyperText Markup Language", { exact: true })).toBeVisible()
    await expect(page.getByTitle("Tooltip text")).toHaveText("This text has a tooltip")

    //getByTestId
    await expect(page.getByTestId("profile-name")).toHaveText("John Doe")
    await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com")

    //CSS or XPATH
    await page.locator("xpath=//button[@title='Click to save your changes']").click()
    await expect(page.locator("css=h3[data-testid='profile-name']")).toHaveText("John Doe")

    //Shadow DOM
    await expect(page.locator("#shadow_host").getByText("Mobiles")).toHaveText("Mobiles")
    await page.getByText("Mobiles")

    //Always use CSS under shadow DOM
    // await page.locator("#shadow_host").getByRole("link", { name: "Blog" }).click()
    await page.locator("#shadow_host input[type='checkbox']").check()

    //filter by text
    await page.getByRole("listitem").filter({ hasText: "Products" }).click()
    await page.getByRole("listitem").filter({ hasNotText: "Products" }).filter({ hasNotText: "Home" }).filter({ hasText: "Contact" }).click()

    //Filter by child/descendant
    await page.getByRole("listitem").filter({ has: page.getByRole("link", { name: "Products" }) }).click()
    await expect(page.getByRole("listitem").filter({ has: page.getByRole("link", { name: "Products" }) })).toHaveCount(1)
    await expect(page.getByTestId("main-navigation").filter({ has: page.getByRole("listitem") }).filter({ hasNot: page.getByRole("link", { name: "Products" }) })).toHaveCount(0)

    //Matching inside a locator
    const listItems = page.getByTestId("main-navigation").filter({ has: page.getByRole("listitem") })
    await listItems.filter({ has: page.getByRole("link", { name: "Contact" }) })
    await expect(listItems).toHaveCount(1)

    // Matching two locators simultaneously
    await expect(page.getByRole("button", { name: "Search" }).and(page.getByText("Search"))).toBeVisible()

    //Matching one of the two alternative locators
    // use locator.or() to create a locator that matches any one or both of the alternatives.
    // If both the elements visible on the page, thne "or" locator will match both of them, possibly throwing the "strict mode violation" error. 
    // In this case, you can use locator.first() to only match one of them.
    const primaryButton = page.getByRole("button", { name: "Primary Action" })
    const toggleButton = page.getByRole("button", { name: "Toggle Button" })
    await expect(primaryButton.or(toggleButton).first()).toBeVisible()
    if (await primaryButton.isVisible()) {
        console.log("Primary button is visible")
    }

    //List
    await expect(page.locator("xpath=//section[@id='text-locators']/ul").getByRole("listitem")).toHaveCount(3);
})

