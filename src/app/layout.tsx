import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'
import 'bs-icon/icons.css'

import { AuthProvider, Navbar, ThemeProvider } from '@/components/layout'

import { AtomicState } from 'atomic-utils'
import { FetchConfig } from 'atomic-utils'
import { getServerSession, Session } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { getUserPreferences } from '@/lib/preferences'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

export default async function MainLayout({ children }) {
  const session = await getServerSession()

  const preferences = await getUserPreferences()

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
                  value={{
                    User: session ?? {},
                    Preferences: preferences ?? {}
                  }}
                >
                  <Navbar />
                  <div className='max-w-screen-2xl mx-auto py-8 px-6 md:px-8 overflow-x-auto'>
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
