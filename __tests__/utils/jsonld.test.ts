import {
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
  generateWebPageSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateStructuredDataScript
} from '@/src/utils/jsonld';

describe('JSON-LD Schema Generation', () => {
  describe('generateOrganizationSchema', () => {
    it('should generate valid Organization schema', () => {
      const schema = generateOrganizationSchema();
      
      expect(schema).toMatchObject({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CreateTOTALLY',
        url: 'https://www.createtotally.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.createtotally.com/CreateTOTALLY_horizontal.png'
        }
      });
      
      expect(schema.sameAs).toBeInstanceOf(Array);
      expect(schema.contactPoint).toBeInstanceOf(Array);
      expect(schema.description).toBeTruthy();
    });
  });

  describe('generateSoftwareApplicationSchema', () => {
    it('should generate valid SoftwareApplication schema', () => {
      const schema = generateSoftwareApplicationSchema();
      
      expect(schema).toMatchObject({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'CreateTOTALLY',
        applicationCategory: 'DesignApplication'
      });
      
      expect(schema.operatingSystem).toBeInstanceOf(Array);
      expect(schema.featureList).toBeInstanceOf(Array);
      expect(schema.screenshot).toBeInstanceOf(Array);
      expect(schema.offers.price).toBe('0');
    });
  });

  describe('generateWebPageSchema', () => {
    it('should generate valid WebPage schema with required fields', () => {
      const schema = generateWebPageSchema(
        'Test Page',
        'Test Description',
        'https://www.createtotally.com/test'
      );
      
      expect(schema).toMatchObject({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Test Page',
        description: 'Test Description',
        url: 'https://www.createtotally.com/test',
        inLanguage: 'en-US'
      });
      
      expect(schema.isPartOf.name).toBe('CreateTOTALLY');
    });

    it('should include optional fields when provided', () => {
      const breadcrumb = [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.createtotally.com' }
      ];
      
      const schema = generateWebPageSchema(
        'Test Page',
        'Test Description',
        'https://www.createtotally.com/test',
        '2024-01-01T00:00:00Z',
        breadcrumb
      );
      
      expect(schema.dateModified).toBe('2024-01-01T00:00:00Z');
      expect(schema.breadcrumb?.itemListElement).toEqual(breadcrumb);
    });
  });

  describe('generateArticleSchema', () => {
    it('should generate valid Article schema', () => {
      const schema = generateArticleSchema(
        'Test Article',
        'Test Description',
        'https://www.createtotally.com/article',
        '2024-01-01T00:00:00Z',
        '2024-01-02T00:00:00Z'
      );
      
      expect(schema).toMatchObject({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Test Article',
        description: 'Test Description',
        url: 'https://www.createtotally.com/article',
        datePublished: '2024-01-01T00:00:00Z',
        dateModified: '2024-01-02T00:00:00Z'
      });
      
      expect(schema.author.name).toBe('CreateTOTALLY Team');
      expect(schema.publisher.name).toBe('CreateTOTALLY');
    });

    it('should accept custom author details', () => {
      const schema = generateArticleSchema(
        'Test Article',
        'Test Description',
        'https://www.createtotally.com/article',
        '2024-01-01T00:00:00Z',
        '2024-01-02T00:00:00Z',
        'John Doe',
        'https://example.com/image.jpg',
        'https://johndoe.com'
      );
      
      expect(schema.author.name).toBe('John Doe');
      expect(schema.author.url).toBe('https://johndoe.com');
      expect(schema.image).toBe('https://example.com/image.jpg');
    });
  });

  describe('generateBreadcrumbSchema', () => {
    it('should generate valid BreadcrumbList schema', () => {
      const items = [
        { name: 'Home', url: 'https://www.createtotally.com' },
        { name: 'Features', url: 'https://www.createtotally.com/features' },
        { name: 'Creative Automation', url: 'https://www.createtotally.com/features/creative-automation' }
      ];
      
      const schema = generateBreadcrumbSchema(items);
      
      expect(schema).toMatchObject({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList'
      });
      
      expect(schema.itemListElement).toHaveLength(3);
      expect(schema.itemListElement[0]).toMatchObject({
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.createtotally.com'
      });
    });
  });

  describe('generateStructuredDataScript', () => {
    it('should convert object to JSON string', () => {
      const data = { test: 'value', number: 123 };
      const result = generateStructuredDataScript(data);
      
      expect(result).toBe(JSON.stringify(data, null, 2));
      expect(() => JSON.parse(result)).not.toThrow();
    });
  });
});