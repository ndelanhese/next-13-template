import React from 'react'

import './globals.css'

export const metadata = {
  title: 'Template app',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-BR">
    <body>{children}</body>
  </html>
)

export default RootLayout
