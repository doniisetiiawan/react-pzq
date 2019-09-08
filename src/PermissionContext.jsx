/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext('permissions');

export class PermissionProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: true,
      second: false,
      third: true,
    };
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

const PermissionConsumer = ({ name, children }) => (
  <Consumer>{(value) => value[name] && children}</Consumer>
);

export { PermissionConsumer };
