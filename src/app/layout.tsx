import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '../components/theme/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yogi Rahman Setia',
  description: 'Pinescript Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light dark:bg-dark bg-no-repeat bg-cover`}>
        <Provider>
          <main className='h-screen w-full'>{children}</main>
        </Provider>
        </body>
    </html>
  )
}
