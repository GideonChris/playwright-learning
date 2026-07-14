import  { test, expect } from '@playwright/test'
import { TextBoxPage } from '../pages/TextBoxPage.js'
import { users, urls } from '../data/testData.js'

test('fill form using POM', async ({page}) => {
    const textBoxPage = new TextBoxPage(page)

    await textBoxPage.navigate()
    await textBoxPage.fillForm(users[0].name, users[0].email)
    await textBoxPage.submitForm()

    const isVisible = await textBoxPage.isOutputVisible()
    expect(isVisible).toBe(true)
})


test('data driven from test using POM', async ({page})=> {
    const textBoxPage = new TextBoxPage(page)

    for (const user of users) {
        await textBoxPage.navigate()
        await textBoxPage.fillForm(user.name, user.email)
        await textBoxPage.submitForm()

        const isVisible = await textBoxPage.isOutputVisible()
        expect(isVisible).toBe(true)
        console.log('Test passed for:', user.name)
    }

})

