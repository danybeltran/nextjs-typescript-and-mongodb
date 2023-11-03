import './globals.css'
import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'
import Link from 'next/link'
import Icon from 'bs-icon'
import { cookies } from 'next/headers'

import ThemeToggle from 'components/ThemeToggle'
import ThemeWrap from 'components/ThemeWrapp'

function MainLayout({ children }) {
  const theme = JSON.parse(cookies().get('theme')?.value ?? '"dark"')

  return (
    <html>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>
      <AtomicState
        default={{
          theme
        }}
      >
        <FetchConfig baseUrl='/api'>
          <body>
            <ThemeWrap>
              <ThemeToggle />
              {children}
              <Link
                href='https://github.com/danybeltran/nextjs-typescript-and-mongodb'
                target='_blank'
                className='fixed bottom-2 left-2 btn btn-sm gap-x-2'
              >
                <Icon name='github' /> <span>Github</span>
              </Link>
            </ThemeWrap>
          </body>
        </FetchConfig>
      </AtomicState>
    </html>
  )
}

export default MainLayout
