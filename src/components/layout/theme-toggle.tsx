'use client'
import { IconType } from 'react-icons'
import { LuMoon, LuSun, LuMonitor } from 'react-icons/lu'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import Cookies from 'js-cookie'
import { create } from 'atomic-utils'

const useServerTheme = create<string>({
  key: 'server-theme'
})

export function ThemeToggle() {
  const [serverTheme] = useServerTheme()

  const { setTheme, theme = serverTheme } = useTheme()

  const nextTheme: any = {
    light: 'dark',
    dark: 'system',
    system: 'light'
  }

  const ThemeIcon = {
    undefined: LuSun,
    light: LuSun,
    dark: LuMoon,
    system: LuMonitor
  }[theme] as IconType

  return (
    <Button
      variant='ghost'
      className='rounded-full'
      size='icon'
      suppressHydrationWarning
      onClick={() => {
        const newTheme = nextTheme[theme as string]
        Cookies.set('theme', newTheme)
        setTheme(newTheme)
      }}
    >
      {/* <BrowserOnly> */}
      <ThemeIcon className='text-xl' />
      {/* </BrowserOnly> */}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
