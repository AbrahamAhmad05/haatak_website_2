// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  
  // Redirect root URL without trailing slash to with trailing slash
  if (url.pathname === '/' && !url.pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(`${url.origin}/`, request.url),
      301 // Permanent redirect
    );
  }
  
  return NextResponse.next();
}