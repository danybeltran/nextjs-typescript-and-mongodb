import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'
import { Skeleton } from './ui/skeleton'

const PostCardSkeleton = () => {
  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle className='line-clamp-1 '>
          <Skeleton className='h-6 w-4/5' />
        </CardTitle>
        <CardDescription>
          <Skeleton className='h-5 w-[128px]' />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-6 w-full' />
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Skeleton className='h-9 w-[69.5px] rounded-md' />
      </CardFooter>
    </Card>
  )
}
export default PostCardSkeleton
