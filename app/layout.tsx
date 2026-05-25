import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JAI Software Solutions',
  description: 'End-to-End AI & Software Development Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">{children}</body>
    </html>
  )
}
