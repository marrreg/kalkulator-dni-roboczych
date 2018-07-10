import React from 'react';
import PropTypes from 'prop-types';

class RadioField extends React.Component {
  render() {
    //<span class="input-group-addon">
    return (
      <span class="query-checkbox">
        <input 
          id={this.props.id}
          type="radio"
          className="form-check"
          checked={this.props.checked}
          onChange={this.props.handleChange} />
      </span>
    );
  }
}

RadioField.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default RadioField;
