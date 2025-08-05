// /app/[category]/[slug]/layout.tsx
import { getPostByCategoryAndSlug } from '@/lib/hygraph';
import { ReactNode } from 'react';
import { getCategorySlugCanonicalUrl } from '@/src/utils/canonical';

export async function generateMetadata(context: { params: Promise<{ slug: string; category: string }> }) {

  const resolvedParams = await context.params;
  const { slug, category } = resolvedParams;
  const canonicalUrl = getCategorySlugCanonicalUrl(category, slug);

  const post = await getPostByCategoryAndSlug(category, slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  return {
    title: post.seoOverride?.title || post.title,
    description: post.seoOverride?.description || post.excerpt || 'Read the latest article.',
    openGraph: {
      title: post.seoOverride?.title || post.title,
      description: post.seoOverride?.description || post.excerpt || '',
      url: canonicalUrl,
      siteName: "CreateTOTALLY",
      type: "article",
      images: post.coverImage?.url
        ? [{ url: post.coverImage.url }]
        : [{ url: "/OpenGraph.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoOverride?.title || post.title,
      description: post.seoOverride?.description || post.excerpt || 'Read the latest article.',
      images: post.coverImage?.url ? [post.coverImage.url] : ["/TwitterSummaryCard.jpg"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function BlogSlugLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}