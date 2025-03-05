import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page.ts'
import productsPage from '../../pageobjects/products.page.ts'
import cartPage from '../../pageobjects/cart.page.ts'

describe('Remove product from cart', () => {
    it('should successfully remove product from the cart', async () => {
        const username = process.env.USERNAME!
        const password = process.env.PASSWORD!

        await browser.url(process.env.URL!)
        await loginPage.loginForm.waitForDisplayed()
        await loginPage.login(username, password)
        await productsPage.productsPageContent.waitForDisplayed()

        const productName = (await productsPage.topRightProductTitle.getText()).toString()
        await productsPage.btnAddToCartTopRightProduct.click()
        await productsPage.btnShoppingCart.click()

        await expect(cartPage.cartProductList).toBeDisplayed()
        await expect(cartPage.cartProductList).toHaveText(expect.stringContaining(productName))

        await expect(cartPage.btnRemoveFromCart).toBeClickable()
        await cartPage.btnRemoveFromCart.click()

        await expect(cartPage.btnRemoveFromCart).not.toBeDisplayed()
        await expect(cartPage.cartProductList).not.toHaveText(expect.stringContaining(productName))
    })
})
