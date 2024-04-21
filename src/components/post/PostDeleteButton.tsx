'use client'
import { useServerAction } from 'http-react'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import { deletePost } from './actions'

interface Props {
  postId: string
}

export default function PostDeleteButton({ postId }: Props) {
  const router = useRouter()

  const { reFetch, loading } = useServerAction(deletePost, {
    params: postId,
    auto: false,
    onResolve: () => router.replace('/posts')
  })

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={loading}
          className='w-80 lg:w-full'
          size='sm'
          variant='outline'
        >
          {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this post?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={reFetch}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
