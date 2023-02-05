import { FetchConfig } from 'http-react'
import './globals.css'
import 'bs-icon/icons.css'

function MainLayout({ children }) {
  return (
    <FetchConfig baseUrl='/api'>
      <html>
        <head>
          <title>Nextjs</title>
        </head>
        <body>
          <div className='p-8'>{children}</div>
        </body>
      </html>
    </FetchConfig>
  )
}

export default MainLayout
