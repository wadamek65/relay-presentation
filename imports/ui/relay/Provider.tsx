import React from 'react';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { RelayEnvironmentProvider } from 'relay-hooks/lib';
import { FetchFunction } from 'relay-runtime/lib/network/RelayNetworkTypes';

const fetchQuery: FetchFunction = (
  operation,
  variables,
) => fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: operation.text,
    variables,
  }),
}).then(response => {
  return response.json();
});

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export const Provider = ({children}: { children: React.ReactNode }) => (
  <RelayEnvironmentProvider environment={environment}>
    {children}
  </RelayEnvironmentProvider>
);
