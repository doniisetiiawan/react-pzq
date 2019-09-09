import { Component } from 'react';
import PropTypes from 'prop-types';

class BaseComponent extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    groups: PropTypes.array.isRequired,
  };

  static defaultProps = {
    users: [],
    groups: [],
  };

  render() {
    return null;
  }
}

export default BaseComponent;
