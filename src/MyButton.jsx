import React from 'react';

export default function MyButton(props) {
  const { children } = props;
  return <button onClick={(e) => console.log('clicked', e)}>{children}</button>;
}
