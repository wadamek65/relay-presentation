import React from 'react';
import { Provider } from './Provider';
import { Chats as ChatsExample } from './example/Chats';
import { EditPerson } from './example/EditPerson';

const App = () => (
  <Provider>
    <div style={{ border: '1px solid black'}}>
      relay
      <EditPerson/>
      <ChatsExample />
    </div>
  </Provider>
)

export default App;
