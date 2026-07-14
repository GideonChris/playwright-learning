import { test as base } from '@playwright/test'
import {TextBoxPage } from './pages/TextBoxPage.js'

export const test = base.extend({
    textBoxPage: async ({page}, use) => {
        const textBoxPage = new TextBoxPage(page)
        await use(textBoxPage)
    }
 })
 export {expect} from '@playwright/test'