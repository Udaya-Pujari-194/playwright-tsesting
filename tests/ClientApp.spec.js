// @ts-check
import { test, expect } from '@playwright/test';

test("This is the assignment", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/")
  await page.locator('#userEmail').fill("dummy194194@gmail.com")
  await page.locator('#userPassword').fill("Dummy194194@")
  await page.locator("[value='Login']").click()

  //wait untill all the network calls are made ,then test
  await page.waitForLoadState('networkidle')
  // OR insted of above line you can use below comemtted line
  //await page.locator(".card-body b").first().waitFor()
  const titles = await page.locator(".card-body b").allTextContents()
  console.log(titles)
})