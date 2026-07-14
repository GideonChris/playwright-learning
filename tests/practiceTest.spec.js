import {test, expect} from  '@playwright/test'

test('practice test', async ({page}) => {
    await page.goto('https://demoqa.com')
    await expect(page).toHaveTitle(/demosite/)
    await page.screenshot ({ path: 'practice.png'})
})