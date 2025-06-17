import { GraphQLClient } from 'graphql-request';

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;

if (!HYGRAPH_ENDPOINT) {
  throw new Error('HYGRAPH_ENDPOINT environment variable is not defined.');
}

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
};

export const client = new GraphQLClient(HYGRAPH_ENDPOINT, { headers });