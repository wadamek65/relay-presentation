import React from 'react';

import { Message } from './Message';
import { graphql, useFragment } from 'relay-hooks';
import { Messages_edges$key } from '/imports/ui/Viewer/Chat/Messages/__generated__/Messages_edges.graphql';

type MessagesProps = {
  author: string;
  messages: Messages_edges$key
}

export const Messages = ({ author, messages }: MessagesProps) => {
  const messagesData = useFragment(graphql`
    fragment Messages_edges on MessageEdge @relay(plural: true) {
        node {
            ...Message_node
            id
        }
        cursor
    }
  `, messages);

  return (
    <div style={{display: 'grid', gridRowGap: '8px', gridAutoFlow: 'row', marginTop: '32px'}}>
      {messagesData.map(({ node }) => (
        <Message key={node.id} side="left" message={node} />
      ))}
    </div>
  );
}
