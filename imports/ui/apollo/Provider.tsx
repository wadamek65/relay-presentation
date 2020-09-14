import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

export const Provider = ({children}: { children: React.ReactNode }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);
