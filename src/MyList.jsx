import React, { Component } from 'react';

export default class MyList extends Component {
  onClick = (id) => {
    const { items } = this.props;
    const { name } = items.find((i) => i.id === id);
    console.log('clicked', `"${name}"`);
  };

  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(({ id, name }) => (
          <li key={id} onClick={() => this.onClick(id)}>
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
