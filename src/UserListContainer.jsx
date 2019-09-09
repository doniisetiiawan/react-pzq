import React, { Component } from 'react';
import { fromJS } from 'immutable';

import { users } from './api';
import UserList from './UserList';

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
    users().then(
      (result) => {
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('users', fromJS(result.users));
      },
      (error) => {
        this.data = this.data.set('loading', null).set('error', error);
      },
    );
  }

  get data() {
    const { data: data1 } = this.state;
    return data1;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    if (this.data.get('error') !== null) {
      throw new Error(this.data.get('error'));
    }
    return <UserList {...this.data.toJS()} />;
  }
}
