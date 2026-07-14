import {test, expect } from '../fixtures.js'

test ('fill form using fixture', async ({page, textBoxPage}) => {
    await textBoxPage.navigate()
    await textBoxPage.fillForm('John Doe', 'John@ex.com')
    await textBoxPage.submitForm()

    const isVisible = await textBoxPage.isOutputVisible()
    expect (isVisible).toBe(true)

    console.log('Fixture test passed!')
})