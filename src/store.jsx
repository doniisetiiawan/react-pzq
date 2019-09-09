import React, { Component } from 'react';
import { fromJS } from 'immutable';

let components = fromJS([]);

let store = fromJS({});

export function setState(state) {
  store = state;

  for (const component of components) {
    component.setState({
      data: store,
    });
  }
}

export function getState() {
  return store;
}

export function connect(ComposedComponent) {
  return class ConnectedComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: store,
      };
    }

    componentDidMount() {
      components = components.push(this);
    }

    componentWillUnmount() {
      const index = components.findIndex(this);
      components = components.delete(index);
    }

    render() {
      const { data } = this.state;
      return <ComposedComponent {...data.toJS()} />;
    }
  };
}
