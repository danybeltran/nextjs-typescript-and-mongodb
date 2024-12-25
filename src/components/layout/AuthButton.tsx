import { IoIosLogIn } from 'react-icons/io'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import { useUser } from '@/hooks'
import { useSecondRender } from 'atomic-utils'

function getSigninUrl() {
  return '/api/auth/signin?callbackUrl=' + location.href
}

export default function AuthButton() {
  const { data } = useUser()
  const secondRender = useSecondRender()

  const signinUrl = secondRender ? getSigninUrl() : '/api/auth/signin'

  if (!data) {
    return (
      <Link href={signinUrl}>
        <Button size='icon' variant='ghost'>
          <IoIosLogIn className='text-2xl' />
        </Button>
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='w-8 h-8'>
          <AvatarImage src={data.user.image} alt='@shadcn' />
          <AvatarFallback>
            <img src={data.user.image} alt='' />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{data?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-0'>
          <Link href='/api/auth/signout' className='w-full px-2 py-1.5'>
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
