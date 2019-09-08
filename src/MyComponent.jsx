import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: 'React Awesomesauce (Busy)',
      content: 'Loading...',
    };
  }

  render() {
    const { heading, content } = this.state;

    return (
      <main>
        <h1>{heading}</h1>
        <p>{content}</p>
      </main>
    );
  }
}
