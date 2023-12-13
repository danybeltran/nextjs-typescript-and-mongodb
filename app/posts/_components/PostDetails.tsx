import { Post } from '@prisma/client'
import { getDate } from 'libs/getDate'

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
          Published on {getDate(post.date)}
        </time>
      </header>

      <article className='my-8 sm:text-lg'>{post.content}</article>
    </section>
  )
}
export default PostDetails
