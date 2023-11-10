import '@testing-library/jest-dom'
import '@/index.css'

import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { beforeAll, expect } from 'vitest'

import {
  DESKTOP_RESOLUTION_HEIGHT,
  DESKTOP_RESOLUTION_WIDTH
} from '@/testUtils'

expect.extend(matchers)

beforeAll(() => {
  Object.defineProperty(window, 'resizeTo', {
    writable: true,
    value: (width: number, height: number) => {
      Object.assign(window, {
        innerWidth: width,
        innerHeight: height
      }).dispatchEvent(new Event('resize'))
    }
  })
})

beforeEach(() => {
  window.resizeTo(DESKTOP_RESOLUTION_WIDTH, DESKTOP_RESOLUTION_HEIGHT)
})

afterEach(() => {
  cleanup()
})

afterAll(() => {})
