import React, { Component } from 'react';
import { fromJS } from 'immutable';

import RadioForm from './RadioForm';

class RadioFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        checkboxEnabled: false,
        radiosEnabled: true,
        checkboxEnabledChange: () => {
          this.data = this.data.set('checkboxEnabled', true);
        },
        checkboxDisabledChange: () => {
          this.data = this.data.set('checkboxEnabled', false);
        },
        checkboxChange: () => {
          this.data = this.data.update(
            'radiosEnabled',
            (enabled) => !enabled,
          );
        },
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
    return <RadioForm {...this.data.toJS()} />;
  }
}

export default RadioFormContainer;
