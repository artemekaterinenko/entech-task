import { createBrowserRouter } from 'react-router-dom'

import { AppRoutes } from './appRoutes'

const routes = [AppRoutes]

export const router = createBrowserRouter(routes)

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
