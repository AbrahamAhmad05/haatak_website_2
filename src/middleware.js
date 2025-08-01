import { NextResponse } from 'next/server';

const PRODUCTION_DOMAIN = 'www.haatak.com';
const ENV = process.env.NODE_ENV;

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host')?.replace(/:\d+$/, '') || '';
  const proto = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
  let redirectNeeded = false;

  // 1. HTTPS Enforcement (works on all platforms)
  if (ENV === 'production' && proto !== 'https') {
    url.protocol = 'https:';
    redirectNeeded = true;
  }

  // 2. WWW Canonicalization (with subdomain preservation)
  if (ENV === 'production' && hostname === 'haatak.com') {
    url.host = PRODUCTION_DOMAIN;
    redirectNeeded = true;
  }

  // 3. Index File Redirection (all variations)
  const indexPattern = /(^|\/)index\.(html|php)$/i;
  if (indexPattern.test(url.pathname)) {
    url.pathname = url.pathname.replace(indexPattern, '$1');
    redirectNeeded = true;
  }

  // 4. Parameter Injection Prevention
  const hasParams = url.search.length > 0;
  if (hasParams && !url.pathname.startsWith('/search')) {
    // Strip all parameters except specific allowed ones
    const allowedParams = ['gclid', 'fbclid'];
    const params = new URLSearchParams(url.search);
    
    // Remove tracking parameters
    for (const key of params.keys()) {
      if (!allowedParams.includes(key)) {
        params.delete(key);
      }
    }
    
    url.search = params.toString();
    redirectNeeded = true;
  }

  // Execute single redirect if any rules matched
  if (redirectNeeded) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}