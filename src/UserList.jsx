import React from 'react';
import { Map } from 'immutable';

const ErrorMessage = ({ error }) => Map(
  [[null, null]],
).get(error, <strong>{error}</strong>);

const LoadingMessage = ({ loading }) => Map(
  [[null, null]],
).get(loading, <em>{loading}</em>);

const UserList = ({ error, loading, users }) => (
  <section>
    <ErrorMessage error={error} />

    <LoadingMessage loading={loading} />

    <ul>
      {users.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  </section>
);

export default UserList;
