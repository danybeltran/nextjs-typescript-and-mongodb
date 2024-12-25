import { formatDate } from '@/lib/utils'
import { Types } from '@/types'

interface PostDetails {
  post: Types.Post
}

export default function PostDetails({ post }: PostDetails) {
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
          Created on {formatDate(post.date)}
        </time>
      </header>

      <article className='my-8 sm:text-lg prose prose-stone dark:prose-invert'>
        {post.content}
      </article>
    </section>
  )
}
