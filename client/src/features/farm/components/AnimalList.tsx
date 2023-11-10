import { useAnimalList } from '../api'
import { AnimalItem } from './AnimalItem'

export function AnimalList() {
  const { data } = useAnimalList()

  return (
    <>
      {data.length === 0 && (
        <h4 className='text-base text-center text-gray-800 mt-2'>
          Your farm is very empty. Add some animals!
        </h4>
      )}
      {data.map(animal => (
        <AnimalItem key={animal.id} animal={animal} />
      ))}
    </>
  )
}
