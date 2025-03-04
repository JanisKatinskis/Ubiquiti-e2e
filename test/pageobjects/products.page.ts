import { $ } from '@wdio/globals'
import Page from './page.js';

class ProductsPage extends Page {
    public get productsPageContent () {
        return $('[data-test="inventory-container"]');
    }



}

export default new ProductsPage();
