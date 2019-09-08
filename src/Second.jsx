import React from 'react';
import { PermissionConsumer } from './PermissionContext';

const Second = () => (
  <PermissionConsumer name="second">
    <div>
      <button>Second</button>
    </div>
  </PermissionConsumer>
);

export default Second;
