import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: false,
      second: true,
    };
  }

  render() {
    const { first, second } = this.state;

    return (
      <main>
        <section>
          <button type="button" disabled={first}>
            First
          </button>
        </section>
        <section>
          <button type="button" disabled={second}>
            Second
          </button>
        </section>
      </main>
    );
  }
}
