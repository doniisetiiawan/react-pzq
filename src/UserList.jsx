import React from 'react';
import { Map } from 'immutable';

const LoadingMessage = ({ loading }) => Map(
  [[null, null]],
).get(loading, <em>{loading}</em>);

const UserList = ({ loading, users }) => (
  <section>
    <LoadingMessage loading={loading} />

    <ul>
      {users.map((i) => (
        <li key={i.id.toUpperCase()}>{i.name}</li>
      ))}
    </ul>
  </section>
);

export default UserList;
