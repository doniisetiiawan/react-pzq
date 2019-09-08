import React, { Component } from 'react';
import { fromJS } from 'immutable';

import { users } from './api';
import UserList from './UserList';

class UserListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        error: null,
        users: [],
      }),
    };
  }

  componentDidMount() {
    users().then(
      (result) => {
        this.data = this.data
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

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      data: state.data.set(
        'loading',
        state.data.get('users').size === 0 ? props.loading : null,
      ),
    };
  }

  render() {
    return <UserList {...this.data.toJS()} />;
  }
}

UserListContainer.defaultProps = {
  loading: 'loading...',
};

export default UserListContainer;
