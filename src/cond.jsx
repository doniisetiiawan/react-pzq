import React from 'react';

export default (Component, predicate) => (props) => predicate() && <Component {...props} />;
