import { getAllPostSlugs } from '@/lib/hygraph';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.createtotally.com';
  const posts = await getAllPostSlugs();

  const staticPaths = [
    '/',
    '/platform/figma-creative-automation',
    '/platform/adobe-indesign-automation',
    '/platform/adobe-after-effects-automation',
    '/features/easy-templating',
    '/features/creative-automation',
    '/features/workflow-automation',
    '/features/libraries-and-asset-management',
    '/perspectives',
    '/integrations',
    '/automation-in-action',
    '/pricing',
    '/get-started',
    '/glossary',
    '/the-edit',
  ];

  const urls = [
    ...staticPaths.map(path => `<url><loc>${baseUrl}${path}</loc></url>`),
    ...posts.map(({ slug, postType }) => {
      const path = `/${postType}/${slug}`;
      return `<url><loc>${baseUrl}${path}</loc></url>`;
    })
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}