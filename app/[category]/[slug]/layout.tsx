// /app/[category]/[slug]/layout.tsx
import { getPostByCategoryAndSlug } from '@/lib/hygraph';
import { ReactNode } from 'react';

export async function generateMetadata({ params }: { params: { slug: string; category: string } }) {
  const resolvedParams = await params;
  const { slug, category } = resolvedParams;

  const post = await getPostByCategoryAndSlug(category, slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      alternates: {
        canonical: `https://createtotally.com/${category}/${slug}`,
      },
    };
  }

  return {
    title: post.title,
    description: post.excerpt || 'Read the latest article.',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.coverImage?.url ? [{ url: post.coverImage.url }] : [],
    },
    alternates: {
      canonical: `https://createtotally.com/${category}/${slug}`,
    },
  };
}

export default function BlogSlugLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}