import { QueryClientProvider } from '@tanstack/react-query'
import { render as rtlRender } from '@testing-library/react'
import type { ReactElement } from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { queryClient } from './lib'
import { routes } from './routes'

export const DESKTOP_RESOLUTION_WIDTH = 1280
export const DESKTOP_RESOLUTION_HEIGHT = 800

export const MOBILE_RESOLUTION_WIDTH = 414
export const MOBILE_RESOLUTION_HEIGHT = 896

export * from '@testing-library/react'

const router = createMemoryRouter(routes)

export function renderWithWrappers(ui: ReactElement): void {
  rtlRender(ui, {
    wrapper: () => (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    )
  })
}
