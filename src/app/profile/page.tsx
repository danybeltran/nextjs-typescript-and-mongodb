'use client'

import { usePreferences, useUser } from '@/hooks'
import Link from 'next/link'

import { Button } from '@/components/ui'
import SigninDialog from '@/components/layout/signin-dialog'
import { revalidate } from 'atomic-utils'
import UpdateProfile from './update-profile'

export default function ProfilePage() {
  const { data: user } = useUser()
  const { data: preferences } = usePreferences()

  if (!user) {
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
      <Button onClick={() => revalidate('User')}>Refresh</Button>
      <section>
        <img
          src={preferences.user_profile_picture}
          alt=''
          className='rounded'
        />
        <p>
          <b>Name</b>: {preferences.user_fullname}
        </p>
        <p>
          <b>Email</b>: {preferences.user_email}
        </p>
        <div>
          <b>Bio</b>: <br />
          <p className='whitespace-pre-line'>{preferences.user_description}</p>
        </div>
      </section>
      <UpdateProfile />
      <section>
        <p className='font-semibold'>Raw data</p>
        <pre>{JSON.stringify({ user, preferences }, null, 2)}</pre>
      </section>
    </div>
  )
}
