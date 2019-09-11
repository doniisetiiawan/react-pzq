import React, { Component } from 'react';
import { fromJS } from 'immutable';

import InputsForm from './InputsForm';

function validateName(name) {
  if (name.search(/ /) === -1) {
    return 'First and last name, separated with a space';
  }
  if (name.length < 4) {
    return 'Less than 4 characters? Srsly?';
  }

  return null;
}

class InputsFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        nameValue: '',
        nameChange: (e) => {
          this.data = this.data.merge({
            nameValue: e.target.value,
            nameValidationState:
              validateName(e.target.value) === null ? 'success' : 'error',
            nameValidationText: validateName(e.target.value),
          });
        },
        passwordValue: '',
        passwordChange: (e) => {
          this.data = this.data.set('passwordValue', e.target.value);
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
    return <InputsForm {...this.data.toJS()} />;
  }
}

export default InputsFormContainer;
