import React, { Component } from 'react';
import { fromJS } from 'immutable';

import Users from './Users';
import { fetchUsers } from './api';

export default class UsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        users: [],
      }),
    };
  }

  componentDidMount() {
    fetchUsers().then((users) => {
      this.data = this.data.set('users', users);
    });
  }

  get data() {
    const { data: data1 } = this.state;
    return data1;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    return <Users {...this.data.toJS()} />;
  }
}
