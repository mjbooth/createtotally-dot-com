/**
 * A lightweight shimmer placeholder for next/image blur loading.
 * Renders as a subtle animated gradient that reserves space while images load.
 */
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#E8E4DF" offset="20%" />
      <stop stop-color="#F4F0EB" offset="50%" />
      <stop stop-color="#E8E4DF" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#E8E4DF" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;

function toBase64(str: string) {
  return typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
}

export function blurDataURL(w = 700, h = 400): string {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
}
