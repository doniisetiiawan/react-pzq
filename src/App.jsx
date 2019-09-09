import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import One from './one';
import Two from './two';

const App = () => (
  <Router>
    <>
      <Route exact path="/" render={() => <Redirect to="one" />} />
      <One />
      <Two />
    </>
  </Router>
);

export default App;
