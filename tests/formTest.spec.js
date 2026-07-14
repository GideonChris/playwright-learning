import { test, expect } from 'playwright/test'

test('fill in text box form', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box')
    await page.locator('#userName').fill('John Doe')
    await page.locator('#userEmail').fill('john@ex.com')
    await page.locator('#submit').click()
    await expect(page.locator('#name')).toBeVisible()
    console.log('Form submitted and output verified')
})