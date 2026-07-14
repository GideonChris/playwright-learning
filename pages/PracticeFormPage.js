export class PracticeFormPage {

    constructor(page) {
        this.page = page
        this.firstNameInput = page.locator('#firstName')
        this.lastNameInput = page.locator('#lastName')
        this.maleRadioButton = page.locator('#gender-radio-1')
        this.submitButton = page.locator('#submit')
        //this.stateDropdown = page.locator('#react-select-3-input')

    }
    async navigate() {
        await this.page.goto('https://demoqa.com/automation-practice-form')
    }

    async fillName(firstName, lastName){
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
    }

    async selectGender(){
        await this.maleRadioButton.click()
    }
    async submitForm(){
        await this.submitButton.click()
    }
    async selectState(statename) {
        /*await this.stateDropDown.click()
        await this.stateDropDown.fill(statename)
        await this.page.getByText(stateName, {exact: true}).first().click()*/ 
        await this.page.locator('#state').click()
        await this.page.getByText(statename, {exact: true}).click()
    }
}
