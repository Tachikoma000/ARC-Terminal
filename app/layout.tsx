import './globals.css'
import type { Metadata } from 'next'
import { useState, useEffect } from 'react'

export const metadata: Metadata = {
  title: 'ARC - AI Rig Complex',
  description: 'Welcome to ARC - Explore a world of tranquility and innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}