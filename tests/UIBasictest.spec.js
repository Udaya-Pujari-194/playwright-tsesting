const { test, expect } = require("@playwright/test")
const { text } = require("stream/consumers")
// rahulshettyacademy,learning,    https://rahulshettyacademy.com/loginpagePractise/

test("first playwright test", async ({ browser }) => {


    const context = await browser.newContext()
    const page = await context.newPage()
    const userName = page.locator("#username")
    const signIn = page.locator('#signInBtn')
    const cartTitles = page.locator(".card-body a")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

    //css selectors
    // await page.locator('#username').fill("rahulshettyacadem")
    await userName.fill("rahulshettyacadem")
    await page.locator("[type='password']").fill("learning")
    // await page.locator("#signInBtn").click()
    await signIn.click()
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText("Incorrect")


    //fill
    await userName.fill("")
    await userName.fill("rahulshettyacademy")
    await signIn.click()

    // console.log("--->", await page.locator(".card-body a").first().textContent());
    console.log("--->", await cartTitles.first().textContent());
    // console.log("--->", await page.locator(".card-body a").nth(0).textContent());
    console.log("--->", await cartTitles.nth(0).textContent());

    //to get all the titles of card
    const allTitles = await cartTitles.allTextContents()
    console.log("here I am ------>", allTitles)

})


test("UI Controls", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator("#username")
    const signIn = page.locator('#signInBtn')
    const documentLink = page.locator("[href*='documents-request']")
    const dropdown = page.locator('select.form-control')
    await dropdown.selectOption('consult')
    // radio button selection
    await page.locator('.radiotextsty').last().click()
    await page.locator("#okayBtn").click()
    //writing the assertion
    await expect(page.locator(".radiotextsty").last()).toBeChecked()
    //or
    console.log(await page.locator(".radiotextsty").last().isChecked())


    //Check box
    await page.locator("#terms").click()
    await expect(page.locator("#terms")).toBeChecked()
    //to uncheking box
    await page.locator("#terms").uncheck()
    expect(await page.locator("#terms").isChecked()).toBeFalsy()
    //testing the blinking link
    await expect(documentLink).toHaveAttribute("class", "blinkingText")



    // await page.pause()
})


test("Child windows handling", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator("[href*='documents-request']")
    // to open new window/tab
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  //listens for any new page: it's promise, pending,rejected,fullfilled
        documentLink.click()
    ])
    const text = await newPage.locator(".red").textContent()
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    console.log("=======>", text)
    console.log("=======>", domain)


    await page.locator("#username").fill(domain)
    console.log(await page.locator("#username").textContent())



    // page.pause()
})