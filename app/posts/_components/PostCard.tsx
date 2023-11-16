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
import PostDeleteButton from './PostDeleteButton'

type Post = {
  id: string
  title: string
  date: Date
  content: string
}

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
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
        <PostDeleteButton postId={post.id} />
      </CardFooter>
    </Card>
  )
}
export default PostCard
