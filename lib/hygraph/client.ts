import { GraphQLClient } from 'graphql-request';

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;

if (!HYGRAPH_ENDPOINT) {
  throw new Error('HYGRAPH_ENDPOINT environment variable is not defined.');
}

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
};

console.log('HYGRAPH_ENDPOINT:', HYGRAPH_ENDPOINT);
console.log('Request headers:', headers);

export const client = new GraphQLClient(HYGRAPH_ENDPOINT, { headers });

export function testClientSetup() {
  console.log('Testing client setup...');
  console.log('HYGRAPH_ENDPOINT:', HYGRAPH_ENDPOINT);
  console.log('Request headers:', headers);
  return { HYGRAPH_ENDPOINT, headers };
}

console.log('client.ts is being executed');