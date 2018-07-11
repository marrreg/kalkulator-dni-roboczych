import React from 'react';
import PropTypes from 'prop-types';

class Instruction extends React.Component {
  render() {
    return (
      <div id="instruction">{this.props.instructionText}</div>
        // <img
        //     className="logo-img"
        //     alt="Logo"
        //     src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png"
        // />
    );
  }
}

Instruction.propTypes = {
    instructionText: PropTypes.string.isRequired
};

export default Instruction;
