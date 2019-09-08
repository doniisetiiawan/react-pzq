import React from 'react';

export default function MySection(props) {
  const { children } = props;
  return (
    <section>
      <h2>My Section</h2>
      {children}
    </section>
  );
}
