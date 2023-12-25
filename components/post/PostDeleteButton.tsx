'use client'
import useFetch from 'http-react'
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

interface Props {
  postId: string
}

const PostDeleteButton = ({ postId }: Props) => {
  const router = useRouter()

  const { reFetch: handleDelete, loading: isDeleting } = useFetch(
    '/posts/[postId]',
    {
      method: 'DELETE',
      id: {
        postId
      },
      auto: false,
      params: {
        postId
      },
      onResolve() {
        router.replace('/posts')
        router.refresh()
      },
      onError(err) {
        console.log(err)
      }
    }
  )

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={isDeleting}
          className='w-80 lg:w-full'
          size='sm'
          variant='outline'
        >
          {isDeleting && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
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
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default PostDeleteButton
