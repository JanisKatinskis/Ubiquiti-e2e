import { browser } from '@wdio/globals'


export default class Page {
    /**
    * Opens a sub page of the page
    */
    public open () {
        return browser.url(`https://www.saucedemo.com`)
    }
}
