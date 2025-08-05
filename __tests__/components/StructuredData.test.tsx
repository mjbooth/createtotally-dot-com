import { render } from '@testing-library/react';
import {
  OrganizationStructuredData,
  SoftwareApplicationStructuredData,
  WebPageStructuredData,
  ArticleStructuredData,
  BreadcrumbStructuredData
} from '@/src/components/StructuredData';

describe('StructuredData Components', () => {
  describe('OrganizationStructuredData', () => {
    it('should render organization schema script', () => {
      const { container } = render(<OrganizationStructuredData />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      expect(script).toBeInTheDocument();
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData['@type']).toBe('Organization');
      expect(jsonData.name).toBe('CreateTOTALLY');
      expect(jsonData.url).toBe('https://www.createtotally.com');
    });
  });

  describe('SoftwareApplicationStructuredData', () => {
    it('should render software application schema script', () => {
      const { container } = render(<SoftwareApplicationStructuredData />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      expect(script).toBeInTheDocument();
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData['@type']).toBe('SoftwareApplication');
      expect(jsonData.name).toBe('CreateTOTALLY');
      expect(jsonData.applicationCategory).toBe('DesignApplication');
    });
  });

  describe('WebPageStructuredData', () => {
    it('should render webpage schema script with required props', () => {
      const props = {
        name: 'Test Page',
        description: 'Test Description',
        url: 'https://www.createtotally.com/test'
      };

      const { container } = render(<WebPageStructuredData {...props} />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      expect(script).toBeInTheDocument();
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData['@type']).toBe('WebPage');
      expect(jsonData.name).toBe('Test Page');
      expect(jsonData.description).toBe('Test Description');
      expect(jsonData.url).toBe('https://www.createtotally.com/test');
    });

    it('should include optional dateModified when provided', () => {
      const props = {
        name: 'Test Page',
        description: 'Test Description',
        url: 'https://www.createtotally.com/test',
        dateModified: '2024-01-01T00:00:00Z'
      };

      const { container } = render(<WebPageStructuredData {...props} />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData.dateModified).toBe('2024-01-01T00:00:00Z');
    });

    it('should include breadcrumb when provided', () => {
      const breadcrumb = [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.createtotally.com' }
      ];

      const props = {
        name: 'Test Page',
        description: 'Test Description',
        url: 'https://www.createtotally.com/test',
        breadcrumb
      };

      const { container } = render(<WebPageStructuredData {...props} />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData.breadcrumb?.itemListElement).toEqual(breadcrumb);
    });
  });

  describe('ArticleStructuredData', () => {
    it('should render article schema script with required props', () => {
      const props = {
        headline: 'Test Article',
        description: 'Test Description',
        url: 'https://www.createtotally.com/article',
        datePublished: '2024-01-01T00:00:00Z',
        dateModified: '2024-01-02T00:00:00Z'
      };

      const { container } = render(<ArticleStructuredData {...props} />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      expect(script).toBeInTheDocument();
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData['@type']).toBe('Article');
      expect(jsonData.headline).toBe('Test Article');
      expect(jsonData.description).toBe('Test Description');
      expect(jsonData.datePublished).toBe('2024-01-01T00:00:00Z');
      expect(jsonData.dateModified).toBe('2024-01-02T00:00:00Z');
    });

    it('should include optional image when provided', () => {
      const props = {
        headline: 'Test Article',
        description: 'Test Description',
        url: 'https://www.createtotally.com/article',
        datePublished: '2024-01-01T00:00:00Z',
        dateModified: '2024-01-02T00:00:00Z',
        image: 'https://example.com/image.jpg'
      };

      const { container } = render(<ArticleStructuredData {...props} />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData.image).toBe('https://example.com/image.jpg');
    });

    it('should include custom author when provided', () => {
      const props = {
        headline: 'Test Article',
        description: 'Test Description',
        url: 'https://www.createtotally.com/article',
        datePublished: '2024-01-01T00:00:00Z',
        dateModified: '2024-01-02T00:00:00Z',
        authorName: 'John Doe',
        authorUrl: 'https://johndoe.com'
      };

      const { container } = render(<ArticleStructuredData {...props} />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData.author.name).toBe('John Doe');
      expect(jsonData.author.url).toBe('https://johndoe.com');
    });
  });

  describe('BreadcrumbStructuredData', () => {
    it('should render breadcrumb schema script', () => {
      const items = [
        { name: 'Home', url: 'https://www.createtotally.com' },
        { name: 'Features', url: 'https://www.createtotally.com/features' }
      ];

      const { container } = render(<BreadcrumbStructuredData items={items} />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      expect(script).toBeInTheDocument();
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData['@type']).toBe('BreadcrumbList');
      expect(jsonData.itemListElement).toHaveLength(2);
      expect(jsonData.itemListElement[0]).toMatchObject({
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.createtotally.com'
      });
    });

    it('should handle empty items array', () => {
      const { container } = render(<BreadcrumbStructuredData items={[]} />);
      const script = container.querySelector('script[type="application/ld+json"]');
      
      const jsonData = JSON.parse(script?.textContent || '{}');
      expect(jsonData.itemListElement).toHaveLength(0);
    });
  });

  describe('Script tag attributes', () => {
    it('should have correct script type for all components', () => {
      const { container: orgContainer } = render(<OrganizationStructuredData />);
      const { container: appContainer } = render(<SoftwareApplicationStructuredData />);
      
      const orgScript = orgContainer.querySelector('script');
      const appScript = appContainer.querySelector('script');
      
      expect(orgScript?.getAttribute('type')).toBe('application/ld+json');
      expect(appScript?.getAttribute('type')).toBe('application/ld+json');
    });

    it('should generate valid JSON for all components', () => {
      const components = [
        <OrganizationStructuredData key="org" />,
        <SoftwareApplicationStructuredData key="app" />,
        <WebPageStructuredData key="page" name="Test" description="Test" url="https://test.com" />,
        <ArticleStructuredData key="article" headline="Test" description="Test" url="https://test.com" datePublished="2024-01-01" dateModified="2024-01-01" />,
        <BreadcrumbStructuredData key="breadcrumb" items={[]} />
      ];

      components.forEach((component) => {
        const { container } = render(component);
        const script = container.querySelector('script[type="application/ld+json"]');
        
        expect(script).toBeInTheDocument();
        expect(() => JSON.parse(script?.textContent || '{}')).not.toThrow();
      });
    });
  });
});