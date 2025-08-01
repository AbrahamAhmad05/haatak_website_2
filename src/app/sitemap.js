import { MetadataRoute } from 'next';

export default async function sitemap() {
  const routes = ['', '/about', '/contact', '/blogs', '/buy-24k-gold', '/privacy-policy', '/terms-of-use', '/how-its-work'].map(route => ({
    url: `https://www.haatak.com${route}`,
    lastModified: new Date(),
  }));

  // Add dynamic routes from CMS/database here
  return routes;
}