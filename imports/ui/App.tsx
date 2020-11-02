import 'antd/dist/antd.css';
import React from 'react';

import { Provider } from './Provider';
import { Chat } from '/imports/ui/Chat';

export const App = () => (
  <Provider>
    <Chat />
  </Provider>
);
