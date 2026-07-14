export class CheckboxPage {
constructor (page) {

this.page = page
this.homeToggle = page.locator('.rc-tree-switcher_close').first()
this.desktopCheckbox = page.getByLabel('Select Desktop')
}

async navigate() {
    await this.page.goto('https://demoqa.com/checkbox')
}
async expandHome() {
    await this.homeToggle.click()
}
async selectDesktop() {
    await this.desktopCheckbox.click()
}
async getResult() {
    return await this.page.locator('#result').textContent() 
}
}