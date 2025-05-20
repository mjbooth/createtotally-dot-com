// app/platform/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { platformDataBySlug, PlatformSlug } from '@/src/data/platform';
import PlatformTemplate from '@/app/platform/[slug]/PlatformTemplate';

async function getPlatformData(slug: string) {
  const data = platformDataBySlug[slug as PlatformSlug];
  if (!data) {
    notFound();
  }
  return data;
}

export default async function PlatformPage({ params }: { params: { slug: string } }) {
  const data = await getPlatformData(params.slug);
  return <PlatformTemplate data={data} />;
}

export async function generateStaticParams() {
  return Object.keys(platformDataBySlug).map((slug) => ({ slug }));
}