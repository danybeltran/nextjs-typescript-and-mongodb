'use client'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useObject } from 'react-kuh'

import Link from 'next/link'
import Icon from 'bs-icon'
import useFetch, { serialize } from 'http-react'

import Header from 'components/Header'
import Input from 'components/Input'

export default function Create() {
  const router = useRouter()

  const [post, setPost] = useObject({
    title: '',
    content: ''
  })

  const newPostDate = useMemo(() => Date.now(), [post])

  const newPost = {
    ...post,
    date: newPostDate
  }

  // This is not automatic, this is a mutation
  const { reFetch: savePost } = useFetch('/posts', {
    auto: false,
    method: 'POST',
    body: { ...newPost, _id: undefined },
    onResolve() {
      router.back()
    }
  })

  return (
    <div>
      <Link href='/posts' className='btn gap-x-2 btn-ghost'>
        <Icon name='arrow-left' className='text-xl' /> Back
      </Link>
      <Header>Add post</Header>
      <div className='flex flex-wrap w-full md:w-96 items-center justify-center space-y-2'>
        <div className='w-full'>
          <Input
            value={post.title}
            name='title'
            onChange={e =>
              setPost.write({
                title: e.target.value
              })
            }
            placeholder='Title'
          />
        </div>
        <div className='w-full'>
          <textarea
            placeholder='Content'
            className='textarea textarea-bordered h-32 resize-none w-full'
            name='content'
            onChange={e =>
              setPost.write({
                content: e.target.value
              })
            }
          ></textarea>
        </div>
        <div className='w-full text-center'>
          <button onClick={savePost} className='btn gap-x-2'>
            <span>Save</span>
            <Icon name='disc' className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}
