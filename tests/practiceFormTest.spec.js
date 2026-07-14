import {test, expect} from '@playwright/test'
import {PracticeFormPage} from '../pages/PracticeFormPage.js'

test('fill practice form', async ({page}) => {
    const practiceForm = new PracticeFormPage(page)

    await practiceForm.navigate()
    await practiceForm.fillName('John',  'Doe')
    await practiceForm.selectGender()
    await practiceForm.selectState('NCR')
    await practiceForm.submitForm()

    console.log('Form Submitted Successfully')

})