import React from 'react';
import PropTypes from 'prop-types';
import { getState, setState } from './store';

function onChange(e) {
  setState(getState().set('filterValue', e.target.value));
}

const MyInput = ({ value, placeholder }) => (
  <input
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

MyInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default MyInput;
