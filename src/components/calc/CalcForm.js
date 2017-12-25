import React from 'react';
import PropTypes from 'prop-types';

import FromDate from './FromDate';
import ToDate from './ToDate';
import RadioField from '../common/RadioField';
import NumberOfWorkdays from './NumberOfWorkdays';

class CalcForm extends React.Component {
  render() {
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-9 parameter-area-top">
            <FromDate 
              value={this.props.fromDate}
              checked={this.props.checked["fromDate"]}
              handleDateChange={this.props.handleFromDateChange}
              handleChange={this.props.handleChange} />
          </div>
          <div className="col-2 radio-area">abc</div>
        </div>
        <div className="row no-gutters">
          <div className="col-9 parameter-area">
            <NumberOfWorkdays 
              value={this.props.numberOfWorkdays}
              checked={this.props.checked["numberOfWorkdays"]}
              handleChange={this.props.handleChange} />
          </div>
          <div className="col-2 radio-area">abc</div>
        </div>
        <div className="row no-gutters">
          <div className="col-9 parameter-area">
            <ToDate 
              value={this.props.toDate}
              checked={this.props.checked["toDate"]}
              handleDateChange={this.props.handleToDateChange}
              handleChange={this.props.handleChange} />
          </div>
          <div className="col-2 radio-area">
            <RadioField 
            id="toDateCheckbox"
            checked={this.props.checked["toDate"]}
            handleChange={this.props.handleChange} />
          </div>
        </div>
      </div>
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
