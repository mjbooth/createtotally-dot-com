/**
 * @jest-environment node
 */
import { GET } from '@/app/md/[section]/[slug]/route';
import { featureDataBySlug } from '@/src/data/features';
import { platformDataBySlug } from '@/src/data/platform';

function get(section: string, slug: string) {
  return GET(new Request('https://www.createtotally.com/'), {
    params: Promise.resolve({ section, slug }),
  });
}

const pages = [
  ...Object.entries(featureDataBySlug).map(([slug, data]) => ({ section: 'features', slug, data })),
  ...Object.entries(platformDataBySlug).map(([slug, data]) => ({
    section: 'platform',
    slug,
    data,
  })),
];

describe('Markdown versions of pages', () => {
  it.each(pages)(
    'serves the text of $section/$slug as Markdown',
    async ({ section, slug, data }) => {
      const response = await get(section, slug);
      const body = await response.text();

      expect(response.headers.get('content-type')).toBe('text/markdown; charset=utf-8');
      expect(response.headers.get('link')).toBe(
        `<https://www.createtotally.com/${section}/${slug}>; rel="canonical"`,
      );
      const pageText = [
        data.heroSectionData.title,
        data.heroSectionData.subtitle,
        ...data.heroSectionData.features,
        ...data.featureBlocks.flatMap((block) => [block.heading, block.text]),
        ...data.HowItWorksSteps.flatMap((step) => [step.title, step.description]),
        ...('features' in data
          ? data.features.flatMap((feature) => [feature.title, feature.description])
          : []),
        data.testimonialData.author,
        data.ctaData.title,
      ];
      for (const text of pageText) {
        expect(body).toContain(text);
      }
      expect(body).not.toMatch(/<[a-z]/i);
    },
  );

  it.each([
    ['features', 'unknown-page'],
    ['platform', 'constructor'],
    ['pricing', 'index'],
  ])('returns 404 for %s/%s', async (section, slug) => {
    expect((await get(section, slug)).status).toBe(404);
  });
});
