const { test, expect } = require("@playwright/test")

test.only("first playwright test", async ({ browser }) => {

    const userName=page.locator("#login_field")
    const signnIn=page.locator("[type='submit']")


    //chrome -plugins/cookies
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://github.com/login")
    console.log(await page.title());

    //css, type , fill
    // await page.locator("#login_field").fill("udaysp05@gmail.com")
    await userName.fill("udaysp05@gmail.com")
    await page.locator("[type='password']").fill("UdayaPujari194@")
    // await page.locator("[type='submit']").click()
    await page.signnIn.click()
    console.log("=========================>", await page.locator(".js-flash-alert").textContent())
    await expect(page.locator(".js-flash-alert")).toContainText('Incorrect');

    //type/fill : erase the data and enter the correct username and password
    await userName.fill("")
    await userName.fill("udaysp05@gmail.com")
    await page.signnIn.click()


})



test("page playwright test", async ({ page }) => {
    console.log(await page.goto("https://google.com"))
    await expect(page).toHaveTitle("Google")


})