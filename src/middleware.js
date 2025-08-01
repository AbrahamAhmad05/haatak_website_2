// middleware.js
import { NextResponse } from 'next/server';

const PRODUCTION_DOMAIN = 'www.haatak.com';
const PRODUCTION_ENV = process.env.NODE_ENV === 'production';

export function middleware(request) {
  const url = request.nextUrl.clone(); // Always clone before modifying
  const hostname = request.headers.get('host')?.replace(/:\d+$/, '') || '';
  let hasRedirect = false;

  // 1. HTTPS Enforcement (works behind proxies)
  if (PRODUCTION_ENV && request.headers.get('x-forwarded-proto') !== 'https') {
    url.protocol = 'https:';
    hasRedirect = true;
  }

  // 2. WWW Canonicalization
  if (PRODUCTION_ENV && hostname === 'haatak.com') {
    url.host = PRODUCTION_DOMAIN;
    hasRedirect = true;
  }

  // 3. Index File Redirection (improved regex)
  const indexPattern = /(^|\/)index\.(html|php)$/i;
  if (indexPattern.test(url.pathname)) {
    url.pathname = url.pathname.replace(indexPattern, '$1');
    hasRedirect = true;
  }

  // 4. Trailing Slash Consistency (recommended for Next.js)
  const hasTrailingSlash = url.pathname.endsWith('/');
  const isFile = /\.[a-z0-9]+$/i.test(url.pathname);
  if (!hasTrailingSlash && !isFile && url.pathname !== '') {
    url.pathname = `${url.pathname}/`;
    hasRedirect = true;
  }

  return hasRedirect
    ? NextResponse.redirect(url, 301)
    : NextResponse.next();
}