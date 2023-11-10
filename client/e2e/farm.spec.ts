import { expect } from '@playwright/test'
import { test as base } from '@playwright/test'

import { FarmPage } from './farm-page'

const test = base.extend<{ farmPage: FarmPage }>({
  farmPage: async ({ page }, use) => {
    const farmPage = new FarmPage(page)
    await use(farmPage)
  }
})

test.beforeEach(async ({ farmPage }) => {
  await farmPage.goto()
  await farmPage.removeAll()
})

test('application should work and heading should be displayed', async ({
  page
}) => {
  await expect(
    page.getByRole('heading', { name: 'Animals List' })
  ).toBeVisible()
})

test('should be able to add animal', async ({ page, farmPage }) => {
  await farmPage.addAnimal('Chicken')
  await expect(page.getByText('Chicken')).toBeVisible()
})

test('should be able to edit animal', async ({ page, farmPage }) => {
  await farmPage.addAnimal('Pig')
  await farmPage.editAnimal('Pig', 'Dog')
  await expect(page.getByText('Dog').first()).toBeVisible()
})

test('should be able to remove animal', async ({ page, farmPage }) => {
  await farmPage.addAnimal('Horse')
  await farmPage.removeAnimal('Horse')
  await expect(page.getByText('Horse')).toBeHidden()
})

test('should display empty text if there are no animals', async ({ page }) => {
  await expect(
    page.getByText('Your farm is very empty. Add some animals!')
  ).toBeVisible()
})
