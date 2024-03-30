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

import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function AuthButton() {
  const { data } = useSession()
  return data?.user ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='w-8 h-8'>
          <AvatarImage src={data?.user?.image!} alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{data?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/api/auth/signout'>Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link href='/api/auth/signin'>
      <Button size='icon' variant='ghost'>
        <IoIosLogIn className='text-2xl' />
      </Button>
    </Link>
  )
}
