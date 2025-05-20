import { notFound } from 'next/navigation';
import { platformDataBySlug, PlatformSlug } from '@/src/data/platform';
import PlatformTemplate from '@/app/platform/[slug]/PlatformTemplate';
import { Metadata } from 'next';

async function getPlatformData(slug: string) {
  const data = platformDataBySlug[slug as PlatformSlug];
  if (!data) {
    notFound();
  }
  return data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPlatformData(slug);

  return {
    title: data.metadata.title || 'Learn about our platform',
    description: data.metadata.description || 'Learn about our platform',
    openGraph: data.metadata.openGraph || {
      title: 'Learn about our platform',
      description: 'Learn about our platform',
    },
  };
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getPlatformData(slug);
  return <PlatformTemplate data={data} />;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(platformDataBySlug).map((slug) => ({ slug }));
}