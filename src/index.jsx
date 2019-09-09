import React from 'react';
import { render } from 'react-dom';

import cond from './cond';
import MyComponent from './MyComponent';

const ComposedVisible = cond(MyComponent, () => true);
const ComposedHidden = cond(MyComponent, () => false);

render(
  <section>
    <h1>Visible</h1>
    <ComposedVisible />
    <h2>Hidden</h2>
    <ComposedHidden />
  </section>,
  document.getElementById('root'),
);
