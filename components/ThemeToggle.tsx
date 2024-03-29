'use client'
import { IconType } from 'react-icons'
import { LuMoon, LuSun, LuMonitor } from 'react-icons/lu'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const nextTheme = {
    light: 'dark',
    dark: 'system',
    system: 'light'
  }

  const ThemeIcon = {
    light: LuSun,
    dark: LuMoon,
    system: LuMonitor
  }[theme as string] as IconType

  return (
    <Button
      variant='ghost'
      className='rounded-full'
      size='icon'
      onClick={() => {
        const newTheme = nextTheme[theme as string]

        setTheme(newTheme)
      }}
    >
      <ThemeIcon className='text-xl' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
