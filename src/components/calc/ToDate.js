import React, {PropTypes} from 'react';
import RadioField from '../common/RadioField';
import DateField from '../common/DateField';
import DatePicker from 'material-ui/DatePicker';


class toDate extends React.Component {
  render() {
    return (
      <div>
        <DatePicker 
            id="toDate"
            name="toDate"
            onChange={this.props.handleDateChange}
            autoOk={true}
            fullWidth={true}
            disabled={this.props.checked}
            value={this.props.value}
        />
        <RadioField 
          id="toDateCheckbox"
          checked={this.props.checked}
          handleChange={this.props.handleChange} />
      </div>
    );
  }
}

toDate.propTypes = {
  value: PropTypes.date,
  checked: PropTypes.bool,
  handleDateChange: PropTypes.func
};

export default toDate;