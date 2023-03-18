import { FetchConfig } from 'http-react'
import './globals.css'
import 'bs-icon/icons.css'
import Link from 'next/link'
import Icon from 'bs-icon'

function MainLayout({ children }) {
  return (
    <FetchConfig baseUrl='/api'>
      <html data-theme='light'>
        <head>
          <title>Next.js starter</title>
          <meta name='description' content='A Starter with Next.js' />
        </head>
        <body>
          <div className='p-8'>{children}</div>
          <Link
            href='https://github.com/danybeltran/nextjs-typescript-and-mongodb'
            target='_blank'
            className='fixed bottom-2 left-2 btn btn-sm gap-x-2'
          >
            <Icon name='github' /> <span>Github</span>
          </Link>
        </body>
      </html>
    </FetchConfig>
  )
}

export default MainLayout
