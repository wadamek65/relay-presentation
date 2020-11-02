import React from 'react';
import {
  Environment,
  Observable,
  RecordSource,
  Store,
} from 'relay-runtime';
import { RelayEnvironmentProvider } from 'relay-hooks/lib';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import 'regenerator-runtime/runtime';
import {
  RelayNetworkLayer,
  SubscribeFunction
} from 'react-relay-network-modern';

const wsClient = new SubscriptionClient('ws://localhost:4000/graphql', {reconnect: true});

const subscribeFn: SubscribeFunction = (request, variables) => {
  const subscribeObservable = wsClient.request({
    query: request.text as string,
    operationName: request.name,
    variables,
  });

  return Observable.from(subscribeObservable as any) as any;
};

const network = new RelayNetworkLayer([], {
  subscribeFn,
});

const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <RelayEnvironmentProvider environment={environment}>
    {children}
  </RelayEnvironmentProvider>
);
