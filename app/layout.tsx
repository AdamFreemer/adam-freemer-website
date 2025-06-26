import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adam Freemer',
  description: 'Software Engineer and Technologist',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
