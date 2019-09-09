import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import First from './First';
import Second from './Second';

const Two = () => (
  <>
    <Route exact path="/two" render={() => <Redirect to="/two/1" />} />
    <Route exact path="/two/1" component={First} />
    <Route exact path="/two/2" component={Second} />
  </>
);

export default Two;
