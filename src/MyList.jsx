import React from 'react';

export default function MyList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
