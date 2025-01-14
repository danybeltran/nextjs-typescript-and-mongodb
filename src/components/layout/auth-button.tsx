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
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogFooter
} from '@/components/ui'

import { usePreferences, useUser } from '@/hooks'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Icon from 'bs-icon'
import SigninDialog from './signin-dialog'

export default function AuthButton() {
  const { data: user } = useUser()
  const { data: preferences } = usePreferences()

  const [showSignoutDialog, setShowSignoutDialog] = useState(false)

  if (!user) {
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
            <AvatarImage src={preferences.user_profile_picture} alt='@shadcn' />
            <AvatarFallback>
              <img src={preferences.user_profile_picture} alt='' />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{preferences.user_fullname}</DropdownMenuLabel>
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
