import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content from CMS or markdown sources before rendering
 * with dangerouslySetInnerHTML.
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'target'],
  });
}
