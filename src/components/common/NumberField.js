import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class NumberField extends React.Component {
  render() {
    return (
      <TextField 
        id="numberOfWorkdays"
        type="number"
        value={this.props.value}
        onChange={this.props.handleChange}
        disabled={this.props.disabled}
        floatingLabelText="Dni robocze"
      />
    )
  }
}

NumberField.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default NumberField;
