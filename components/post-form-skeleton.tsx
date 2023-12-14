import { Skeleton } from './ui/skeleton'

const PostFormSkeleton = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <span className='text-sm font-medium'>Title</span>
        <Skeleton className='h-10 rounded-md' />
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-sm font-medium'>Description</span>
        <Skeleton className='h-[405px] rounded-md' />
      </div>
      <div className='flex justify-end'>
        <Skeleton className='h-10 w-[110.5px] rounded-md' />
      </div>
    </div>
  )
}
export default PostFormSkeleton
