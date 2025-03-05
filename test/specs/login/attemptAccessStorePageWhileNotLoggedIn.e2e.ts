import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page.js'

describe('Attempt access store page while not logged in', () => {
    it('should return the correct error message when trying to access store page with direct URL while not logged in', async () => {
        await browser.url(process.env.URL!)
        await loginPage.open('inventory.html')
        await loginPage.loginForm.waitForDisplayed()

        await expect(loginPage.errorMessage).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: You can only access \'/inventory.html\' when you are logged in.')
    })
})
