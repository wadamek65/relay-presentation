import React from 'react';

export const Author = ({ author }) => {
  console.log('urql: author render');

  React.useEffect(() => {
    console.log('urql: effect fired');
  }, [author]);

  return (
    <div>
      <h1>{author.name}</h1>
      <h2>{author.email}</h2>
    </div>
  )
}