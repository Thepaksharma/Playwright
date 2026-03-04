import { test, expect } from "@playwright/test"
test("Revision for Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice");

    //Check the checkbox for Smartphone in the first page
    await page.locator("#productTable tbody tr", { hasText: "Smartphone" })
        .locator("css=input[type='checkbox']")
        .check()

    //Click on the pagination link for page 2    
    // await page.locator("#pagination")
    //     .filter({ hasText: "2" })
    //     .click()

    // //Uncheck the checkbox for Smartphone in the second page    
    await page.locator("#productTable tbody tr", { hasText: "Smartphone" })
        .locator("css=input[type='checkbox']")
        .uncheck()

    //Hover over the title of the table    
    await page.locator(".title", { hasText: "Dynamic Web Table" }).hover()

    //Fill the input field for name and email in the form
    await page.locator("#input1").fill("Deepak Sharma")

    //Focus on the country dropdown and select the option for Japan
    await page.locator("#section1")
        .locator(".rectangular-button")
        .focus()

    //Press the Backspace key in the textarea to delete the last character
    await page.locator("#input1").press("Backspace")

    //Upload a file using the file input field
    await page.locator("#singleFileInput").setInputFiles("tests/files/sample.jpg")

     //locator.selectOption()
    await page.locator("#country").selectOption({label:"Japan"})
})