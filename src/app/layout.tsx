import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

import { AuthProvider, Navbar, ThemeProvider } from '@/components/layout'

import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'
import { getServerSession } from 'next-auth'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

export default async function MainLayout({ children }) {
  const session = await getServerSession()

  return (
    <html suppressHydrationWarning>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <body className={GeistSans.className}>
        <ThemeProvider attribute='class'>
          <main className='min-h-screen'>
            <AuthProvider>
              <AtomicState>
                <FetchConfig
                  baseUrl='/api'
                  value={
                    session
                      ? {
                          'GET /auth/session': session
                        }
                      : {}!
                  }
                >
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
