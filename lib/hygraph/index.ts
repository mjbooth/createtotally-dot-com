// /lib/hygraph/index.ts

import { gql } from 'graphql-request';
import { client } from './client';
import { PostSummary, PostDetail } from './types';

const TEST_QUERY = gql`
  query {
    posts(first: 1) {
      id
      title
    }
  }
`;

export const testConnection = async () => {
  try {
    const result = await client.request(TEST_QUERY);
    console.log('Connection test result:', result);
    return result;
  } catch (error) {
    console.error('Connection test error:', error);
    throw error;
  }
};

const GET_ALL_POSTS = gql`
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

export const getAllPosts = async (): Promise<PostSummary[]> => {
  try {
    const { posts } = await client.request<{ posts: PostSummary[] }>(GET_ALL_POSTS);
    return posts;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    throw error;
  }
};

const GET_POST_BY_SLUG = gql`
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

export const getPostBySlug = async (slug: string): Promise<PostDetail> => {
  try {
    const { post } = await client.request<{ post: PostDetail }>(GET_POST_BY_SLUG, { slug });
    return post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    throw error;
  }
};

// Add any other queries or functions you need here