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

      // Only add buffer fallback if not in server context
      if (!isServer) {
        // Convert large strings to buffer - only for client-side
        config.resolve.fallback = {
          ...config.resolve.fallback,
          buffer: false, // Use false instead of require.resolve
        };

        // Add Buffer polyfill only for browser environments
        config.plugins.push(
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          })
        );
      }

      // Enable WebAssembly output optimization
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
      return config;
    },

    async redirects() {
      return [];
    },

    async rewrites() {
      return [];
    },
  };

  module.exports = nextConfig;
  