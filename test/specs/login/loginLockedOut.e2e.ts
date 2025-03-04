import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page.js'

describe('Login locked out', () => {
    it('should return the correct error message when logging in with locked out user credentials', async () => {
        const username = process.env.USERNAME_LOCKED_OUT!
        const password = process.env.PASSWORD!
        
        await browser.url(process.env.URL!)
        await loginPage.loginForm.waitForDisplayed()
        await expect(loginPage.inputUsername).toBeDisplayed()
        await expect(loginPage.inputPassword).toBeDisplayed()
        await expect(loginPage.btnLogin).toBeClickable()
        await expect(loginPage.errorMessage).not.toBeDisplayed()

        await loginPage.login(username, password)

        await expect(loginPage.errorMessage).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    })
})