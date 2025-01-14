import AuthButton from './auth-button'
import { ThemeToggle } from './theme-toggle'

export default function AuthAndTheme() {
  return (
    <div className='flex items-center gap-x-2'>
      <ThemeToggle />
      <AuthButton />
    </div>
  )
}
