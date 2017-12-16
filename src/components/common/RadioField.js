import React, {PropTypes} from 'react';

class RadioField extends React.Component {
  render() {
    return (
      <span class="input-group-addon">
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
