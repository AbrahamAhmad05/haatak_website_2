// middleware.js
import { NextResponse } from 'next/server';

const PRODUCTION_HOSTS = ['haatak.com', 'www.haatak.com'];
const CANONICAL_HOST = 'www.haatak.com';

export function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host')?.replace(/:\d+$/, '');

  // Redirect HTTP to HTTPS
  if (url.protocol !== 'https:' && process.env.NODE_ENV === 'production') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // Redirect non-www to www
  if (hostname === 'haatak.com' && process.env.NODE_ENV === 'production') {
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

  // Redirect index.html and index.php to root
  if (url.pathname.match(/^\/index\.(html|php)$/i)) {
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // Redirect other index files (e.g., /about/index.html → /about/)
  if (url.pathname.endsWith('/index.html') || url.pathname.endsWith('/index.php')) {
    url.pathname = url.pathname.replace(/\/index\.(html|php)$/i, '/');
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}