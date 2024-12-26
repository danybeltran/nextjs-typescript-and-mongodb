'use client'

import { IoIosLogIn } from 'react-icons/io'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogFooter
} from '@/components/ui'

import Link from 'next/link'
import { useUser } from '@/hooks'
import { useSecondRender } from 'atomic-utils'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Icon from 'bs-icon'
import SigninDialog from './signin-dialog'

function getSigninUrl() {
  return '/api/auth/signin?callbackUrl=' + location.href
}

export default function AuthButton() {
  const { data } = useUser()
  const secondRender = useSecondRender()

  const [showSignoutDialog, setShowSignoutDialog] = useState(false)

  const signinUrl = secondRender ? getSigninUrl() : '/api/auth/signin'

  if (!data) {
    return (
      <SigninDialog>
        <Button size='icon' variant='ghost'>
          <IoIosLogIn className='text-2xl' />
        </Button>
      </SigninDialog>
    )
  }

  return (
    <>
      <AlertDialog open={showSignoutDialog} onOpenChange={setShowSignoutDialog}>
        <AlertDialogContent>
          <AlertDialogTitle>Sign out?</AlertDialogTitle>
          <AlertDialogDescription>
            You will be signed out of your account
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() =>
                signOut({
                  callbackUrl: location.href
                })
              }
            >
              <Icon name='box-arrow-left' />
              Sign out{' '}
            </AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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

          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() => setShowSignoutDialog(true)}
          >
            {/* <Link href='/api/auth/signout' className='w-full px-2 py-1.5'> */}
            Logout
            {/* </Link> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
