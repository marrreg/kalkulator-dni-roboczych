import React, {PropTypes} from 'react';

import FromDate from './FromDate';
import ToDate from './ToDate';
import NumberOfWorkdays from './NumberOfWorkdays';

class CalcForm extends React.Component {
  render() {
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-10 parameter-area">
            <FromDate 
              value={this.props.fromDate}
              checked={this.props.checked["fromDate"]}
              handleChange={this.props.handleChange} />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-10 parameter-area">
            <NumberOfWorkdays 
              value={this.props.numberOfWorkdays}
              checked={this.props.checked["numberOfWorkdays"]}
              handleChange={this.props.handleChange} />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-10 parameter-area">
            <ToDate 
              value={this.props.toDate}
              checked={this.props.checked["toDate"]}
              handleChange={this.props.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

CalcForm.propTypes = {
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  numberOfWorkdays: PropTypes.number,
  handleChange: PropTypes.func,
  checked: PropTypes.object
};

export default CalcForm;
