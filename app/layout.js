import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'E-Commerece',
  description: 'E-Commerece Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}</body>
    </html>
  )
}