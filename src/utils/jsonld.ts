/**
 * Utility functions for generating JSON-LD structured data
 * Following schema.org guidelines for SEO optimization
 */

export interface Organization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: {
    "@type": string;
    url: string;
  };
  description: string;
  sameAs: string[];
  contactPoint: {
    "@type": string;
    contactType: string;
    url: string;
  }[];
  address?: {
    "@type": string;
    addressCountry: string;
  };
}

export interface SoftwareApplication {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string[];
  offers: {
    "@type": string;
    priceCurrency: string;
    price: string;
    priceValidUntil: string;
    availability: string;
    url: string;
  };
  creator: {
    "@type": string;
    name: string;
    url: string;
  };
  screenshot?: string[];
  featureList?: string[];
}

export interface WebPage {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  isPartOf: {
    "@type": string;
    name: string;
    url: string;
  };
  inLanguage: string;
  dateModified?: string;
  breadcrumb?: {
    "@type": string;
    itemListElement: BreadcrumbItem[];
  };
}

export interface Article {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image?: string;
  author: {
    "@type": string;
    name: string;
    url?: string;
  };
  publisher: {
    "@type": string;
    name: string;
    url: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  url: string;
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
}

export interface BreadcrumbItem {
  "@type": string;
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbList {
  "@context": string;
  "@type": string;
  itemListElement: BreadcrumbItem[];
}

/**
 * Generate Organization schema for CreateTOTALLY
 */
export function generateOrganizationSchema(): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CreateTOTALLY",
    url: "https://www.createtotally.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.createtotally.com/CreateTOTALLY_horizontal.png"
    },
    description: "Creative automation platform for Figma & Adobe teams. Scale creative production with AI-powered automation while maintaining full creative control.",
    sameAs: [
      "https://www.linkedin.com/company/createtotally",
      "https://twitter.com/createtotally"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: "https://www.createtotally.com/get-started"
      }
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB"
    }
  };
}

/**
 * Generate SoftwareApplication schema for the CreateTOTALLY platform
 */
export function generateSoftwareApplicationSchema(): SoftwareApplication {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CreateTOTALLY",
    description: "AI-powered creative automation platform that integrates with Figma and Adobe tools to scale design production while maintaining creative control.",
    url: "https://www.createtotally.com",
    applicationCategory: "DesignApplication",
    operatingSystem: ["Web Browser", "Windows", "macOS"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      url: "https://www.createtotally.com/pricing"
    },
    creator: {
      "@type": "Organization",
      name: "CreateTOTALLY",
      url: "https://www.createtotally.com"
    },
    screenshot: [
      "https://www.createtotally.com/AutomationSuite.svg",
      "https://www.createtotally.com/SetUpInFigma.png",
      "https://www.createtotally.com/content-variations-at-scale.png"
    ],
    featureList: [
      "Creative automation for Figma and Adobe",
      "No-code template creation", 
      "Multi-language content generation",
      "Automated asset resizing and formatting",
      "Approval workflow management",
      "Performance tracking and analytics"
    ]
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(
  name: string,
  description: string,
  url: string,
  dateModified?: string,
  breadcrumb?: BreadcrumbItem[]
): WebPage {
  const webPage: WebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "CreateTOTALLY",
      url: "https://www.createtotally.com"
    },
    inLanguage: "en-US"
  };

  if (dateModified) {
    webPage.dateModified = dateModified;
  }

  if (breadcrumb && breadcrumb.length > 0) {
    webPage.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb
    };
  }

  return webPage;
}

/**
 * Generate Article schema for blog posts and case studies
 */
export function generateArticleSchema(
  headline: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  authorName: string = "CreateTOTALLY Team",
  image?: string,
  authorUrl?: string
): Article {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl
    },
    publisher: {
      "@type": "Organization",
      name: "CreateTOTALLY",
      url: "https://www.createtotally.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.createtotally.com/CreateTOTALLY_horizontal.png"
      }
    },
    datePublished,
    dateModified,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generate structured data script tag content
 */
export function generateStructuredDataScript(data: Record<string, unknown> | object): string {
  return JSON.stringify(data, null, 2);
}