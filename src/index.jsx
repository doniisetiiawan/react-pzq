import React from 'react';
import { render as renderJSX } from 'react-dom';

import MyList from './MyList';

function render() {
  const myList = renderJSX(<MyList />, document.getElementById('root'));

  myList.data = myList.data.setIn(['items', 0], 0);
}

for (let i = 0; i < 100; i += 1) {
  render();
}
