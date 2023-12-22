import './globals.css'
import { FetchConfig } from 'http-react'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Navbar from 'components/Navbar'
import { ThemeProvider } from 'components/theme-provider'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

function MainLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <FetchConfig baseUrl='/api'>
        <body className={GeistSans.className}>
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
