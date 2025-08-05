// /app/get-started/layout.tsx
import { Metadata } from 'next';
import { getStaticPageCanonicalUrl } from '@/src/utils/canonical';

export const metadata: Metadata = {
  title: 'Get a CreateTOTALLY Demo - Transform Your Creative Workflow',
  description: "Get a personalized CreateTOTALLY demo and discover how to automate creative production. See why world's biggest brands choose our platform.",
  alternates: {
    canonical: getStaticPageCanonicalUrl('get-started'),
  },
  openGraph: {
    title: 'Get a CreateTOTALLY Demo - Transform Your Creative Workflow',
    description: "Get a personalized CreateTOTALLY demo and discover how to automate creative production. See why world's biggest brands choose our platform.",
    url: getStaticPageCanonicalUrl('get-started'),
    siteName: "CreateTOTALLY",
    type: "website",
    images: [
      {
        url: "/OpenGraph.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Get a CreateTOTALLY Demo - Transform Your Creative Workflow',
    description: "Get a personalized CreateTOTALLY demo and discover how to automate creative production. See why world's biggest brands choose our platform.",
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