import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { prisma } from 'server'
import PostDeleteButton from '../_components/PostDeleteButton'
import PostDetails from '../_components/PostDetails'

interface Params {
  params: { id: string }
}

const fetchPost = cache((postId: string) =>
  prisma.post.findUnique({ where: { id: postId } })
)

const PostDetailsPage = async ({ params: { id } }: Params) => {
  const post = await fetchPost(id)
  if (!post) notFound()

  return (
    <section>
      <Link href='/posts' className='flex gap-1 items-center '>
        <ArrowLeft size={18} />
        Back
      </Link>
      <div className='max-w-4xl gap-2 mt-4 mx-auto flex flex-col lg:flex-row'>
        <div className='flex-[10]'>
          <PostDetails post={post} />
        </div>
        <div className='flex-[2] flex justify-center'>
          <PostDeleteButton postId={id} />
        </div>
      </div>
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
