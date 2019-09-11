import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form } from 'react-bootstrap';

const RadioForm = ({
  checkboxChange,
  checkboxDisabledChange,
  checkboxEnabled,
  checkboxEnabledChange,
  radiosEnabled,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>Radios & Checkboxes</Card.Title>
      <Form>
        <Form.Group controlId="tkbnckgemy">
          <Form.Check
            type="radio"
            name="radio"
            onChange={checkboxEnabledChange}
            checked={checkboxEnabled}
            disabled={!radiosEnabled}
            label="Checkbox enabled"
          />
        </Form.Group>
        <Form.Group controlId="tjghayacbk">
          <Form.Check
            type="radio"
            name="radio"
            onChange={checkboxDisabledChange}
            checked={!checkboxEnabled}
            disabled={!radiosEnabled}
            label="Checkbox disabled"
          />
        </Form.Group>
        <Form.Group controlId="hdvunrhrpl">
          <Form.Check
            type="checkbox"
            onChange={checkboxChange}
            checked={radiosEnabled}
            disabled={!checkboxEnabled}
            label="Radios enabled"
          />
        </Form.Group>
      </Form>
    </Card.Body>
  </Card>
);

RadioForm.propTypes = {
  checkboxEnabled: PropTypes.bool.isRequired,
  radiosEnabled: PropTypes.bool.isRequired,
  checkboxEnabledChange: PropTypes.func.isRequired,
  checkboxDisabledChange: PropTypes.func.isRequired,
  checkboxChange: PropTypes.func.isRequired,
};

export default RadioForm;
