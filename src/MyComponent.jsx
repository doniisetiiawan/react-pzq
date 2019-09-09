import React from 'react';
import PropTypes from 'prop-types';

import MyUser from './MyUser';

const MyComponent = ({ myDate, myCount, myUsers }) => (
  <section>
    <p>{myDate.toLocaleString()}</p>

    <p>{myCount}</p>
    <ul>
      {myUsers.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  </section>
);

MyComponent.propTypes = {
  myDate: PropTypes.instanceOf(Date),
  myCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  myUsers: PropTypes.arrayOf(PropTypes.instanceOf(MyUser)),
};

export default MyComponent;
