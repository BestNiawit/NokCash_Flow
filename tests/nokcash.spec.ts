import { test, expect } from '@playwright/test'
import { NokCashPage } from '../pages/nokcash.page'

test.describe('NokCash Flow', () => {

  test('TC01 Open NokCash page', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await expect(nokcash.title()).toBeVisible()

  })

  test('TC02 Verify NokCash page UI', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await expect(page.getByText('Nok card')).toBeVisible()

    await expect(page.getByPlaceholder('จำนวนที่ต้องการเติม')).toBeVisible()

    await expect(nokcash.amountInput()).toBeVisible()

  })


  test('TC03 Verify preset amount buttons', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await nokcash.preset105().click()

    await expect(nokcash.payButton()).toBeEnabled()

  })


  test('TC04 Verify manual input amount', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await nokcash.enterAmount('150')

    await expect(nokcash.payButton()).toBeEnabled()

  })

  test('TC05 Verify minimum top-up amount', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await nokcash.enterAmount('105')

    await expect(nokcash.payButton()).toBeEnabled()

  })


  test('TC06 Verify amount below minimum', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await nokcash.enterAmount('100')

    await expect(page.getByText('กรุณาเติมยอดขั้นต่ำ')).toBeVisible()

  })


  test('TC07 Verify purchase button', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await nokcash.enterAmount('310')

    await nokcash.clickPay()

    await expect(page.getByText('ชำระเงิน')).toBeVisible()

  })


  test('TC08 Verify order summary', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await nokcash.enterAmount('310')

    await nokcash.clickPay()

    await expect(page.getByText('สรุปคำสั่งซื้อ')).toBeVisible()
    await expect(page.getByText('310 บาท')).toBeVisible()

  })

  test('TC09 Verify cancel order', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await nokcash.enterAmount('310')
    await nokcash.clickPay()

    await page.getByText('ยกเลิกคำสั่งซื้อ').click()

    await expect(page.getByText('ยกเลิกคำสั่งซื้อสำเร็จ')).toBeVisible()

  })

  test('TC10 Verify non numeric input', async ({ page }) => {

    const nokcash = new NokCashPage(page)

    await nokcash.openHome()
    await nokcash.openNokCashPage()

    await nokcash.enterAmount('abc')

    await expect(nokcash.payButton()).toBeDisabled()

  })

})