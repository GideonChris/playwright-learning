import { test, expect } from 'playwright/test'

test('practice different locators', async ({page}) => {

await page.goto('https://demoqa.com/text-box')

await page.getByPlaceholder('Full Name').fill('Jane Doe')
await page.getByPlaceholder('name@example.com').fill('jane@ex.com')
await page.getByRole('button', {name: 'Submit'}).click()
await expect(page.locator('#output')).toBeVisible()

console.log('All Locators Worked!')

})

test('practice getByText', async({ page }) => {
    await page.goto('https://demoqa.com/text-box')
    await expect(page.getByText('Full Name')).toBeVisible()
    await expect(page.getByText('Email')).toBeVisible()
    console.log('getByText locators worked!')
})

test('take screenshot', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box')
    await page.getByPlaceholder('full name').fill('Screenshot Test')
    await page.screenshot({ path: 'screenshot.png' })
    console.log('Screenshot Saved')
})