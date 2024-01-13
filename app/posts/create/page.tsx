import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import PostForm from '@/components/post/PostForm'

export default function Create() {
  return (
    <section>
      <Link href='/posts' className='flex gap-1 items-center '>
        <ArrowLeft size={18} />
        Back
      </Link>
      <div className='max-w-3xl mx-auto'>
        <header className='my-4 md:my-8'>
          <h1 className='font-bold text-2xl'>Add Post</h1>
        </header>
        <PostForm />
      </div>
    </section>
  )
}
