import { test, expect } from '@playwright/test'
import { CheckboxPage } from '../pages/CheckBoxPage.js'

test ('select desktop checbox', async ({page}) => {

    const checkboxPage = new CheckboxPage(page)

    await checkboxPage.navigate()
    await checkboxPage.expandHome()
    await checkboxPage.selectDesktop()

    const result = await checkboxPage.getResult()
    console.log('Result:', result)
    expect(result).toContain('desktop')


}

)