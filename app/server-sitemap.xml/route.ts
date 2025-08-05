import { getAllPostSlugs } from '@/lib/hygraph';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.createtotally.com';
  
  try {
    const posts = await getAllPostSlugs();
    
    const urls = posts.map(({ slug, postType }) => {
      let priority = 0.6;
      let changefreq = 'weekly';
      
      // Adjust priority based on post type
      switch (postType) {
        case 'perspectives':
          priority = 0.6;
          changefreq = 'weekly';
          break;
        case 'automation-in-action':
          priority = 0.6;
          changefreq = 'weekly';
          break;
        case 'integrations':
          priority = 0.5;
          changefreq = 'monthly';
          break;
        case 'glossary':
          priority = 0.5;
          changefreq = 'monthly';
          break;
        default:
          priority = 0.6;
          changefreq = 'weekly';
      }
      
      return `<url>
        <loc>${baseUrl}/${postType}/${slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating server sitemap:', error);
    
    // Return empty sitemap in case of error
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new NextResponse(emptySitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}