import React, { Component } from 'react';
import { fromJS } from 'immutable';

import MyButton from './MyButton';

class MyFeature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        clicks: 0,
        disabled: false,
        text: '',
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

  onClick = () => {
    this.data = this.data.update('clicks', (c) => c + 1);
  };

  static getDerivedStateFromProps({ disabled, text }, state) {
    return {
      ...state,
      data: state.data.set('disabled', disabled).set('text', text),
    };
  }

  render() {
    return <MyButton onClick={this.onClick} {...this.data.toJS()} />;
  }
}

MyFeature.defaultProps = {
  text: 'A Button',
};

export default MyFeature;
