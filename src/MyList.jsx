import React, { Component } from 'react';
import { fromJS } from 'immutable';

export default class MyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        items: [...Array(5000).keys()],
      }),
    };
  }

  shouldComponentUpdate(props, state) {
    return this.data !== state.data;
  }

  get data() {
    const { data: data1 } = this.state;
    return data1;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const items = this.data.get('items');

    return (
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }
}
