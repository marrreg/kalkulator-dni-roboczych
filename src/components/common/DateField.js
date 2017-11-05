import React, {PropTypes} from 'react';

class DateField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}><h3>{this.props.labelname}</h3></label><br/>
        <input
          id={this.props.id}
          type="date"
          value={this.props.value}
          onChange={this.props.handleChange}
          disabled={this.props.checked} />&nbsp;&nbsp;&nbsp;
        <input 
          id={this.props.id + "Checkbox"} 
          type="radio"
          checked={this.props.checked}
          onChange={this.props.handleChange} />  
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
