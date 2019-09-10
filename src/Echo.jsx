import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(
  ({ match: { params }, location: { search } }) => (
    <h1>{params.msg || new URLSearchParams(search).get('msg')}</h1>
  ),
);
