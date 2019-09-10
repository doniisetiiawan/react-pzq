import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const {
      match: { params },
      location: { search },
    } = this.props;

    const desc = params.desc === 'desc' || !!new URLSearchParams(search).get('desc');

    fetchUsers(desc).then((users) => {
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

UsersContainer.propTypes = {
  params: PropTypes.object,
  location: PropTypes.object.isRequired,
};
