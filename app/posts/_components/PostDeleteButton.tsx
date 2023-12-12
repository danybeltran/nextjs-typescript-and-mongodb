'use client'

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
} from '../../../components/ui/alert-dialog'
import { Button } from '../../../components/ui/button'
import axios from 'axios'

interface Props {
  postId: string
}

const PostDeleteButton = ({ postId }: Props) => {
  const router = useRouter()

  const handleDelete = async () => {
    try {
      const res = await axios.delete('api/posts/' + postId)
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='sm' variant='outline'>
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your psot
            from our servers.
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
