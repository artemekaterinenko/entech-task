import { z } from 'zod'

export const animalAddFormSchema = z.object({
  name: z.string().min(1).max(100)
})

export const animalSchema = animalAddFormSchema.extend({
  id: z.number()
})

export type AnimalAddFormValues = z.infer<typeof animalAddFormSchema>
export type Animal = z.infer<typeof animalSchema>
