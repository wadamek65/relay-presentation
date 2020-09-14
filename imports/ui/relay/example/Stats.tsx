import React from 'react';
import { graphql, useFragment } from 'relay-hooks/lib';
import { Stats_author$key } from './__generated__/Stats_author.graphql';

export const Stats = ({ author }: { author: Stats_author$key }) => {
  const authorData = useFragment(graphql`
    fragment Stats_author on Person {
        id
        name
        email
    }
  `, author);

  return (
    <div>
      <h1>{authorData.name}</h1>
      <h2>{authorData.email}</h2>
    </div>
  )
}