import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
    public get cartProductTitle () { return $('[data-test="inventory-item-name"]') }
    
}

export default new CartPage();
