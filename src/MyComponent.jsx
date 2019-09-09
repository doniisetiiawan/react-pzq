import React from 'react';
import BaseComponent from './BaseComponent';

export default class MyComponent extends BaseComponent {
  componentDidMount() {
    this.data = this.data.merge({
      placeholder: 'Enter a name...',
      enabled: true,
    });
  }

  onChange = ({ target: { value } }) => {
    this.data = this.data.set('name', value);
  };

  render() {
    const { enabled, name, placeholder } = this.data.toJS();

    return (
      <label htmlFor="my-input">
        Name:
        <input
          type="text"
          id="my-input"
          disabled={!enabled}
          placeholder={placeholder}
          value={name}
          onChange={this.onChange}
        />
      </label>
    );
  }
}
