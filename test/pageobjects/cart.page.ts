import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
    public get cartProductList () { return $('[data-test="cart-list"]') }
    public get btnCheckout () { return $('#checkout') }
}

export default new CartPage();
