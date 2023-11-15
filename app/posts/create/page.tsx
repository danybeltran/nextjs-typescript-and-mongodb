'use client'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useObject } from 'react-kuh'

import Link from 'next/link'
import Icon from 'bs-icon'
import { useManualFetch } from 'http-react'

import Header from 'components/Header'
import { Button } from 'components/ui/button'
import { Textarea } from 'components/ui/textarea'
import { Input } from 'components/ui/input'
import { Label } from 'components/ui/label'
import { ArrowLeft } from 'lucide-react'

export default function Create() {
  const router = useRouter()

  const [post, setPost] = useObject({
    title: '',
    content: ''
  })

  const newPostDate = useMemo(() => Date.now(), [post])

  const newPost = {
    ...post,
    date: new Date(newPostDate).toISOString()
  }

  const { reFetch: savePost } = useManualFetch('/posts', {
    method: 'POST',
    body: { ...newPost, _id: undefined },
    onResolve() {
      router.back()
    }
  })

  return (
    <section>
      <Link href='/posts' className='flex gap-1 items-center '>
        <ArrowLeft size={18} />
        <Icon name='arrow-left' className='text-xl' /> Back
      </Link>
      <div className='max-w-3xl mx-auto'>
        <header className='my-8'>
          <h1 className='font-bold text-2xl'>Add Post</h1>
        </header>

        <div className='flex flex-col space-y-4 '>
          <div className='w-full flex flex-col gap-2'>
            <Label>Title</Label>
            <Input
              value={post.title}
              name='title'
              onChange={e =>
                setPost.setPartialValue({
                  title: e.target.value
                })
              }
            />
          </div>
          <div className='w-full flex flex-col gap-2'>
            <Label>Description</Label>
            <Textarea
              className='min-h-[200px]'
              name='content'
              onChange={e =>
                setPost.setPartialValue({
                  content: e.target.value
                })
              }
            ></Textarea>
          </div>
          <div className='w-full text-center'>
            <Button onClick={savePost} size='sm'>
              <span>Craete Post</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
