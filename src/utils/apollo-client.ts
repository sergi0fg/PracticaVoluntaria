import { ApolloClient, InMemoryCache } from '@apollo/client';

/*
export const client = new ApolloClient({
  uri: 'https://practicaopcional.deno.dev/graphql',
  cache: new InMemoryCache(),
});

*/

export const client = new ApolloClient({
    uri: 'https://practicaopcional.deno.dev/graphql',
    cache: new InMemoryCache(),
    
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3004',
    },

  });