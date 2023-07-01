import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './nav/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Sansar',
  description: 'Sansar for music lovers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen"}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
