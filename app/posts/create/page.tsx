'use client'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useObject } from 'react-kuh'

import Link from 'next/link'
import Icon from 'bs-icon'
import useFetch from 'http-react'

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

  const { reFetch: savePost } = useFetch('/posts', {
    auto: false,
    method: 'POST',
    body: JSON.stringify({ ...newPost, _id: undefined }),
    onResolve() {
      router.back()
    }
  })

  return (
    <div>
      <Link
        href='/posts'
        className='bg-red-400 inline-block px-2 rounded-md py-1 text-white cursor-pointer'
      >
        <Icon name='arrow-left' /> Back
      </Link>
      <Header>Add post</Header>
      <div className='flex flex-wrap w-full md:w-64 items-center justify-center space-y-2'>
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
            className='border-2 border-gray-300 w-full px-3 py-1.5 rounded-md shadow-md focus:border-gray-400 resize-none'
            name='content'
            onChange={e =>
              setPost.write({
                content: e.target.value
              })
            }
          ></textarea>
        </div>
        <div className='w-full text-center'>
          <button
            onClick={savePost}
            className='px-3 py-1.5 bg-blue-400 text-white rounded-md'
          >
            Save <Icon name='disc' />
          </button>
        </div>
      </div>
    </div>
  )
}
