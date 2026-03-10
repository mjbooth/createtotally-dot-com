import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      prefetch: jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    span: 'span',
    img: 'img',
    section: 'section',
    article: 'article',
    main: 'main',
    header: 'header',
    footer: 'footer',
    nav: 'nav',
    ul: 'ul',
    li: 'li',
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  },
  AnimatePresence: ({ children }) => children,
}));

// Mock GSAP
jest.mock('gsap', () => ({
  registerPlugin: jest.fn(),
  set: jest.fn(),
  to: jest.fn(),
  from: jest.fn(),
  fromTo: jest.fn(),
  timeline: jest.fn(() => ({
    to: jest.fn(),
    from: jest.fn(),
    fromTo: jest.fn(),
    set: jest.fn(),
  })),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}));

// Setup environment variables for testing
process.env.HYGRAPH_ENDPOINT = 'https://test-endpoint.com/graphql';
process.env.NODE_ENV = 'test';

// Setup webhook URL for API tests
process.env.TRAY_WEBHOOK_URL = 'https://test-webhook.example.com';


// Mock next/script to render a plain <script> tag in jsdom
jest.mock('next/script', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: function MockScript({ id, type, dangerouslySetInnerHTML, ...props }) {
      return React.createElement('script', {
        id,
        type,
        dangerouslySetInnerHTML,
        ...props,
      });
    },
  };
});