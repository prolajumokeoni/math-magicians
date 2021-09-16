import React, { Component } from 'react';
import propTypes from 'prop-types';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, operation, next } = this.props;
    return (
      <div>
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

Display.propTypes = {
  total: propTypes.number,
  operation: propTypes.string,
  next: propTypes.string,
};
Display.defaultProps = {
  total: 0,
  operation: '',
  next: '',
};
export default Display;
