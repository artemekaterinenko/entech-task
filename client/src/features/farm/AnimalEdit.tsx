import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useAnimalData, useEditAnimal } from './api'
import { Animal, animalSchema } from './schema'

export function AnimalEdit() {
  const navigate = useNavigate()
  const animal = useAnimalData()

  const form = useForm<Animal>({
    resolver: zodResolver(animalSchema),
    defaultValues: animal
  })

  const { mutate } = useEditAnimal()

  const handleClose = () => {
    navigate('/')
  }

  const onSubmit = (values: Animal) => {
    mutate(values)
    handleClose()
  }

  return (
    <Dialog open onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit Animal</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Cow' {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter your updated animal name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type='submit' disabled={!form.formState.isDirty}>
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
