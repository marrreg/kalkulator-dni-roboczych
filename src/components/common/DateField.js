import React, {PropTypes} from 'react';

class DateField extends React.Component {
  render() {
    return (
      <div className="row">
          <div className="col-10">
          <input
            id={this.props.id}
            type="date"
            className="form-control"
            value={this.props.value}
            onChange={this.props.handleChange}
            disabled={this.props.checked} />
        </div>
        <div className="col" id="radio-column">
          <input 
            id={this.props.id + "Checkbox"} 
            type="radio"
            checked={this.props.checked}
            onChange={this.props.handleChange} />
        </div>
      </div>
    );
  }
}

DateField.propTypes = {
  id: PropTypes.string.isRequired,
  labelname: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default DateField;
