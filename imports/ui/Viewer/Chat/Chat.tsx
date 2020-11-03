import { Avatar, Card, Form, Input } from 'antd';
import React from 'react';

import { SendMessage } from './SendMessage';
import { Messages } from './Messages';
import { graphql, useFragment } from 'relay-hooks';
import { Chat_viewer$key } from '/imports/ui/Viewer/Chat/__generated__/Chat_viewer.graphql';

const width = '500px';

type ChatProps = {
  viewer: Chat_viewer$key;
}

export const Chat = ({ viewer }: ChatProps) => {
  const [author, setAuthor] = React.useState('user');

  const chatData = useFragment(graphql`
    fragment Chat_viewer on Viewer {
        chat(id: "Chat:1") {
            messages(first: 100000) @connection(key: "Messages_messages") {
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                    hasPreviousPage
                }
                edges {
                    ...Messages_edges
                }
            }
        }
    }
  `, viewer);

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
        <Messages author={author} messages={chatData.chat.messages.edges} />
      </Card>
    </>
  );
}
