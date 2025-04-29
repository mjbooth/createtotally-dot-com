import { GraphQLClient, gql } from 'graphql-request';

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;

if (!HYGRAPH_ENDPOINT) {
  throw new Error('HYGRAPH_ENDPOINT environment variable is not defined.');
}

const client = new GraphQLClient(HYGRAPH_ENDPOINT);

// Fetch ALL posts
export const getAllPosts = async () => {
  const query = gql`
    query GetAllPosts {
      posts(orderBy: publishedAt_DESC) {
        id
        title
        slug
        excerpt
        publishedAt
        coverImage {
          url
        }
      }
    }
  `;

  const { posts } = await client.request<{ posts: PostSummary[] }>(query);

  return posts;
};

// Fetch SINGLE post by slug
export const getPostBySlug = async (slug: string) => {
  const query = gql`
    query PostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
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
      }
    }
  `;

  const variables = { slug };

  const { post } = await client.request<{ post: PostDetail }>(query, variables);

  return post;
};

interface PostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
}

interface PostDetail {
  id: string;
  title: string;
  slug: string;
  content: {
    html: string;
  };
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  excerpt: string;
}
