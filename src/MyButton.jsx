import React from 'react';

export default function MyButton(props) {
  const { disabled, text } = props;

  return <button disabled={disabled}>{text}</button>;
}
