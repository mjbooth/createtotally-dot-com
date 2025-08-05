module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
      url: [
        'http://localhost:3000',
        'http://localhost:3000/features/creative-automation',
        'http://localhost:3000/platform/figma-creative-automation',
        'http://localhost:3000/pricing',
        'http://localhost:3000/get-started'
      ],
      settings: {
        chromeFlags: '--no-sandbox --headless',
        preset: 'desktop'
      }
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': 'off'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};