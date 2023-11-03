'use client'
import Link from 'next/link'
import useFetch, { revalidate } from 'http-react'
import Icon from 'bs-icon'

import Header from 'components/Header'
import { Types } from 'types'

function confirmPostDelete(id: any) {
  const confirmation = confirm('Do you want to remove this post?')
  if (confirmation) {
    revalidate(id)
  }
}

function Post(props: Partial<Types.Post>) {
  const fetchID = ['delete', props.id].join('-')

  useFetch('/posts', {
    id: fetchID,
    method: 'DELETE',
    query: {
      id: props.id
    },
    onResolve() {
      revalidate('GET /posts')
    }
  })

  return (
    <div
      style={{
        transition: '0.12s'
      }}
      className='card p-4 relative break-words rounded-lg hover:border-neutral-400 card-bordered m-4'
      key={`post-${props.id}`}
    >
      <button
        className='btn btn-ghost font-semibold absolute top-1 right-1 cursor-pointer'
        onClick={() => confirmPostDelete(fetchID)}
      >
        <Icon name='trash' className='text-xl' />
      </button>
      <b className='my-2'>{props.title}</b>
      <br />
      <p className='my-4'>{props.content}</p>
    </div>
  )
}

export default function Posts() {
  const { data, loadingFirst, error } = useFetch<Types.Post[]>('/posts', {
    default: []
  })

  if (loadingFirst)
    return <p className='text-2xl font-semibold py-4'>Loading posts...</p>

  if (error)
    return <p className='text-2xl text-red-400 py-4'>Failed to fetch posts</p>

  return (
    <div>
      <Header>Your posts ({data.length})</Header>
      <div className='flex space-x-4'>
        <Link href='/' className='btn gap-x-2 btn-ghost'>
          <Icon name='arrow-left' className='text-xl' /> Back
        </Link>
        <Link href='/posts/create' className='btn gap-x-2'>
          Add one post <Icon name='plus' className='text-xl' />
        </Link>
      </div>
      <div className='py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 rounded-md'>
        {data.map(post => (
          <Post {...post} key={`post-${post.id}`} />
        ))}
      </div>
    </div>
  )
}
