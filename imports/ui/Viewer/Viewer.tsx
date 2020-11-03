import React from 'react';

import { Chat } from './Chat';
import { graphql, useQuery } from 'relay-hooks';
import { ViewerChatQuery } from '/imports/ui/Viewer/__generated__/ViewerChatQuery.graphql';

export const Viewer = () => {
  const { props, error } = useQuery<ViewerChatQuery>(graphql`
    query ViewerChatQuery {
        viewer {
            ...Chat_viewer
        }
    }
  `)

  if (props) {
    return (
      <Chat viewer={props.viewer} />
    )
  }

  if (error) {
    console.error(error);
    return (
      <div>Error</div>
    )
  }

  return (
    <div>Loading...</div>
  )
}
