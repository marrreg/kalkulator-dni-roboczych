import React, {PropTypes} from 'react';

class DateField extends React.Component {
  render() {
    return (
        <input
            id={this.props.id}
            type="date"
            className="form-control no-border square-border"
            value={this.props.value}
            onChange={this.props.handleChange}
            disabled={this.props.disabled} />
    );
  }
}

DateField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func
};

export default DateField;
