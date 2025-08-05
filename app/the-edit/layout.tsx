// /app/the-edit/layout.tsx
import { Metadata } from 'next';
import { getStaticPageCanonicalUrl } from '@/src/utils/canonical';

export const metadata: Metadata = {
  title: 'The Edit - Creative Automation Insights | CreateTOTALLY',
  description: "Discover creative automation insights, case studies, and industry tips on The Edit. Learn how brands like Miele scale creative production efficiently.",
  alternates: {
    canonical: getStaticPageCanonicalUrl('the-edit'),
  },
  openGraph: {
    title: 'The Edit - Creative Automation Insights | CreateTOTALLY',
    description: "Discover creative automation insights, case studies, and industry tips on The Edit. Learn how brands like Miele scale creative production efficiently.",
    type: 'website',
    url: getStaticPageCanonicalUrl('the-edit'),
    siteName: 'CreateTOTALLY',
    images: [
      {
        url: '/OpenGraph.jpg',
        width: 1200,
        height: 630,
        alt: 'The Edit - Creative automation insights and case studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Edit - Creative Automation Insights & Case Studies',
    description: 'Discover how top brands scale creative production. Real case studies and automation insights.',
    images: ["/TwitterSummaryCard.jpg"],
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}