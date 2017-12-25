import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import FromDate from './FromDate';
import ToDate from './ToDate';
import RadioField from '../common/RadioField';
import NumberOfWorkdays from './NumberOfWorkdays';

const style = {
  backgroundColor: "#FAFAFA",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class CalcForm extends React.Component {
  render() {
    return (
      <Paper style={style} zDepth={4}>
        <FromDate 
          value={this.props.fromDate}
          checked={this.props.checked["fromDate"]}
          handleDateChange={this.props.handleFromDateChange}
          handleChange={this.props.handleChange} />
        <NumberOfWorkdays 
          value={this.props.numberOfWorkdays}
          checked={this.props.checked["numberOfWorkdays"]}
          handleChange={this.props.handleChange} />
        <ToDate 
          value={this.props.toDate}
          checked={this.props.checked["toDate"]}
          handleDateChange={this.props.handleToDateChange}
          handleChange={this.props.handleChange} />
      </Paper>
    );
  }
}

CalcForm.propTypes = {
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  numberOfWorkdays: PropTypes.number,
  handleChange: PropTypes.func,
  checked: PropTypes.object
};

export default CalcForm;
