import 'antd/dist/antd.css';
import React from 'react';

import { Provider } from './Provider';
import { Viewer } from './Viewer';

export const App = () => (
  <Provider>
    <Viewer />
  </Provider>
);
