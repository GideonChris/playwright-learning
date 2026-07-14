import {test, expect} from '@playwright/test'

test('my First test', async ({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle(/Google/)
})

test('search on google', async ({page}) => {
    await page.goto('https://demoqa.com')
    console.log(await page.title())
    await expect(page).toHaveTitle(/demosite/)
    
})