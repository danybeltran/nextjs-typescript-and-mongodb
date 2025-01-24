'use client'

import Menu from './menu'

export default function Navbar() {
  return (
    <header className='border-b border-neutral-100 dark:border-inherit  sticky top-0 z-50 h-14 items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='max-w-screen-2xl mx-auto flex items-center h-full justify-between py-2 px-6 md:px-8'>
        <Menu />
      </div>
    </header>
  )
}
