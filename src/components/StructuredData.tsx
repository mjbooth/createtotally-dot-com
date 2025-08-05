/**
 * Reusable React components for JSON-LD structured data
 * These components render structured data as script tags in the document head
 */

import Script from 'next/script';
import {
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
  generateWebPageSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateStructuredDataScript,
  type BreadcrumbItem,
  type Organization,
  type SoftwareApplication,
  type WebPage,
  type Article,
  type BreadcrumbList
} from '@/src/utils/jsonld';

interface StructuredDataProps {
  data: Organization | SoftwareApplication | WebPage | Article | BreadcrumbList;
  id?: string;
}

/**
 * Generic component for rendering structured data
 */
export function StructuredData({ data, id = 'structured-data' }: StructuredDataProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: generateStructuredDataScript(data)
      }}
    />
  );
}

/**
 * Organization structured data component
 */
export function OrganizationStructuredData() {
  const organizationData = generateOrganizationSchema();
  
  return (
    <StructuredData 
      data={organizationData} 
      id="organization-structured-data" 
    />
  );
}

/**
 * Software Application structured data component
 */
export function SoftwareApplicationStructuredData() {
  const softwareData = generateSoftwareApplicationSchema();
  
  return (
    <StructuredData 
      data={softwareData} 
      id="software-application-structured-data" 
    />
  );
}

/**
 * WebPage structured data component
 */
interface WebPageStructuredDataProps {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}

export function WebPageStructuredData({ 
  name, 
  description, 
  url, 
  dateModified,
  breadcrumb 
}: WebPageStructuredDataProps) {
  const breadcrumbItems: BreadcrumbItem[] | undefined = breadcrumb?.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }));

  const webPageData = generateWebPageSchema(
    name,
    description,
    url,
    dateModified,
    breadcrumbItems
  );
  
  return (
    <StructuredData 
      data={webPageData} 
      id="webpage-structured-data" 
    />
  );
}

/**
 * Article structured data component
 */
interface ArticleStructuredDataProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  authorUrl?: string;
  image?: string;
}

export function ArticleStructuredData({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "CreateTOTALLY Team",
  authorUrl,
  image
}: ArticleStructuredDataProps) {
  const articleData = generateArticleSchema(
    headline,
    description,
    url,
    datePublished,
    dateModified,
    authorName,
    image,
    authorUrl
  );
  
  return (
    <StructuredData 
      data={articleData} 
      id="article-structured-data" 
    />
  );
}

/**
 * Breadcrumb structured data component
 */
interface BreadcrumbStructuredDataProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const breadcrumbData = generateBreadcrumbSchema(items);
  
  return (
    <StructuredData 
      data={breadcrumbData} 
      id="breadcrumb-structured-data" 
    />
  );
}

/**
 * Combined structured data component for pages that need multiple schemas
 */
interface CombinedStructuredDataProps {
  schemas: Array<Organization | SoftwareApplication | WebPage | Article | BreadcrumbList>;
}

export function CombinedStructuredData({ schemas }: CombinedStructuredDataProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <StructuredData 
          key={index}
          data={schema} 
          id={`structured-data-${index}`} 
        />
      ))}
    </>
  );
}

/**
 * Homepage structured data - combines Organization and SoftwareApplication
 */
export function HomepageStructuredData() {
  const organizationData = generateOrganizationSchema();
  const softwareData = generateSoftwareApplicationSchema();
  
  return (
    <CombinedStructuredData schemas={[organizationData, softwareData]} />
  );
}