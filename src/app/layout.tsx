import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <html className='scroll-smooth' lang="en">
      <body className={inter.className}>
          <main className='h-screen w-full'>{children}</main>
        </body>
    </html>
  )
}
