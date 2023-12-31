import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Ip Address Tracker',
  description: 'Search the location of an IP address',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
