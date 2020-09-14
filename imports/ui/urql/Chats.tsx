import React from 'react';
import { useQuery } from 'urql';

export const Chats = () => {
  const [result] = useQuery({
    query: `
      {
      viewer {
          chats {
            result {
              id
            }
          }
        }
      }
    `
  });

  if (result.error) {
    return <div>Error while fetching chats</div>;
  }

  if (result.fetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {result.data.viewer.chats.result.map(chat => (
        <div key={chat.id}>
          {chat.id}
        </div>
      ))}
    </div>
  );
}