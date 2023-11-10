import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Link, Outlet } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { AnimalList } from './components'

export function Farm() {
  const [animationParent] = useAutoAnimate()

  return (
    <div className='container max-w-2xl  mx-auto my-8'>
      <div ref={animationParent} className='flex flex-col gap-4 m-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold'>Animals List</h1>
          <Link to='add'>
            <Button variant='outline'>Add Animal</Button>
          </Link>
        </div>
        <AnimalList />
      </div>
      <Outlet />
    </div>
  )
}
