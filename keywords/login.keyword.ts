import { LoginPage } from '../pages/login.page';

export class LoginKeyword {
  constructor(private loginPage: LoginPage) {}

  async login(username: string, password: string) {
    await this.loginPage.fillUsername(username);
    await this.loginPage.fillPassword(password);
    await this.loginPage.clickLogin();
  }
}
