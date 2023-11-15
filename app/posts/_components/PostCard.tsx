'use client'
import { getDate } from 'libs/getDate'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../../components/ui/card'
import { Button } from 'components/ui/button'
import useFetch, { revalidate } from 'http-react'
interface Props {
  post: Post
}

function confirmPostDelete(id: any) {
  const confirmation = confirm('Do you want to remove this post?')
  if (confirmation) {
    revalidate(id)
  }
}

const PostCard = ({ post }: Props) => {
  const fetchID = ['delete', post.id].join('-')

  useFetch('/posts', {
    id: fetchID,
    method: 'DELETE',
    query: {
      id: post.id
    },
    onResolve() {
      revalidate('GET /posts')
    }
  })

  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle className='line-clamp-1 '>{post.title}</CardTitle>
        <CardDescription>{getDate(post.date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-2'>{post.content}</p>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button
          onClick={() => confirmPostDelete(fetchID)}
          size='sm'
          variant='outline'
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
export default PostCard
