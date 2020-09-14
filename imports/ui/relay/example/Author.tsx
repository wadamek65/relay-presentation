import React from 'react';
import { graphql, useFragment } from 'relay-hooks/lib';
import { Author_author$key } from './__generated__/Author_author.graphql';

export const Author = ({ author }: { author: Author_author$key }) => {
  const authorData = useFragment(graphql`
    fragment Author_author on Person {
        id
        name
        email
    }
  `, author);

  console.log('relay: author render');

  return (
    <div>
      <h1>{authorData.name}</h1>
      <h2>{authorData.email}</h2>
    </div>
  )
}