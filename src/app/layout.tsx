import './globals.css'
import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/ThemeProvider'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

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
                  <div className='max-w-screen-2xl mx-auto py-8 px-6 md:px-8'>
                    {children}
                  </div>
                </FetchConfig>
              </AtomicState>
            </AuthProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
