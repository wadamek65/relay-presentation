import React from 'react';
import { Form, Button, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';

type SendMessageProps = {
  author: string;
}

export const SendMessage = ({ author }: SendMessageProps) => {
  const [message, setMessage] = React.useState('');

  return (
    <Form
      name="send-message-form"
      style={{display: 'grid', gridTemplateColumns: '1fr 80px', padding: '0 16px'}}
    >
      <Form.Item name="message">
        <Input
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </Form.Item>
      <Form.Item name="send">
        <Button htmlType="submit" disabled={message === ''} type="primary" icon={<SendOutlined/>}>Send</Button>
      </Form.Item>
    </Form>
  )
}
