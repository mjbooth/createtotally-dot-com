import { getMarkdownPageParams, getPageMarkdown } from '@/src/utils/pageMarkdown';
import { getCategorySlugCanonicalUrl } from '@/src/utils/canonical';

export const dynamicParams = false;

export function generateStaticParams() {
  return getMarkdownPageParams();
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ section: string; slug: string }> },
) {
  const { section, slug } = await params;
  const markdown = getPageMarkdown(section, slug);
  if (!markdown) {
    return new Response('Not found', { status: 404 });
  }
  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Link: `<${getCategorySlugCanonicalUrl(section, slug)}>; rel="canonical"`,
    },
  });
}
