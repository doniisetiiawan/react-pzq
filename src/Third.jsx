import React from 'react';
import { PermissionConsumer } from './PermissionContext';

const Third = () => (
  <PermissionConsumer name="third">
    <div>
      <button>Third</button>
    </div>
  </PermissionConsumer>
);

export default Third;
