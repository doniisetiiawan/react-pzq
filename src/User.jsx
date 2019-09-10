import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

const Error = ({ error }) => Map(
  [[null, null]],
).get(error, <p><strong>{error}</strong></p>);

const Text = ({ children }) => Map(
  [[null, null]],
).get(children, <p>{children}</p>);

const User = ({
  error, first, last, age,
}) => (
  <section>
    <Error error={error} />

    <Text>{first}</Text>
    <Text>{last}</Text>
    <Text>{age}</Text>
  </section>
);

User.propTypes = {
  error: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  age: PropTypes.number,
};

export default User;
