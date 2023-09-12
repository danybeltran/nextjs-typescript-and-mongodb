'use client'
import { atom, useAtom } from 'atomic-state'

type ThemeActions = {
  toggle: any
}

const themeState = atom<'light' | 'dark', ThemeActions>({
  name: 'theme',
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
