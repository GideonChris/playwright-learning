import { test, expect } from '@playwright/test'

test('wait for element', async ({ page }) => {
    await page.goto('https://demoqa.com')
    await page.waitForSelector('.home-banner')
    await expect(page.locator('.home-banner')).toBeVisible()
    console.log('Element appeared successfully')  
})

test('wait for page load', async ({page})=>{
    await page.goto('https://demoqa.com')
    await page.waitForLoadState('networkidle')
    console.log(await page.title())
    await page.waitForFunction(() => document.title !== ' ')
    console.log('Page Fully Loaded')
    await expect(page).toHaveTitle(/demosite/)
})

test('wait for dynamic element', async ({page})=> {

    await page.goto('https://demoqa.com/dynamic-properties')
    await page.waitForSelector('#visibleAfter', {timeout: 10000})
    await expect(page.locator('#visibleAfter')).toBeVisible()
    console.log('Dynamic element appeared!')


})


    
