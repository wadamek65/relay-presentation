import React from 'react';
import { Form, Button, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { graphql, useMutation } from 'relay-hooks';
import { SendMessageSendMessageMutation } from '/imports/ui/Viewer/Chat/SendMessage/__generated__/SendMessageSendMessageMutation.graphql';

type SendMessageProps = {
  author: string;
}

export const SendMessage = ({author}: SendMessageProps) => {
  const [message, setMessage] = React.useState('');

  const [commitSendMessage] = useMutation<SendMessageSendMessageMutation>(graphql`
      mutation SendMessageSendMessageMutation($input: SendMessageInput!) {
          sendMessage(input: $input) {
              edge {
                  cursor
                  node {
                      id
                      author
                      sentAt
                      text
                  }
              }
          }
      }
  `);

  const onSubmit = () => {
    commitSendMessage({
        onError: error => console.error(error),
        onCompleted: ({sendMessage}) => {
          console.log(sendMessage);
        },
        variables: {
          input: {
            author,
            chatId: 'Chat:1',
            text: message
          }
        },
        configs: [
          {
            type: 'RANGE_ADD',
            parentID: 'Chat:1',
            edgeName: 'edge',
            connectionInfo: [
              {key: 'Messages_messages', rangeBehavior: 'append'}
            ]
          }
        ]
      }
    );
  }

  return (
    <Form
      name="send-message-form"
      style={{display: 'grid', gridTemplateColumns: '1fr 80px', padding: '0 16px'}}
      onFinish={onSubmit}
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
