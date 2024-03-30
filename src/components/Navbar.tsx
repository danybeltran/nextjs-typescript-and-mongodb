'use client'
import Link from 'next/link'
import { BrowserOnly } from 'react-kuh'

import { ThemeToggle } from '@/components/ThemeToggle'
import AuthButton from '@/components/AuthButton'

export default function Navbar() {
  return (
    <header className='border-b border-opacity-10 backdrop-blur-lg bg-opacity-70 sticky top-0 z-50'>
      <div className='max-w-screen-2xl mx-auto flex items-center justify-between py-2 px-6 md:px-8'>
        <div className='space-x-3'>
          <Link className='font-bold text-lg w-16 h-auto' href={'/'}>
            NEXT.JS
          </Link>
          <Link href='/posts'>Posts</Link>
          <Link
            href='https://github.com/danybeltran/nextjs-typescript-and-mongodb'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </Link>
        </div>

        <div className='flex items-center gap-x-2'>
          <AuthButton />
          <BrowserOnly>
            <ThemeToggle />
          </BrowserOnly>
        </div>
      </div>
    </header>
  )
}
