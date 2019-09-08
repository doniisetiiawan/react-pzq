import React, { Component } from 'react';

export default class MyUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modified: new Date(),
      first: 'First',
      last: 'Last',
    };
  }

  shouldComponentUpdate(props, state) {
    const { modified } = this.state;
    return Number(state).modified > Number(modified);
  }

  render() {
    const { modified, first, last } = this.state;

    return (
      <section>
        <p>{modified.toLocaleString()}</p>
        <p>{first}</p>
        <p>{last}</p>
      </section>
    );
  }
}
