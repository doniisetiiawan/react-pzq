import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import User from './User';
import { fetchUser } from './api';

export default class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        error: null,
        first: null,
        last: null,
        age: null,
      }),
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetchUser(+id).then(
      (user) => {
        this.data = this.data.merge(user, { error: null });
      },

      (error) => {
        this.data = this.data.merge({
          error,
          first: null,
          last: null,
          age: null,
        });
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
    return <User {...this.data.toJS()} />;
  }
}

UserContainer.propTypes = {
  match: PropTypes.object.isRequired,
};
