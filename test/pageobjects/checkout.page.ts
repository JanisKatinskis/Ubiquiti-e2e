import { $ } from '@wdio/globals'
import Page from './page.js'

class CheckoutPage extends Page {
    public get checkoutForm () { return $('#checkout_info_container') }
    public get inputCheckoutFirstName () { return $('#first-name') }
    public get inputCheckoutLastName () { return $('#last-name') }
    public get inputCheckoutZipcode () { return $('#postal-code') }
    public get btnCheckoutContinue () { return $('#continue') }
    public get btnCheckoutFinish () { return $('#finish') }
    public get checkoutSummaryContainer () { return $('#checkout_summary_container') }
    public get checkoutCompleteContainer () { return $('#checkout_complete_container') }
}

export default new CheckoutPage()
