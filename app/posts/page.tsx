'use client'
import Link from 'next/link'
import { Types } from 'types'
import { Button } from 'components/ui/button'
import PostCard from './_components/PostCard'
import useFetch from 'http-react'
import { ArrowLeft } from 'lucide-react'

export default function Posts() {
  const { data, loadingFirst, error } = useFetch<Types.Post[]>('/posts', {
    default: []
  })

  if (loadingFirst)
    return <p className='text-2xl font-semibold py-4'>Loading posts...</p>

  if (error)
    return <p className='text-2xl text-red-400 py-4'>Failed to fetch posts</p>

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
      <div className='py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 rounded-md'>
        {data.map(post => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  )
}
