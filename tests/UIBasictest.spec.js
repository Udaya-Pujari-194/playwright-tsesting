const { test, expect } = require("@playwright/test")
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



test.only("UI Controls", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator("#username")
    const signIn = page.locator('#signInBtn')
    const dropdown = page.locator('select.form-control')
    await dropdown.selectOption('consult')

    await page.locator('.radiotextsty').last().click()
    await page.locator("#okayBtn").click()


    
    await page.pause()


})