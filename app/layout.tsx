import './globals.css'
import { FetchConfig } from 'http-react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './Navbar'
import { ThemeProvider } from 'components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillShop - Home',
  description: 'Home page of skillshop'
}

function MainLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <FetchConfig baseUrl='/api'>
        <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='system'>
            <main className='min-h-screen'>
              <Navbar />
              <div className='max-w-7xl mx-auto p-4'>{children}</div>
            </main>
          </ThemeProvider>
        </body>
      </FetchConfig>
    </html>
  )
}

export default MainLayout
