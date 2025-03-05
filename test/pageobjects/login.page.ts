import { $ } from '@wdio/globals'
import Page from './page.ts'

class LoginPage extends Page {
    public get loginForm () { return $('div.login-box') }
    public get inputUsername () { return $('#user-name') }
    public get inputPassword () { return $('#password') }
    public get btnLogin () { return $('#login-button') }
    public get errorMessage () { return $('[data-test="error"]') }

    /**
     * fills username and password, clicks "Login"
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }
}

export default new LoginPage()
