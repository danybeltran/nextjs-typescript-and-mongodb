'use client'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '../components/ui/navigation-menu'
import { cn } from 'libs/utils'

const Navbar = () => {
  return (
    <header className='bg-white dark:bg-slate-900 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between py-2 px-4'>
        <Link className='font-bold text-lg' href={'/'}>
          Next.js
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/posts' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'font-medium')}
                >
                  Posts
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
export default Navbar
