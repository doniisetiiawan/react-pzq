import React from 'react';

const MyList = ({ items }) => (
  <ul>
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export default MyList;
