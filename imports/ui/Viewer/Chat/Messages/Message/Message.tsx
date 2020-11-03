import React from 'react';
import { Avatar, Typography } from 'antd';
import { graphql, useFragment } from 'relay-hooks';
import { Message_node$key } from '/imports/ui/Viewer/Chat/Messages/Message/__generated__/Message_node.graphql';


type MessageProps = {
  side: 'left' | 'right';
  message: Message_node$key;
}

export const Message = ({ side, message }: MessageProps) => {
  const messageData = useFragment(graphql`
    fragment Message_node on Message {
        id
        author
        sentAt
        text
    }
  `, message);


  return (
    <div style={{
      display: 'grid',
      gridColumnGap: '8px',
      gridTemplateColumns: side === 'left' ? '[avatar] 32px [message] 1fr' : '[message] 1fr [avatar] 32px',
      gridTemplateRows: 'auto auto'
    }}>
      <Avatar style={{gridRow: '1 / -1', gridColumn: 'avatar'}}>{messageData.author}</Avatar>
      <Typography.Text style={{gridColumn: 'message', textAlign: side}}>{messageData.text}</Typography.Text>
      <Typography.Text style={{gridColumn: 'message', textAlign: side}} type="secondary">{messageData.sentAt}</Typography.Text>
    </div>
  );
}
