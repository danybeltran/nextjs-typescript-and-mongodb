'use client'
import Link from 'next/link'

import { ThemeToggle, AuthButton } from '@/components/layout'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from '@/components/ui'

import { usePathname } from 'next/navigation'
import { cn, RenderList } from 'atomic-utils'
import Icon from 'bs-icon'
import { useState } from 'react'

const NAVBAR_LINKS: {
  children: string
  href: string
  target?: string
  rel?: string
}[] = [
  {
    children: 'Posts',
    href: '/posts'
  },
  {
    children: 'Profile',
    href: '/profile'
  },
  {
    children: 'Github',
    href: 'https://github.com/danybeltran/nextjs-typescript-and-mongodb',
    target: '_blank',
    rel: 'noreferrer'
  }
]

const useGetLinksStyle = () => {
  const pathname = usePathname()
  return function getLinkStyles(href: string) {
    return cn('text-sm text-foreground/70 hover:text-foreground', {
      'text-blue-700 dark:text-blue-400 font-medium hover:text-blue-700':
        pathname.startsWith(href)
    })
  }
}

function MobileMenu() {
  const getLinkStyle = useGetLinksStyle()
  const [isOpen, setIsOpen] = useState(false)

  const hideMenu = () => setIsOpen(false)

  return (
    <div className='md:hidden'>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant='ghost' size='icon' className='rounded-full'>
            <Icon name='list' className='text-lg' />
          </Button>
        </DialogTrigger>
        <DialogContent className='h-full max-w-screen w-screen dark:bg-background/95 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/60'>
          <DialogTitle className='h-0 hidden'></DialogTitle>
          <DialogDescription className='h-0 hidden'></DialogDescription>
          <div className='flex flex-col items-center pt-16 gap-y-6'>
            <Link
              className='font-bold h-auto text-xl'
              href={'/'}
              onClick={hideMenu}
            >
              NEXT.JS
            </Link>

            <RenderList
              data={NAVBAR_LINKS}
              render={link => (
                <Link
                  key={'mobile' + link.href}
                  onClick={hideMenu}
                  className={cn(getLinkStyle(link.href), 'text-xl')}
                  {...link}
                />
              )}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function DesktopMenu() {
  const getLinkStyle = useGetLinksStyle()
  return (
    <div className='space-x-3 hidden md:inline-block'>
      <Link className='font-bold w-16 h-auto' href={'/'}>
        NEXT.JS
      </Link>
      <RenderList
        data={NAVBAR_LINKS}
        render={link => (
          <Link
            key={'desktop' + link.href}
            className={getLinkStyle(link.href)}
            {...link}
          />
        )}
      />
    </div>
  )
}

export default function Navbar() {
  return (
    <header className='border-b border-neutral-100 dark:border-inherit  sticky top-0 z-50 h-14 items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='max-w-screen-2xl mx-auto flex items-center h-full justify-between py-2 px-6 md:px-8'>
        <MobileMenu />
        <DesktopMenu />
        <div className='flex items-center gap-x-2'>
          <AuthButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
