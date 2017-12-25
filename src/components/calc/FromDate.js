import React from 'react';
import PropTypes from 'prop-types';

import RadioField from '../common/RadioField';
import DatePicker from 'material-ui/DatePicker';


class FromDate extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log("NEW PROPS: ", nextProps);
  }

  render() {
    return (
      <div>
        <DatePicker 
            id="fromDate"
            name="fromDate"
            onChange={this.props.handleDateChange}
            autoOk={true}
            fullWidth={true}
            disabled={this.props.checked}
            value={this.props.value}
        />
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
  handleDateChange: PropTypes.func
};

export default FromDate;