import { useMutation, useQuery } from '@tanstack/react-query'
import { useLoaderData, useParams } from 'react-router-dom'

import { queryClient } from '@/lib'
import { API } from '@/lib/api'
import { RouteLoader } from '@/types'

import { farmKeys } from './queryKeys'
import { Animal, AnimalAddFormValues, animalSchema } from './schema'

async function fetchAnimalList() {
  const data = await API.get('/animal/').json()
  return animalSchema.array().parse(data).reverse()
}

async function addAnimal(animal: AnimalAddFormValues) {
  const data = await API.url('/animal/').post(animal).json()
  return animalSchema.parse(data)
}

async function editAnimal(animal: Animal) {
  const data = await API.url(`/animal/${animal.id}/`).put(animal).json()
  return animalSchema.parse(data)
}

async function deleteAnimal(id: number) {
  const data = await API.url(`/animal/${id}/`).delete().res()
  return data
}

export const loader: RouteLoader<Animal[]> = queryClient => () =>
  queryClient.ensureQueryData({
    queryKey: farmKeys.animalList,
    queryFn: fetchAnimalList
  })

export const useAnimalList = () => {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof loader>>
  >
  return useQuery({
    queryKey: farmKeys.animalList,
    queryFn: fetchAnimalList,
    initialData
  })
}

export const useAnimalData = () => {
  const params = useParams()

  const animals: Animal[] | undefined = queryClient.getQueryData(
    farmKeys.animalList
  )
  return animals?.find(animal => animal.id === Number(params.id))
}

export const useAddAnimal = () => {
  return useMutation({
    mutationFn: addAnimal,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: farmKeys.animalList
      })
    }
  })
}

export const useEditAnimal = () => {
  return useMutation({
    mutationFn: editAnimal,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: farmKeys.animalList
      })
    }
  })
}

export const useDeleteAnimal = () => {
  return useMutation({
    mutationFn: deleteAnimal,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: farmKeys.animalList
      })
    }
  })
}
