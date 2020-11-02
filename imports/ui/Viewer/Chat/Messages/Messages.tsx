import React from 'react';

import { Message } from './Message';

type MessagesProps = {
  author: string;
}

export const Messages = ({ author }: MessagesProps) => {
  return (
    <div style={{display: 'grid', gridRowGap: '8px', gridAutoFlow: 'row', marginTop: '32px'}}>
      <Message side="left"/>
      <Message side="right"/>
    </div>
  );
}
