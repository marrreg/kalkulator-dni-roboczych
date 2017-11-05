import React, {PropTypes} from 'react';
import DateField from '../common/DateField';
import NumberOfWorkdays from './NumberOfWorkdays';

class CalcForm extends React.Component {
  render() {
    return (
      <form className="form-horizontal">
        <DateField
          id="fromDate"
          labelname="Data początkowa"
          value={this.props.fromDate}
          checked={this.props.checked["fromDate"]}
          handleChange={this.props.handleChange} />
        <NumberOfWorkdays
          numberOfWorkdays={this.props.numberOfWorkdays}
          checked={this.props.checked["numberOfWorkdays"]}
          handleChange={this.props.handleChange} />
        <DateField
          id="toDate"
          labelname="Data końcowa"
          value={this.props.toDate}
          checked={this.props.checked["toDate"]}
          handleChange={this.props.handleChange} />
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
