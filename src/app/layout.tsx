import { AtomicState, FetchConfig } from 'atomic-utils'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

import { AuthProvider, Navbar, ThemeProvider } from '@/components/layout'

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
