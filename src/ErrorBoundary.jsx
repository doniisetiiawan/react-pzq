import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    if (error === null) {
      const { children } = this.props;
      return children;
    }
    return <strong>{error.toString()}</strong>;
  }
}
