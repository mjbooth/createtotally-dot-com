import { GraphQLClient } from 'graphql-request';

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
};

let _client: GraphQLClient | null = null;

export function getClient(): GraphQLClient {
  if (!_client) {
    const endpoint = process.env.HYGRAPH_ENDPOINT;
    if (!endpoint) {
      throw new Error('HYGRAPH_ENDPOINT environment variable is not defined.');
    }
    _client = new GraphQLClient(endpoint, { headers });
  }
  return _client;
}

/** @deprecated Use getClient() instead */
export const client = new Proxy({} as GraphQLClient, {
  get(_, prop) {
    return (getClient() as never)[prop];
  },
});