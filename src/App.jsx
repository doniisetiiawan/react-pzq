import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  render() {
    const { clicks } = this.state;
    return (
      <section>
        <header>
          <h1>Hydrating The Client</h1>
        </header>
        <main>
          <p>Clicks {clicks}</p>
          <button
            onClick={() => this.setState(
              (state) => ({ clicks: state.clicks + 1 }),
            )}
          >
            Click Me
          </button>
        </main>
      </section>
    );
  }
}
