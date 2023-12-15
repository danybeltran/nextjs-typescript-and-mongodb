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
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

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
        <article className='text-sm prose prose-stone dark:prose-invert line-clamp-1'>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button size='sm' variant='outline' asChild>
          <Link href={`/posts/${post.id}`}>View Post</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
export default PostCard
