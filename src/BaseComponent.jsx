import React, { Component } from 'react';
import { fromJS } from 'immutable';

export default class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        items: [],
      }),
    };
  }

  get data() {
    const { data: data1 } = this.state;
    return data1;
  }

  set data(data) {
    this.setState({ data });
  }

  onClick = (id) => () => {
    this.data = this.data.update('items', (items) => items.update(
      items.indexOf(items.find((i) => i.get('id') === id)),
      (item) => item.update('done', (d) => !d),
    ));
  };

  render() {
    const { items } = this.data.toJS();

    return (
      <ul>
        {items.map((i) => (
          <li
            key={i.id}
            onClick={this.onClick(i.id)}
            style={{
              cursor: 'pointer',
              textDecoration: i.done ? 'line-through' : 'none',
            }}
          >
            {i.name}
          </li>
        ))}
      </ul>
    );
  }
}
