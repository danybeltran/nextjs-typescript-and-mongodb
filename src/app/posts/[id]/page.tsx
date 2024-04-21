import { cache } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import PostDeleteButton from '@/components/post/PostDeleteButton'
import PostDetails from '@/components/post/PostDetails'

import { prisma } from '@/lib/prisma'

export async function generateMetadata(props: PostPageProps) {
  const post = await getPost(props)

  return {
    title: 'Post: ' + post?.title,
    description: 'Details for post ' + post?.id
  }
}

export default async function PostDetailsPage(props: PostPageProps) {
  const post = await getPost(props)

  return (
    <section>
      <Link href='/posts' className='flex gap-1 items-center max-w-min'>
        <ArrowLeft size={18} />
        Back
      </Link>
      {post ? (
        <div className='max-w-4xl gap-2 mt-4 mx-auto flex flex-col lg:flex-row'>
          <div className='flex-[10]'>
            <PostDetails post={post} />
          </div>
          <div className='flex-[2] flex justify-center'>
            <PostDeleteButton postId={props.params.id} />
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center h-72'>
          Post not found
        </div>
      )}
    </section>
  )
}

const getPost = cache((props: PostPageProps) => {
  try {
    return prisma.post.findFirst({
      where: {
        id: props.params.id
      }
    })
  } catch (err) {
    return null
  }
})

interface PostPageProps {
  params: { id: string }
}
