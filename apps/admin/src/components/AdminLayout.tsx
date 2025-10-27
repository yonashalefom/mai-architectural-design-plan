// Admin layout with sidebar navigation
'use client'
export function AdminLayout({ children }) {
  // Admin-only layout with sidebar
  return <aside>{children}</aside>
}

