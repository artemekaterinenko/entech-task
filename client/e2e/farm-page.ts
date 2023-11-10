import type { Locator, Page } from '@playwright/test'

export class FarmPage {
  private readonly animalItems: Locator

  constructor(public readonly page: Page) {
    this.animalItems = this.page.getByTestId('animal-item')
  }

  async goto() {
    await this.page.goto('/')
  }

  async addAnimal(name: string) {
    await this.page.getByRole('button', { name: 'Add Animal' }).click()
    await this.page.getByPlaceholder('Cow').fill(name)
    await this.page.getByRole('button', { name: 'Submit' }).click()
  }

  async editAnimal(oldName: string, newName: string) {
    const animal = this.animalItems.filter({ hasText: oldName })
    await animal.getByRole('button', { name: 'Edit' }).first().click()
    await this.page.getByPlaceholder('Cow').fill(newName)
    await this.page.getByRole('button', { name: 'Submit' }).click()
  }

  async removeAnimal(name: string) {
    const animal = this.animalItems.filter({ hasText: name })
    await animal.getByRole('button', { name: 'Delete' }).first().click()
  }

  async removeAll() {
    while ((await this.animalItems.count()) > 1) {
      await this.page.getByRole('button', { name: 'Delete' }).first().click()
    }
  }
}
