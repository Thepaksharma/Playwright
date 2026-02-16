import { test, expect } from "@playwright/test"
import path from "node:path"
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

    //locator.uncheck()
    const uncheckSunday = page.locator("#sunday")
    await uncheckSunday.uncheck()
    await expect(uncheckSunday).not.toBeChecked()

    //locator.hover()
    await page.locator(".dropbtn").hover()

    //locator.fill()
    await page.getByPlaceholder("Enter Name").fill("Deepak Sharma")
    await page.locator("#email").fill("abc@gmail.com")
    await page.getByRole("textbox", { name: "phone" }).fill("1234567890")
    await page.locator("#textarea").fill("Sangharsh Nagar,Sakinaka, Mumbai - 4000 72")

    //locator.focus()
    await page.locator("#colors").focus()

    //locator.press() - Tp press any keyboard keys
    await page.locator("#textarea").press("Backspace")

    //locator.setInputFiles()
    await page.locator("#singleFileInput").setInputFiles("tests/files/sample.jpg");

    //locator.selectOption()
    await page.locator("#country").selectOption({label:"Japan"})
   

})