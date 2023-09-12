'use client'
import { useTheme } from '(states)'

export default function ThemeWrap({ children }) {
  const [theme] = useTheme()

  return (
    <div className='p-8 h-full relative' data-theme={theme}>
      {children}
    </div>
  )
}
