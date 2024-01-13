import { cache } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { prisma } from 'server'

import PostDeleteButton from '@/components/post/PostDeleteButton'
import PostDetails from '@/components/post/PostDetails'

interface Params {
  params: { id: string }
}

const fetchPost = cache((postId: string) => {
  if (postId.length >= 25) {
    return null
  }
  try {
    return prisma.post.findFirst({ where: { id: postId } })
  } catch (err) {
    return null
  }
})

const PostDetailsPage = async ({ params: { id } }: Params) => {
  const post = await fetchPost(id)

  return (
    <section>
      <Link href='/posts' className='flex gap-1 items-center '>
        <ArrowLeft size={18} />
        Back
      </Link>
      {post ? (
        <div className='max-w-4xl gap-2 mt-4 mx-auto flex flex-col lg:flex-row'>
          <div className='flex-[10]'>
            <PostDetails post={post} />
          </div>
          <div className='flex-[2] flex justify-center'>
            <PostDeleteButton postId={id} />
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

export async function generateMetadata({ params }: Params) {
  const post = await fetchPost(params.id)

  return {
    title: post?.title,
    description: 'Details of issue ' + post?.id
  }
}

export default PostDetailsPage
