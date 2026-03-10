import sanitize from 'sanitize-html';

/**
 * Sanitize HTML content from CMS or markdown sources before rendering
 * with dangerouslySetInnerHTML.
 */
export function sanitizeHtml(html: string): string {
  return sanitize(html, {
    allowedTags: sanitize.defaults.allowedTags.concat(['img', 'iframe', 'h1', 'h2']),
    allowedAttributes: {
      ...sanitize.defaults.allowedAttributes,
      iframe: ['src', 'allow', 'allowfullscreen', 'frameborder', 'scrolling', 'width', 'height'],
      img: ['src', 'alt', 'width', 'height', 'loading'],
      a: ['href', 'target', 'rel', 'name'],
      '*': ['class', 'id', 'style'],
    },
    allowedIframeHostnames: ['www.youtube.com', 'player.vimeo.com'],
  });
}
