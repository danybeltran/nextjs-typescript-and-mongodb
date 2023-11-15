import { getDate } from 'libs/getDate'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../../components/ui/card'

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='line-clamp-1'>{post.title}</CardTitle>
        <CardDescription>{getDate(post.date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-2'>{post.content}</p>
      </CardContent>
    </Card>
  )
}
export default PostCard
