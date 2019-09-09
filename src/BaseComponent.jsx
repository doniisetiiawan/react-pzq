import { Component } from 'react';
import { fromJS } from 'immutable';

export default class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        name: 'Mark',
        enabled: false,
        placeholder: '',
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

  render() {
    return null;
  }
}
