// src/types/hygraph.ts

export type Post = {
  id: string;
  slug: string;
  title?: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: {
    url: string;
  };
  integrationThirdParty?: string;
  content?: {
    html: string;
  };
};