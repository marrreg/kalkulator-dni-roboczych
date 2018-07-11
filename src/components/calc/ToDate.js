import React from 'react';
import PropTypes from 'prop-types';

import RadioField from '../common/RadioField';
import DatePicker from 'material-ui/DatePicker';

class toDate extends React.Component {
  render() {
    return (
      <div id="to-date-area">
        <DatePicker 
            minDate={new Date(1980, 0, 1)} 
            maxDate={new Date(2026, 11, 31)} 
            id="toDate"
            name="toDate"
            locale="pl_PL"
            floatingLabelText="Data końcowa"
            onChange={this.props.handleDateChange}
            autoOk={true}
            disabled={this.props.checked}
            value={this.props.value} />
          <RadioField 
          id="toDateCheckbox"
          checked={this.props.checked}
          handleChange={this.props.handleChange} />
      </div>
    );
  }
}

toDate.propTypes = {
  value: PropTypes.instanceOf(Date),
  checked: PropTypes.bool,
  handleDateChange: PropTypes.func
};

export default toDate;