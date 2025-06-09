import { notFound } from 'next/navigation';
import { featureDataBySlug, FeatureSlug } from '@/src/data/features';
import FeatureTemplate from '@/app/features/[slug]/FeaturesTemplate';
import { Metadata } from 'next';

async function getFeatureData(slug: string) {
  const data = featureDataBySlug[slug as FeatureSlug];
  if (!data) {
    notFound();
  }
  return data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getFeatureData(slug);

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
  const data = await getFeatureData(slug);
  return <FeatureTemplate data={data} />;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(featureDataBySlug).map((slug) => ({ slug }));
}