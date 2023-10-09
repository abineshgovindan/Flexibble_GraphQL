import { Footer, NavBar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarkable developer projects ',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
