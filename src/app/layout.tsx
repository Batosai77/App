import type { Metadata } from 'next'
import { Dancing_Script, Inter } from 'next/font/google'
import './globals.css'

const DancingScript = Dancing_Script({
  weight:'500',
  subsets:['latin'],
  variable:'--font-dancing-script'
});
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yoga Dan Putri',
  description: 'Undangan Pernikahan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${DancingScript.variable}`}>
          <main className='h-screen w-full'>{children}</main>
      </body>
    </html>
  )
}
