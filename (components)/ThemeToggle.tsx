'use client'

import { useTheme } from '(states)'
import Icon from 'bs-icon'

export default function ThemeToggle() {
  const [theme, , actions] = useTheme()

  return (
    <button
      onClick={actions.toggle}
      className='btn btn-sm absolute right-0 top-0 m-4'
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  )
}
