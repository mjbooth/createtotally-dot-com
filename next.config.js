/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [], // Add external image domains
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
              value: 'public, max-age=31536000, immutable',
            },
          ],
        }
      ];
    },
  };

  module.exports = {
  output: 'standalone',
};