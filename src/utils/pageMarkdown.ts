import { featureDataBySlug } from '@/src/data/features';
import { platformDataBySlug } from '@/src/data/platform';

interface MarkdownSource {
  heroSectionData: { featureGroup: string; title: string; subtitle: string; features: string[] };
  featureBlocks: Array<{ heading: string; text: string }>;
  HowItWorksSteps: Array<{ title: string; description: string }>;
  features?: Array<{ title: string; description: string }>;
  testimonialData: { quote: string; author: string; role: string; company: string };
  ctaData: { title: string; buttonText: string };
}

const pagesBySection: Record<string, Record<string, MarkdownSource>> = {
  features: featureDataBySlug,
  platform: platformDataBySlug,
};

export function getMarkdownPageParams(): Array<{ section: string; slug: string }> {
  return Object.entries(pagesBySection).flatMap(([section, pages]) =>
    Object.keys(pages).map((slug) => ({ section, slug })),
  );
}

// Same text and order as FeaturesTemplate and PlatformTemplate, without layout or images.
export function getPageMarkdown(section: string, slug: string): string | undefined {
  const pages = Object.hasOwn(pagesBySection, section) ? pagesBySection[section] : undefined;
  if (!pages || !Object.hasOwn(pages, slug)) {
    return undefined;
  }
  const data = pages[slug];
  const { heroSectionData: hero, testimonialData: testimonial } = data;

  const sections = [
    hero.featureGroup,
    `# ${hero.title}`,
    hero.subtitle,
    hero.features.map((feature) => `- ${feature}`).join('\n'),
    ...data.featureBlocks.map((block) => `## ${block.heading}\n\n${block.text}`),
    '## How it works',
    data.HowItWorksSteps.map(
      (step, index) => `${index + 1}. **${step.title}**: ${step.description}`,
    ).join('\n'),
    `> ${testimonial.quote.replace(/\n/g, ' ')}\n>\n> ${testimonial.author}, ${testimonial.role}, ${testimonial.company}`,
  ];
  if (data.features) {
    sections.push(
      '## Production-proof features built for design at scale',
      "CreateTOTALLY isn't just another automation tool—it's created by designers who've felt your pain:",
      data.features.map((feature) => `- **${feature.title}**: ${feature.description}`).join('\n'),
    );
  }
  sections.push(
    `## ${data.ctaData.title}\n\n[${data.ctaData.buttonText.replace(/\s*→$/, '')}](https://www.createtotally.com/get-started)`,
  );

  return `${sections.join('\n\n')}\n`;
}
