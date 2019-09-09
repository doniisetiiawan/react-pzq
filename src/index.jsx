import React from 'react';
import { render } from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

const users = ['User 1', 'User 2'];

const groups = ['Group 1', 'Group 2'];

render(
  <section>
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>

    <ErrorBoundary>
      <MyComponent users={users} />
      <hr />
    </ErrorBoundary>

    <ErrorBoundary>
      <MyComponent groups={groups} />
      <hr />
    </ErrorBoundary>

    <ErrorBoundary>
      <MyComponent users={users} groups={groups} />
    </ErrorBoundary>

    <ErrorBoundary>
      <MyComponent users={0} groups={0} />
    </ErrorBoundary>
  </section>,
  document.getElementById('root'),
);
