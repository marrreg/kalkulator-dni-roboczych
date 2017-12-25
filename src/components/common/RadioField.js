import React from 'react';
import PropTypes from 'prop-types';

class RadioField extends React.Component {
  render() {
    return (
      <div className="input-group-addon">
        <input 
          id={this.props.id}
          type="radio"
          className="form-check"
          checked={this.props.checked}
          onChange={this.props.handleChange} />
      </div>
    );
  }
}

RadioField.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default RadioField;
