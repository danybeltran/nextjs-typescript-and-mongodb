'use client'
import { atom, useAtom } from 'atomic-state'

type ThemeType = 'light' | 'dark'

type ThemeActions = {
  toggle: any
}

const themeState = atom<ThemeType, ThemeActions>({
  key: 'theme',
  persist: true,
  default: 'light',
  actions: {
    toggle({ dispatch }) {
      dispatch(prev => {
        const newTheme = prev === 'light' ? 'dark' : 'light'
        return newTheme
      })
    }
  }
})

export const useTheme = () => useAtom(themeState)
