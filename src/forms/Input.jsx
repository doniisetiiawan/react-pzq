import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Input = ({
  type,
  label,
  value,
  placeholder,
  onChange,
  validationText,
}) => (
  <Form>
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Form.Control.Feedback />
      <Form.Text>{validationText}</Form.Text>
    </Form.Group>
  </Form>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  validationText: PropTypes.string,
};

export default Input;
