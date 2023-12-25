import ReactMarkdown from 'react-markdown'
import { Post } from '@prisma/client'

import { formatDate } from '@/libs/getDate'

interface Props {
  post: Post
}

const PostDetails = ({ post }: Props) => {
  return (
    <section>
      <header>
        <h1 className='mb-2 inline-block font-bold text-2xl md:text-3xl leading-snug lg:text-4xl'>
          {post.title}
        </h1>

        <time
          dateTime={post.date.toDateString()}
          className='block text-sm text-muted-foreground'
        >
          Published on {formatDate(post.date)}
        </time>
      </header>

      <article className='my-8 sm:text-lg prose prose-stone dark:prose-invert'>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </section>
  )
}
export default PostDetails
