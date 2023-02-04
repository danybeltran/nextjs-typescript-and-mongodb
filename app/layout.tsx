import "./globals.css"

function MainLayout({ children }) {
  return (
    <html>
      <head>
        <title>Nextjs</title>
      </head>
      <body>
        <div className="p-2 h-screen">{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
