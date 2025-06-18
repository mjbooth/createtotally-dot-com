const GET_POST_BY_CATEGORY_AND_SLUG = gql`
  query PostByCategoryAndSlug($slug: String!, $postType: String!) {
    posts(where: { slug: $slug, postType: $postType }) {
      id
      title
      slug
      content {
        html
      }
      coverImage {
        url
      }
      excerpt
      publishedAt
      postType
      seoOverride {
        title
        description
        image {
          url
        }
      }
    }
  }
`;

import { gql } from 'graphql-request';
import { client } from './client';
import { PostSummary, PostDetail, Page, Integration } from './types';

interface PostDetailWithSeo extends PostDetail {
  seoOverride?: {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: {
      url: string;
      alt?: string;
    };
  };
}

interface IntegrationWithSeoOverride extends Integration {
  seoOverride?: {
    title?: string;
    description?: string;
    image?: {
      url: string;
    };
  };
}

const GET_ALL_BLOG_POSTS = gql`
  query GetAllBlogPosts {
    posts(
      where: { 
        NOT: { 
          postType_in: ["glossary", "integrations"] 
        } 
      }
      orderBy: publishedAt_DESC
    ) {
      id
      title
      slug
      excerpt
      publishedAt
      postType
      coverImage {
        url
      }
    }
  }
`;

export const getAllBlogPosts = async (): Promise<PostSummary[]> => {
  try {
    const { posts } = await client.request<{ posts: PostSummary[] }>(GET_ALL_BLOG_POSTS);
    return posts;
  } catch (error) {
    throw error;
  }
};

const GET_ALL_IN_ACTION_POSTS = gql`
  query getAllInActionPosts {
    posts(
      where: { postType: "automation-in-action" }
      orderBy: publishedAt_DESC
    ) {
      id
      title
      slug
      excerpt
      publishedAt
      postType
      coverImage {
        url
      }
    }
  }
`;

export const getAllInActionPosts = async (): Promise<PostSummary[]> => {
  try {
    const { posts } = await client.request<{ posts: PostSummary[] }>(GET_ALL_IN_ACTION_POSTS);
    return posts;
  } catch (error) {
    throw error;
  }
};

const GET_POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      integrationThirdParty
      content {
        html
      }
      coverImage {
        url
      }
      excerpt
      publishedAt
    }
  }
`;

export const getPostBySlug = async (slug: string): Promise<PostDetailWithSeo> => {
  try {
    const { post } = await client.request<{ post: PostDetailWithSeo }>(GET_POST_BY_SLUG, { slug });
    return post;
  } catch (error) {
    throw error;
  }
};

export const getPostByCategoryAndSlug = async (category: string, slug: string): Promise<PostDetailWithSeo | null> => {
  try {
    const { posts } = await client.request<{ posts: PostDetailWithSeo[] }>(GET_POST_BY_CATEGORY_AND_SLUG, { slug, postType: category });
    return posts.length > 0 ? posts[0] : null;
  } catch {
    return null;
  }
};

const GET_ALL_PAGES = gql`
  query GetAllPages {
    pages {
      id
      title
      slug
      subtitle
      icon {
        url
      }
    }
  }
`;

export const getAllPages = async (): Promise<Page[]> => {
  try {
    const { pages } = await client.request<{ pages: Page[] }>(GET_ALL_PAGES);
    return pages;
  } catch (error) {
    throw error;
  }
};

const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      title
      slug
      subtitle
      postType
      content {
        html
      }
      coverImage {
        url
      }
      icon {
        url
      }
    }
  }
`;

export const getPageBySlug = async (slug: string): Promise<Page> => {
  try {
    const { page } = await client.request<{ page: Page }>(GET_PAGE_BY_SLUG, { slug });
    return page;
  } catch (error) {
    throw error;
  }
};

const GET_ALL_INTEGRATIONS = `
  query GetAllIntegrations {
    pages(where: { slug_contains: "integration-" }) {
      id
      title
      subtitle
      slug
      icon {
        url
      }
      coverImage {
        url
      }
    }
  }
`;

const GET_INTEGRATION_BY_SLUG = `
  query GetIntegrationBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      title
      subtitle
      slug
      icon {
        url
      }
      coverImage {
        url
      }
      content {
        raw
      }
      seoOverride {
        title
        description
        image {
          url
        }
      }
    }
  }
`;

export const getAllIntegrations = async (): Promise<IntegrationWithSeoOverride[]> => {
  try {
    const { pages } = await client.request<{ pages: IntegrationWithSeoOverride[] }>(GET_ALL_INTEGRATIONS);
    return pages;
  } catch (error) {
    throw error;
  }
};

export const getIntegrationBySlug = async (slug: string): Promise<IntegrationWithSeoOverride | null> => {
  try {
    const { page } = await client.request<{ page: IntegrationWithSeoOverride }>(GET_INTEGRATION_BY_SLUG, { slug });
    return page;
  } catch {
    return null;
  }
};


export const getPostsByCategory = async (category: string): Promise<PostDetailWithSeo[]> => {
  const GET_POSTS_BY_CATEGORY = gql`
    query PostsByCategory($postType: String!) {
      posts(where: { postType: $postType }, orderBy: publishedAt_DESC) {
        id
        title
        slug
        excerpt
        integrationThirdParty
        publishedAt
        coverImage {
          url
        }
      }
    }
  `;

  const { posts } = await client.request<{ posts: PostDetailWithSeo[] }>(GET_POSTS_BY_CATEGORY, {
    postType: category,
  });

  return posts;
};
const GET_ALL_POST_SLUGS = gql`
  query GetAllPostSlugs {
    posts {
      slug
      postType
    }
  }
`;

export const getAllPostSlugs = async (): Promise<{ slug: string; postType: string }[]> => {
  try {
    const { posts } = await client.request<{ posts: { slug: string; postType: string }[] }>(GET_ALL_POST_SLUGS);
    return posts;
  } catch (error) {
    throw error;
  }
};