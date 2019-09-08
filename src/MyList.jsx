import React, { Component } from 'react';

import reverse from './reverse';

export default class MyList extends Component {
  constructor(props) {
    super(props);

    this.state = { items: ['Angular', 'Ember', 'React'] };
  }

  onReverseClick = reverse.bind(this);

  render() {
    const {
      state: { items },
      onReverseClick,
    } = this;

    return (
      <section>
        <button onClick={onReverseClick}>Reverse</button>
        <ul>
          {items.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </section>
    );
  }
}
