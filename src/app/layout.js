'use client'

import './globals.css'
import { SessionProvider } from "next-auth/react"
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <>
      <SessionProvider>
        <html lang="en">
          <head>
            <Script src="https://kit.fontawesome.com/f29473877d.js" crossorigin="anonymous" />
          </head>
          <body>
            <main>
              {children}
            </main>
          </body>
        </html>
      </SessionProvider>
    </>
  )
}

