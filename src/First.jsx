import React from 'react';
import { PermissionConsumer } from './PermissionContext';

const First = () => (
  <PermissionConsumer name="first">
    <div>
      <button>First</button>
    </div>
  </PermissionConsumer>
);

export default First;
