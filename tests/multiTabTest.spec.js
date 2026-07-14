import {test, expect } from '@playwright/test'

test('handle new tab', async ({page, context}) => {
    await page.goto('https://demoqa.com/links')

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#simpleLink').click()
    ])
    await newPage.waitForLoadState()
    console.log('New tab title:', await newPage.title())
    await expect(newPage).toHaveTitle(/demosite/)
    await newPage.close()

    console.log('multi-tab test passed!')
})