import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const allowedParams = ['gclid', 'fbclid', 'utm_source'];
  let redirect = false;

  // Strip unwanted parameters
  allowedParams.forEach(param => {
    if (url.searchParams.has(param) && !allowedParams.includes(param)) {
      url.searchParams.delete(param);
      redirect = true;
    }
  });

  // Redirect index.* to root
  if (url.pathname.match(/(^|\/)index\.(html|php)$/i)) {
    url.pathname = url.pathname.replace(/(^|\/)index\.(html|php)$/i, '$1');
    redirect = true;
  }

  if (redirect) {
    return NextResponse.redirect(url, 301);
  }
  
  return NextResponse.next();
}