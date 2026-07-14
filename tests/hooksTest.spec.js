import {test, expect} from '@playwright/test' 
test.describe.configure({mode: 'serial'})

test.beforeAll(async() => {
    console.log('Running once before all tests')
})

test.beforeEach(async ({page})=> {
    await page.goto('https://demoqa.com/text-box')
    console.log('Navigated to page before each tests')
})

test.afterEach(async ({page}) => {
    console.log('Cleaning up after each test')
    await page.screenshot({path: 'afterEach.png'})
}) 

test.afterAll(async () => {
    console.log('Running once after all tests')
})

test('First test with hooks', async({page})=> {
    await page.getByPlaceholder('Full Name').fill('John Doe')
    console.log('First test Ran')

})

test('Second Test after hooks', async ({page}) => {
    await page.getByPlaceholder('Full Name').fill('Jane Doe')
    console.log('Second test ran')
})