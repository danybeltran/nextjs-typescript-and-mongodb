'use client'
import { atom, useAtom } from 'atomic-state'

export const themeState = atom({
  key: 'theme',
  persist: true,
  default: 'light' as 'light' | 'dark',
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
