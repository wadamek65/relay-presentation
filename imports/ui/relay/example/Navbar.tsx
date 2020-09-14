import React from 'react';
import { graphql, useFragment } from 'relay-hooks/lib';
import { Navbar_me$key } from './__generated__/Navbar_me.graphql';

export const Navbar = ({me}: { me: Navbar_me$key }) => {
  const meData = useFragment(graphql`
      fragment Navbar_me on Person {
          id
          name
          email
      }
  `, me);

  return (
    <header>
      {meData.name} ({meData.email})
    </header>
  );
}
