import React from 'react';
import { useQuery } from 'urql';
import { Author } from '/imports/ui/urql/example/Author';

export const Chats = () => {
  const [result] = useQuery({
    query: `
      {
        viewer {
            chats {
                result {
                    id
                    author {
                        id
                        email
                        name
                    }
                }
            }
          }
      }
    `
  });

  console.log('urql: chats render');

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
          <Author author={chat.author}/>
        </div>
      ))}
    </div>
  );
}