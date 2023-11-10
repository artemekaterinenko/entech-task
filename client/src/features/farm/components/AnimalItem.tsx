import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { useDeleteAnimal } from '../api'
import { Animal } from '../schema'

type AnimalItemProps = {
  animal: Animal
}

export function AnimalItem({ animal }: AnimalItemProps) {
  const { mutate } = useDeleteAnimal()

  return (
    <div
      data-testid='animal-item'
      className='flex justify-between items-center'
    >
      <span className='font-medium'>{animal.name}</span>
      <div className='flex gap-2'>
        <Button variant='destructive' onClick={() => mutate(animal.id)}>
          Delete
        </Button>
        <Link to={`${animal.id}/edit`}>
          <Button variant='default'>Edit</Button>
        </Link>
      </div>
    </div>
  )
}
