import React from 'react';

export default function MyButton(props) {
  const {disabled, text} = props;

  return (
    <button type="button" disabled={disabled}>
      {text}
    </button>
  );
}

MyButton.defaultProps = {
  disabled: false,
  text: 'My Button',
};
