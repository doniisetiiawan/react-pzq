import React from 'react';

const MyButton = ({
  clicks, disabled, text, onClick,
}) => (
  <section>
    <p>{clicks} clicks</p>

    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  </section>
);

export default MyButton;
