export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin', 
          '/private',
          '/*?*', // Block all parameterized URLs
          '/*.php$', // Block all PHP files
          '/*.html$' // Block all HTML files
        ]
      }
    ],
    sitemap: 'https://www.haatak.com/sitemap.xml'
  };
}