import React from 'react';
import { Avatar, Typography } from 'antd';

type MessageProps = {
  side: 'left' | 'right';
}

export const Message = ({ side }: MessageProps) => {
  return (
    <div style={{
      display: 'grid',
      gridColumnGap: '8px',
      gridTemplateColumns: side === 'left' ? '[avatar] 32px [message] 1fr' : '[message] 1fr [avatar] 32px',
      gridTemplateRows: 'auto auto'
    }}>
      <Avatar style={{gridRow: '1 / -1', gridColumn: 'avatar'}}>W</Avatar>
      <Typography.Text style={{gridColumn: 'message', textAlign: side}}>My message</Typography.Text>
      <Typography.Text style={{gridColumn: 'message', textAlign: side}} type="secondary">Sent at {new Date().toLocaleString()}</Typography.Text>
    </div>
  );
}
