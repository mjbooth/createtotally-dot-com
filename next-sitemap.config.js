/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.createtotally.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/server-sitemap.xml',
  ],
  additionalPaths: async () => {
    const paths = [];

    // Static pages with custom priorities and changefreq
    const staticPages = [
      // Homepage - highest priority
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      
      // Main feature pages - high priority
      { loc: '/features/easy-templating', priority: 0.8, changefreq: 'monthly' },
      { loc: '/features/creative-automation', priority: 0.8, changefreq: 'monthly' },
      { loc: '/features/workflow-automation', priority: 0.8, changefreq: 'monthly' },
      { loc: '/features/libraries-and-asset-management', priority: 0.8, changefreq: 'monthly' },
      { loc: '/features/performance-insights', priority: 0.8, changefreq: 'monthly' },
      
      // Platform pages - high priority
      { loc: '/platform/figma-creative-automation', priority: 0.8, changefreq: 'monthly' },
      { loc: '/platform/adobe-indesign-automation', priority: 0.8, changefreq: 'monthly' },
      { loc: '/platform/adobe-after-effects-automation', priority: 0.8, changefreq: 'monthly' },
      
      // Important static pages
      { loc: '/pricing', priority: 0.7, changefreq: 'monthly' },
      { loc: '/get-started', priority: 0.7, changefreq: 'monthly' },
      { loc: '/the-edit', priority: 0.6, changefreq: 'weekly' },
      
      // Category pages
      { loc: '/perspectives', priority: 0.6, changefreq: 'weekly' },
      { loc: '/integrations', priority: 0.6, changefreq: 'monthly' },
      { loc: '/automation-in-action', priority: 0.6, changefreq: 'weekly' },
      { loc: '/glossary', priority: 0.5, changefreq: 'monthly' },
      
      // Legal pages
      { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
      { loc: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
    ];

    // Add static pages
    staticPages.forEach(page => {
      paths.push({
        loc: page.loc,
        lastmod: new Date().toISOString(),
        changefreq: page.changefreq,
        priority: page.priority,
      });
    });

    // Dynamic content pages are handled by the server-sitemap.xml route
    // which fetches real URLs from the CMS at request time

    return paths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.createtotally.com/server-sitemap.xml',
    ],
  },
};

module.exports = config;