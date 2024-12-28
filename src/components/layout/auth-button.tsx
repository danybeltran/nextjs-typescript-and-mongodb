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

export default function AuthButton() {
  const { data } = useUser()

  const [showSignoutDialog, setShowSignoutDialog] = useState(false)

  if (!data) {
    return (
      <SigninDialog>
        <button className='rounded-full text-xl p-2'>
          <IoIosLogIn />
        </button>
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
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                signOut({
                  callbackUrl: location.href
                })
              }
            >
              Sign out
              <Icon name='box-arrow-right' />
            </AlertDialogAction>
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
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
