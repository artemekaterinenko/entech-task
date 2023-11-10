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

import { useAddAnimal } from './api'
import { animalAddFormSchema, AnimalAddFormValues } from './schema'

export function AnimalAdd() {
  const navigate = useNavigate()

  const form = useForm<AnimalAddFormValues>({
    resolver: zodResolver(animalAddFormSchema),
    defaultValues: {
      name: ''
    }
  })

  const { mutate } = useAddAnimal()

  const handleClose = () => {
    navigate('/')
  }

  const onSubmit = (values: AnimalAddFormValues) => {
    mutate(values)
    handleClose()
  }

  return (
    <Dialog open onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Animal</DialogTitle>
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
                  <FormDescription>This is your animal name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type='submit'>Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
