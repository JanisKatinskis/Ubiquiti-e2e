import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page.js'
import productsPage from '../../pageobjects/products.page.js'

describe('Login success', () => {
    it('should login successfully with the correct credentials', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.loginForm.waitForDisplayed()
        await expect(loginPage.inputUsername).toBeDisplayed()
        await expect(loginPage.inputPassword).toBeDisplayed()
        await expect(loginPage.btnLogin).toBeClickable()

        await loginPage.login('standard_user', 'secret_sauce')

        await expect(productsPage.productsPageContent).toBeDisplayed()
    })
})