import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function PostCardSkeleton() {
  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle>
          <Skeleton className='h-5 w-4/5' />
        </CardTitle>
        <Skeleton className='h-3.5 w-[128px]' />
      </CardHeader>
      <CardContent>
        <Skeleton className='h-3.5 w-full mb-1' />
        <Skeleton className='h-3.5 w-full' />
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Skeleton className='h-8 w-20 rounded-md' />
      </CardFooter>
    </Card>
  )
}
