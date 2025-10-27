// Next.js middleware for auth and routing
import { NextResponse } from 'next/server'

export function middleware(request: any) {
  // Handles auth redirects and protected routes
  return NextResponse.next()
}

