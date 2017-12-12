import React, {PropTypes} from 'react';

class NumberField extends React.Component {
  render() {
    return (
        <input
        id="numberOfWorkdays"
        type="number"
        value={this.props.value}
        className="form-control"
        onChange={this.props.handleChange}
        disabled={this.props.disabled} />
    );
  }
}

NumberField.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default NumberField;
