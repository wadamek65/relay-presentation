import { Avatar, Card, Form, Input } from 'antd';
import React from 'react';

import { SendMessage } from './SendMessage';
import { Messages } from './Messages';

const width = '500px';

export const Chat = () => {
  const [author, setAuthor] = React.useState('user');

  return (
    <>
      <Input
        value={author}
        onChange={e => setAuthor(e.target.value)}
        style={{ width, marginBottom: '32px' }}
      />
      <Card
        style={{width}}
        actions={[<SendMessage author={author}/>]}
      >
        <Card.Meta title="Relay Chat" description="Relay Chat App"
                   avatar={<Avatar src="https://relay.dev/img/relay.svg"/>}/>
        <Messages author={author}/>
      </Card>
    </>
  );
}
