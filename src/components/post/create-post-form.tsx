'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useServerAction } from 'atomic-utils'
import { AlertCircle, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Types } from '@/types'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Alert,
  AlertTitle,
  Button,
  Input,
  Textarea
} from '@/components/ui'

import { postSchema } from '@/schemas'
import { createPost } from '@/app/posts/actions'

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

  // To learn how to use the `useMutation` hook with server actions
  // visit https://httpr.vercel.app/docs/server_actions#server-mutations

  const { refresh, loading, error } = useServerAction(createPost, {
    params: form.getValues(),
    onResolve(data: Types.Post) {
      router.replace('/posts/' + data.id)
    }
  })

  const onSubmit = form.handleSubmit(refresh)

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
                <Input placeholder='Post title' {...field} />
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
                  placeholder='Post description'
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
          <Button disabled={loading} type='submit'>
            {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Create Post
          </Button>
        </div>
      </form>
    </Form>
  )
}
