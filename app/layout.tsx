import './globals.css'
import { FetchConfig } from 'http-react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillShop - Home',
  description: 'Home page of skillshop'
}

function MainLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <FetchConfig baseUrl='/api'>
        <body className={inter.className}>
          <main className='min-h-screen'>
            <Navbar />
            {children}
          </main>
        </body>
      </FetchConfig>
    </html>
  )
}

export default MainLayout
