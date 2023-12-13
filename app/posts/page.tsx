import Link from 'next/link'
import { Button } from 'components/ui/button'
import PostCard from './_components/PostCard'
import { ArrowLeft } from 'lucide-react'
import { prisma } from 'server'
import { headers } from 'next/headers'

export const revalidate = 0

export default async function Posts() {
  headers()

  const posts = (await prisma.post.findMany({})).reverse()

  return (
    <section>
      <Link href='/' className='flex gap-1 items-center '>
        <ArrowLeft size={18} />
        Back
      </Link>
      <header className='flex items-center justify-between my-4 md:my-8'>
        <h1 className='font-bold text-2xl'>All Posts</h1>
        <Link href='/posts/create'>
          <Button size='sm' variant='outline'>
            Create Post
          </Button>
        </Link>
      </header>
      <div className='py-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-2 rounded-md'>
        {posts.map(post => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  )
}
