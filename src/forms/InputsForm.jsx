import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import Input from './Input';

const InputsForm = ({
  nameChange,
  nameValidationText,
  nameValue,
  passwordChange,
  passwordValue,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>Inputs</Card.Title>
      <Input
        type="text"
        label="Name"
        placeholder="First and last..."
        value={nameValue}
        onChange={nameChange}
        validationText={nameValidationText}
      />

      <Input
        type="password"
        label="Password"
        value={passwordValue}
        onChange={passwordChange}
      />

    </Card.Body>
  </Card>
);

InputsForm.propTypes = {
  nameValue: PropTypes.any,
  nameChange: PropTypes.func,
  nameValidationText: PropTypes.string,
  passwordValue: PropTypes.any,
  passwordChange: PropTypes.func,
};

export default InputsForm;
