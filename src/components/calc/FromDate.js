import React from 'react';
import PropTypes from 'prop-types';

import RadioField from '../common/RadioField';
import DatePicker from 'material-ui/DatePicker';

class FromDate extends React.Component {
  render() {
    return (
      <div id="from-date-area">
        <DatePicker
          minDate={new Date(1980, 0, 1)} 
          maxDate={new Date(2026, 11, 31)} 
          id="fromDate"
          name="fromDate"
          locale="fa_IR"
          floatingLabelText="Data początkowa"
          onChange={this.props.handleDateChange}
          autoOk={true}
          disabled={this.props.checked}
          value={this.props.value} />
        <RadioField 
            id="fromDateCheckbox"
            checked={this.props.checked}
            handleChange={this.props.handleChange} />
      </div>
    );
  }
}

FromDate.propTypes = {
  value: PropTypes.instanceOf(Date),
  checked: PropTypes.bool,
  handleDateChange: PropTypes.func,
};

export default FromDate;