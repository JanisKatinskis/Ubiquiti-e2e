import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page.ts'

describe('Login incorrect credentials', () => {
    it('should return the correct error message when logging in with incorrect credentials', async () => {
        const username = process.env.USERNAME!
        const password = process.env.PASSWORD!
        
        await browser.url(process.env.URL!)
        await loginPage.loginForm.waitForDisplayed()
        await expect(loginPage.errorMessage).not.toBeDisplayed()

        await loginPage.login('badusername', password)
        await expect(loginPage.errorMessage).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
     
        await browser.refresh()
        await loginPage.login(username, 'badpassword')
        await expect(loginPage.errorMessage).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
})
