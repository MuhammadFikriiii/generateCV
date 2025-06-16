import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CV generator',
  description: 'Created by Muhammad Fikri',
  generator: 'Muhammad Fikri',
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
