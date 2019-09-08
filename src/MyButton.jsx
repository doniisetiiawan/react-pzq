import React, { Component } from 'react';

export default class MyButton extends Component {
  onClick = () => {
    console.log('clicked');
  };

  render() {
    const { children } = this.props;
    return <button onClick={this.onClick}>{children}</button>;
  }
}
