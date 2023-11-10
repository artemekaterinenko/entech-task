import { QueryClient } from '@tanstack/react-query'
import { LoaderFunctionArgs } from 'react-router-dom'

export type RouteLoader<T> = (
  queryClient: QueryClient
) => (args: LoaderFunctionArgs) => Promise<T>
