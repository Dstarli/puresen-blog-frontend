import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const base = 'https://www.takumius.com/blog';

  const urls = posts.map(post => `
  <url>
    <loc>${base}/${post.slug}/</loc>
    <lastmod>${post.data.pubDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
