import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page.ts'
import productsPage from '../../pageobjects/products.page.ts'

describe('Login success', () => {
    it('should login successfully with the correct credentials', async () => {
        const username = process.env.USERNAME!
        const password = process.env.PASSWORD!

        await browser.url(process.env.URL!)
        await loginPage.loginForm.waitForDisplayed()
        await expect(loginPage.inputUsername).toBeDisplayed()
        await expect(loginPage.inputPassword).toBeDisplayed()
        await expect(loginPage.btnLogin).toBeClickable()

        await loginPage.login(username, password)
        await expect(productsPage.productsPageContent).toBeDisplayed()
    })
})
