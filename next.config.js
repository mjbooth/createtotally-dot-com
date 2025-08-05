/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const webpack = require('webpack');

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    domains: ['eu-west-2.graphassets.com'],
  },
  distDir: ".next",

  webpack: (config, { isServer }) => {
    // Use memory caching instead of filesystem caching
    // This addresses the validation error
    config.cache = {
      type: "memory",
      maxGenerations: 10,
    };

    // Enable large string handling
    config.optimization.moduleIds = "deterministic";
    config.optimization.chunkIds = "deterministic";

    // Bundle analyzer stats file generation
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: true,
          statsFilename: isServer ? 'stats.server.json' : 'stats.client.json',
        })
      );
    }

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: false,
      };
      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        })
      );
    }

    if (!isServer && process.env.EXPORT_STATS === 'true') {
      config.plugins.push(
        new StatsWriterPlugin({
          filename: 'stats.json',
          stats: {
            all: false,
            assets: true,
            chunks: true,
            entrypoints: true,
            moduleAssets: true,
            reasons: false,
            usedExports: false,
          },
        })
      );
    }

    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    return config;
  },

  async redirects() {
    return [
      { source: '/demo', destination: '/get-started', permanent: true, },
      { source: '/contact-us', destination: '/get-started', permanent: true, },
    ];
  },

  async rewrites() {
    return [];
  },

  async headers() {
    /* 
     * Selective Caching Strategy for Core Web Vitals Optimization
     * 
     * 1. Static Assets (JS/CSS/Fonts): 1 year cache with immutable flag
     * 2. Images: 1 day browser cache, 30 days CDN cache with stale-while-revalidate
     * 3. Static XML files: 1 hour cache with CDN optimization
     * 4. API routes: No cache for dynamic submit-form, moderate cache for static content
     * 5. Pages: Default browser caching handled by Next.js
     */
    return [
      // Next.js static assets from _next folder - long-term caching (1 year)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // JavaScript files - long-term caching (1 year)
      {
        source: '/:path*.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // CSS files - long-term caching (1 year)
      {
        source: '/:path*.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Font files - long-term caching (1 year)
      {
        source: '/:path*.woff',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.ttf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.eot',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.otf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Image files - moderate caching with stale-while-revalidate
      {
        source: '/:path*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*.jpeg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*.gif',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*.avif',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      // Static sitemap files - moderate caching
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/sitemap-:number.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      // API routes - submit-form with no caching (dynamic content)
      {
        source: '/api/submit-form',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer({
  ...nextConfig,
  output: 'standalone',
});