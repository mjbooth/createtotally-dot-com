// app/platform/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { platformDataBySlug, PlatformSlug } from '@/src/data/platform';
import PlatformTemplate from '@/app/platform/[slug]/PlatformTemplate';

export default async function PlatformPage({ params }: { params: { slug: PlatformSlug } }) {
  const { slug } = params;
  const data = platformDataBySlug[slug];

  if (!data) {
    return notFound();
  }

  return <PlatformTemplate data={data} />;
}

export async function generateStaticParams(): Promise<{ slug: PlatformSlug }[]> {
  return Object.keys(platformDataBySlug).map((slug) => ({ slug: slug as PlatformSlug }));
}