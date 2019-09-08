import React from 'react';

export default function MyButton(props) {
  const { children } = props;
  return <button type="button">{children}</button>;
}
