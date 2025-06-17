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
    return [];
  },

  async rewrites() {
    return [];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      }
    ];
  },
};

module.exports = withBundleAnalyzer({
  ...nextConfig,
  output: 'standalone',
});