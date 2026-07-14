export class TextBoxPage {

    constructor(page){
        this.page = page
        this.fullNameInput = page.getByPlaceholder('Full Name')
        this.emailInput = page.getByPlaceholder('name@example.com')
        this.submitButton = page.getByRole('button', {name: 'Submit'})
        this.output = page.locator('#output')
    }

async navigate(){
await this.page.goto('https://demoqa.com/text-box')

}

async fillForm(name, email){
    await this.fullNameInput.fill(name)
    await this.emailInput.fill(email)
}

async submitForm(){
    await this.submitButton.click()

}
async isOutputVisible(){
    await this.page.waitForSelector('#output', {timeout: 10000})
    return await this.output.isVisible() 
}
}