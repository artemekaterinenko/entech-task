import { Outlet, RouteObject } from 'react-router-dom'

import {
  AnimalAdd,
  AnimalEdit,
  Farm,
  loader as farmLoader
} from '@/features/farm'
import { queryClient } from '@/lib'

export const AppRoutes: RouteObject = {
  path: '',
  element: <Outlet />,
  children: [
    {
      path: '',
      element: <Farm />,
      loader: farmLoader(queryClient),
      children: [
        {
          path: 'add',
          element: <AnimalAdd />
        },
        {
          path: ':id',
          element: <Outlet />,
          children: [
            {
              path: 'edit',
              element: <AnimalEdit />
            }
          ]
        }
      ]
    }
  ]
}
