import React from 'react';
import { Map } from 'immutable';

const ErrorMessage = ({ error }) => Map(
  [[null, null]],
).get(error, <strong>{error}</strong>);

const LoadingMessage = ({ loading }) => Map(
  [[null, null]],
).get(loading, <em>{loading}</em>);

const CancelLink = ({ loading, onClick }) => Map(
  [[null, null]],
).get(
  loading,
  <a href="#cancel" onClick={onClick}>
      Cancel
  </a>,
);

const UserList = ({
  error, loading, users, onClickCancel,
}) => (
  <section>
    <ErrorMessage error={error} />

    <LoadingMessage loading={loading} />

    <ul>
      {users.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>

    <CancelLink loading={loading} onClick={onClickCancel} />
  </section>
);

export default UserList;
