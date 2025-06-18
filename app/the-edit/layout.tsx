// /app/get-started/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Edit - Creative Automation Insights | CreateTOTALLY',
  description: "Discover creative automation insights, case studies, and industry tips on The Edit. Learn how brands like Miele scale creative production efficiently.",
  alternates: {
    canonical: 'https://www.createtotally.com/the-edit',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.createtotally.com/the-edit',
    siteName: 'CreateTOTALLY',
    images: [
      {
        url: '/OpenGraph.jpg',
        alt: 'The Edit - Creative automation insights and case studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Edit - Creative Automation Insights & Case Studies',
    description: 'Discover how top brands scale creative production. Real case studies and automation insights.',
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}