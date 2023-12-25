'use client'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import useFetch from 'http-react'
import { z } from 'zod'
import 'easymde/dist/easymde.min.css'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { postSchema } from '@/app/schemasValidations'
import { Alert, AlertTitle } from '@/components/ui/alert'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

type FormSchema = z.infer<typeof postSchema>

export default function PostForm() {
  const router = useRouter()

  const form = useForm<FormSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      content: ''
    }
  })

  const {
    reFetch: submitPost,
    loading: isSubmitting,
    error
  } = useFetch('/posts', {
    method: 'POST',
    auto: false,
    body: form.getValues(),
    onResolve() {
      router.replace('/posts')
      router.refresh()
    }
  })

  const onSubmit = form.handleSubmit(submitPost)

  return (
    <Form {...form}>
      {error && (
        <Alert className='mb-4' variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>An error ocurred</AlertTitle>
        </Alert>
      )}

      <form onSubmit={onSubmit} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none'
                  {...field}
                  onChange={e => {
                    const heightOffset = 3
                    e.currentTarget.style.height = 'auto'
                    e.currentTarget.style.height =
                      e.currentTarget.scrollHeight + heightOffset + 'px'

                    field.onChange(e)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-end'>
          <Button disabled={isSubmitting} type='submit'>
            {isSubmitting && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Create Post
          </Button>
        </div>
      </form>
    </Form>
  )
}
