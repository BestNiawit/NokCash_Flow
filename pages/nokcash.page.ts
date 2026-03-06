import { Page, expect } from '@playwright/test'

export class NokCashPage {

  constructor(private page: Page) {}

// locators
  nokcashBanner = () => this.page.getByText('เติมนกแคช')
  title = () => this.page.getByText('เติมนกแคช')
  amountInput = () => this.page.locator('input')
  payButton = () => this.page.getByRole('button', { name: 'ชำระเงิน' })

  preset105 = () => this.page.getByRole('button', { name: '+105' })
  preset210 = () => this.page.getByRole('button', { name: '+210' })

  orderSummary = () => this.page.getByText('สรุปคำสั่งซื้อ')

// Action keywords
  async openHome() {
    await this.page.goto('https://xn--m3ca1athe9asc7b2b6iqe.com/')
  }

  async openNokCashPage() {
    await this.nokcashBanner().click()
  }

  async enterAmount(amount: string) {
    await this.amountInput().fill(amount)
  }

  async clickPay() {
    await this.payButton().click()
  }

}