import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Password Generator',
  description: 'An app that generate a password',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jbm.className}>{children}</body>
    </html>
  )
}
