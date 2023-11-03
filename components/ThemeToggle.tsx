'use client'

import { themeState } from 'states'
import { useActions, useValue } from 'atomic-state'
import Icon from 'bs-icon'

export default function ThemeToggle() {
  const theme = useValue(themeState)
  const themeActions = useActions(themeState)

  return (
    <button
      onClick={themeActions.toggle}
      className='btn btn-sm absolute right-0 top-0 m-4'
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  )
}
