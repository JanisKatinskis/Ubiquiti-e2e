import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page.js'

describe('Login locked out', () => {
    it('should return the correct error message when logging in with locked out user credentials', async () => {
        await browser.url('https://www.saucedemo.com/')
        await loginPage.loginForm.waitForDisplayed()
        await expect(loginPage.inputUsername).toBeDisplayed()
        await expect(loginPage.inputPassword).toBeDisplayed()
        await expect(loginPage.btnLogin).toBeClickable()
        await expect(loginPage.errorMessage).not.toBeDisplayed()

        await loginPage.login('locked_out_user', 'secret_sauce')

        await expect(loginPage.errorMessage).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.')

        //await expect(productsPage.productsPageContent).toBeDisplayed()
    })
})