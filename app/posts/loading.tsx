import PostCardSkeleton from 'components/post-card-skeleton'
import { Button } from 'components/ui/button'
import { ArrowLeft } from 'lucide-react'

const Loading = () => {
  return (
    <section>
      <div className='flex gap-1 items-center '>
        <ArrowLeft size={18} />
        Back
      </div>
      <header className='flex items-center justify-between my-4 md:my-8'>
        <h1 className='font-bold text-2xl'>All Posts</h1>
        <Button size='sm' variant='outline'>
          Create Post
        </Button>
      </header>
      <div className='py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 rounded-md'>
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </section>
  )
}
export default Loading
