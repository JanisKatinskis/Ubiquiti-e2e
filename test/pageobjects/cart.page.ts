import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
    public get cartProductTitle () { return $('#cart_contents_container [data-test="inventory-item-name"]') }
    
}

export default new CartPage();
