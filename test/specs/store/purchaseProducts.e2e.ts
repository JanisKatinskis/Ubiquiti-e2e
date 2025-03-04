import { expect } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page.js'
import productsPage from '../../pageobjects/products.page.js'
import cartPage from '../../pageobjects/cart.page.js'

describe('Product purchase', () => {
    it('should login successfully with the correct credentials', async () => {
        const username = process.env.USERNAME!
        const password = process.env.PASSWORD!

        await browser.url(process.env.URL!)
        await loginPage.loginForm.waitForDisplayed()
        await loginPage.login(username, password)
        await productsPage.productsPageContent.waitForDisplayed()

        await expect(productsPage.badgeShoppingCartProductCount).not.toBeDisplayed()
        await expect(productsPage.productSorter).toBeClickable()
        await productsPage.productSorter.click()
        await productsPage.productSorterOptionPriceLowToHigh.click()
        await expect(productsPage.lastProductTitle).toBeDisplayed()
        await expect(productsPage.btnAddToCartLastProduct).toBeClickable()

        const firstProductName = (await productsPage.lastProductTitle.getText()).toString();
        await productsPage.btnAddToCartLastProduct.click();
        await expect(productsPage.badgeShoppingCartProductCount).toBeDisplayed()
        await expect(productsPage.badgeShoppingCartProductCount).toHaveText("1")

        await productsPage.productSorter.click()
        await productsPage.productSorterOptionAToZ.click()
        await expect(productsPage.topRightProductTitle).toBeDisplayed()
        await expect(productsPage.btnAddToCartTopRightProduct).toBeClickable()

        const secondProductName = (await productsPage.topRightProductTitle.getText()).toString();
        await productsPage.btnAddToCartTopRightProduct.click();
        await expect(productsPage.badgeShoppingCartProductCount).toHaveText("2")

        await expect(productsPage.btnShoppingCart).toBeClickable()
        await productsPage.btnShoppingCart.click();

        await expect(cartPage.cartProductTitle).toBeDisplayed()
        //const cartItems = $$('#cart_contents_container [data-test="inventory-item-name"]')
        const cartItems = $$(cartPage.cartProductTitle)
        await expect(cartItems.length).toBe(2)
        //await expect(cartPage.cartProductTitle).toBeDisplayed()
        // await expect(cartPage.cartProductTitle).toHaveText(firstProductName)
        // await expect(cartPage.cartProductTitle).toContain(secondProductName)

    })
})
