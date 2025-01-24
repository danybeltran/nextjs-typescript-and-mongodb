'use client'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button
} from '@/components/ui'
import { formatDate } from '@/lib/utils'
import { Types } from '@/types'

export default function PostCard({ post }: { post: Types.Post }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{formatDate(post.date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <article className='text-sm prose prose-stone dark:prose-invert'>
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
