'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'components/ui/button'
import { Textarea } from 'components/ui/textarea'
import { Input } from 'components/ui/input'
import { AlertCircle, Loader2 } from 'lucide-react'
import { postSchema } from 'app/schemasValidations'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from 'components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import axios from 'axios'
import { Alert, AlertTitle } from 'components/ui/alert'
import useFetch from 'http-react'

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

      <form onSubmit={onSubmit} className='w-2/3 space-y-6'>
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
                <Textarea className='min-h-[200px]' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type='submit'>
          {isSubmitting && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          Create Post
        </Button>
      </form>
    </Form>
  )
}
