import React from 'react';
import { useQuery, graphql } from 'relay-hooks/lib';
import { ChatsChatsQuery } from './__generated__/ChatsChatsQuery.graphql';
import { Author } from './Author';
import { Navbar } from './Navbar';
import { Stats } from './Stats';

export const Chats = () => {
  const {error, props} = useQuery<ChatsChatsQuery>(graphql`
      query ChatsChatsQuery {
          viewer {
              me {
                  ...Navbar_me
              }
              chats {
                  result {
                      id
                      author {
                          ...Author_author
                          ...Stats_author
                      }
                  }
              }
          }
      }
  `, {});
  console.log('relay: chats render');

  if (error) {
    return <div>Error while fetching chats</div>;
  }

  if (props) {
    return (
      <div>
        {/*<Navbar me={props.viewer.me}/>*/}
        {props.viewer.chats.result.map(chat => (
          <div key={chat.id}>
            {chat.id}
            <Author author={chat.author}/>
            {/*<Stats author={chat.author}/>*/}
          </div>
        ))}
      </div>
    );
  }

  return <div>Loading...</div>;
}