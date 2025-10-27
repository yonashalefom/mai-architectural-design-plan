// Root layout - wraps app with providers and global styles
'use client'
import { AuthProvider } from '@magnoli/auth/client'
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
