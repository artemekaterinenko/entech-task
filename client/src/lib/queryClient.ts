import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { lazy } from 'react'
import toast from 'react-hot-toast'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
      refetchOnWindowFocus: false
    }
  },
  queryCache: new QueryCache({
    onError: error => toast.error(error.message)
  }),
  mutationCache: new MutationCache({
    onError: error => toast.error(error.message)
  })
})

export const ReactQueryDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/react-query-devtools').then(res => ({
          default: res.ReactQueryDevtools
        }))
      )
