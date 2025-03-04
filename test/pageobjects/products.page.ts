import { $ } from '@wdio/globals'
import Page from './page.js';

class ProductsPage extends Page {
    public get productsPageContent () { return $('[data-test="inventory-container"]') }
    public get productSorter () { return $('[data-test="product-sort-container"]') }
    public get productSorterOptionPriceLowToHigh () { return $('option[value="lohi"]') }
    public get productSorterOptionAToZ () { return $('option[value="az"]') }
    public get lastProductTitle () { return $('div.inventory_item:last-child') }
    public get topRightProductTitle () { return $('div.inventory_item:nth-child(2)') }
    public get btnAddToCartLastProduct () { return $('div.inventory_item:last-child button') }
    public get btnAddToCartTopRightProduct () { return $('div.inventory_item:nth-child(2) button') }
    public get btnShoppingCart () { return $('div.inventory_item:nth-child(2) button') }
    public get badgeShoppingCartProductCount () { return $('[data-test="shopping-cart-badge"]') }
}

export default new ProductsPage();
