'use client'

import { useUser } from '@/hooks'
import Link from 'next/link'

import { Button } from '@/components/ui'
import SigninDialog from '@/components/layout/signin-dialog'

export default function ProfilePage() {
  const { data } = useUser()

  if (!data) {
    return (
      <div>
        <section className='space-y-2'>
          <h2 className='font-semibold'>You haven't logged in</h2>
          <SigninDialog>
            <Button>Login now</Button>
          </SigninDialog>
          <Link href='/api/auth/signin?callbackUrl=/profile'></Link>
        </section>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      <section>
        <img src={data.user.image} alt='' className='rounded' />
        <h2 className='font-semibold'>Info</h2>
        <p>Name: {data.user.name}</p>
        <p>Email: {data.user.email}</p>
      </section>
      <section>
        <p className='font-semibold'>Raw data</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    </div>
  )
}
