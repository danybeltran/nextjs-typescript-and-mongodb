'use client'
import Link from 'next/link'

import { ThemeToggle, AuthButton } from '@/components/layout'
import { usePathname } from 'next/navigation'
import { cn } from 'atomic-utils'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className='border-b border-opacity-10 sticky top-0 z-50 h-14 items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='max-w-screen-2xl mx-auto flex items-center justify-between py-2 px-6 md:px-8'>
        <div className='space-x-3'>
          <Link className='font-bold w-16 h-auto' href={'/'}>
            NEXT.JS
          </Link>
          <Link
            href='/posts'
            className={cn('text-sm text-foreground/70 hover:text-foreground', {
              'text-blue-700 dark:text-blue-400 font-medium hover:text-blue-700 ':
                pathname.startsWith('/posts')
            })}
          >
            Posts
          </Link>
          <Link
            href='/profile'
            className={cn('text-sm text-foreground/70 hover:text-foreground', {
              'text-blue-700 dark:text-blue-400 font-medium hover:text-blue-700 ':
                pathname.startsWith('/profile')
            })}
          >
            Profile
          </Link>
          <Link
            href='https://github.com/danybeltran/nextjs-typescript-and-mongodb'
            target='_blank'
            rel='noreferrer'
            className='text-sm text-foreground/70 hover:text-foreground'
          >
            Github
          </Link>
        </div>

        <div className='flex items-center gap-x-2'>
          <AuthButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
