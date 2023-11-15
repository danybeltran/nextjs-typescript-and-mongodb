import './globals.css'
import { FetchConfig } from 'http-react'
import Link from 'next/link'
import Icon from 'bs-icon'

function MainLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <FetchConfig baseUrl='/api'>
        <body>
          {children}
          <Link
            href='https://github.com/danybeltran/nextjs-typescript-and-mongodb'
            target='_blank'
            className='fixed bottom-2 left-2 btn btn-sm gap-x-2'
          >
            <Icon name='github' /> <span>Github</span>
          </Link>
        </body>
      </FetchConfig>
    </html>
  )
}

export default MainLayout
