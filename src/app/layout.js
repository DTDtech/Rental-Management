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
              <div className="flex h-screen">
                <div className="float-left w-64 border-2 flex-col">
                  <p>Nav holder</p>
                </div>
                <div className="float-left w-full flex justify-center p-6">
                  {children}
                </div>
              </div>
            </main>
          </body>
        </html>
      </SessionProvider>
    </>
  )
}

