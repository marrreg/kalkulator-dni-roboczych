import React, {PropTypes} from 'react';
import DateFieldCheckboxRight from '../common/DateFieldCheckboxRight';
import DateFieldCheckboxLeft from '../common/DateFieldCheckboxLeft';
import NumberOfWorkdays from './NumberOfWorkdays';

class CalcForm extends React.Component {
  render() {
    return (
      <form>
        <div className="container">
          <div className="row">
            <div className="col">
              <NumberOfWorkdays
                numberOfWorkdays={this.props.numberOfWorkdays}
                checked={this.props.checked["numberOfWorkdays"]}
                handleChange={this.props.handleChange} />
            </div>
          </div>
          <div className="row" id="dates-row">
            <div className="col-6">
              <DateFieldCheckboxLeft
                id="fromDate"
                labelname="Od:"
                value={this.props.fromDate}
                checked={this.props.checked["fromDate"]}
                handleChange={this.props.handleChange} />
            </div>
            <div className="col-6">
              <DateFieldCheckboxRight
                id="toDate"
                labelname="Do:"
                value={this.props.toDate}
                checked={this.props.checked["toDate"]}
                handleChange={this.props.handleChange} />
            </div>
          </div>
          </div>
      </form>
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
