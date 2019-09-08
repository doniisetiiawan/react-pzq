import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { render } from 'react-dom';

import { users } from './api';
import UserList from './UserList';

const onClickCancel = (e) => {
  e.preventDefault();

  render(<p>Cancelled</p>, document.getElementById('root'));
};

export default class UserListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        error: null,
        loading: 'loading...',
        users: [],
      }),
    };
  }

  componentDidMount() {
    this.job = users();

    this.job.then(
      (result) => {
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('users', fromJS(result.users));
      },

      (error) => {
        if (!error.cancelled) {
          this.data = this.data.set('loading', null).set('error', error);
        }
      },
    );
  }

  componentWillUnmount() {
    this.job.cancel();
  }

  get data() {
    const { data: data1 } = this.state;
    return data1;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    return (
      <UserList onClickCancel={onClickCancel} {...this.data.toJS()} />
    );
  }
}
