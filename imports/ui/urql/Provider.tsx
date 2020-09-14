import React from 'react';
import { createClient, dedupExchange, fetchExchange, Provider as EnvironmentProvider } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

const environment = createClient({
  url: 'graphql',
  exchanges: [dedupExchange, cacheExchange({}), fetchExchange],
});
export const Provider = ({children}: { children: React.ReactNode }) => (
  <EnvironmentProvider value={environment}>
    {children}
  </EnvironmentProvider>
);
