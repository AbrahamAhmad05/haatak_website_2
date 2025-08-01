import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const allowedParams = ['gclid', 'fbclid', 'utm_source'];
  let redirect = false;

  // Fix 1: Correctly strip unwanted parameters
  const params = url.searchParams;
  const paramKeys = Array.from(params.keys());
  
  for (const key of paramKeys) {
    if (!allowedParams.includes(key)) {
      params.delete(key);
      redirect = true;
    }
  }

  // Fix 2: Handle root path correctly
  if (url.pathname.match(/(^|\/)index\.(html|php)$/i)) {
    const newPath = url.pathname.replace(/(^|\/)index\.(html|php)$/i, '$1') || '/';
    
    // Only redirect if path actually changes
    if (newPath !== url.pathname) {
      url.pathname = newPath;
      redirect = true;
    }
  }

  // Fix 3: Only redirect if changes were made
  if (redirect) {
    return NextResponse.redirect(url, 301);
  }
  
  return NextResponse.next();
}