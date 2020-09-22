import React from 'react';
import ApolloApp from './apollo';
import RelayApp from './relay';
import UrqlApp from './urql';

export const App = () => (
    <div>
        {/*<ApolloApp />*/}
        <RelayApp />
        <UrqlApp />
    </div>
);
