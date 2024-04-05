import './globals.css'
import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'
import { GeistSans } from 'geist/font/sans'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/ThemeProvider'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

const InterFont = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600', '700', '800', '900']
})

export default function MainLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <body className={GeistSans.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='min-h-screen'>
            <AuthProvider>
              <AtomicState>
                <FetchConfig baseUrl='/api'>
                  <Navbar />
                  <div>{children}</div>
                </FetchConfig>
              </AtomicState>
            </AuthProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
