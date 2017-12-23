import React, {PropTypes} from 'react';
import RadioField from '../common/RadioField';
import DateField from '../common/DateField';
import DatePicker from 'material-ui/DatePicker';


class FromDate extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props)
  }

  dateChange (eRedundant, newDate) {
    let e = new Event('input');
    e.id = "fromDate";
    e.value = newDate;
    console.log(e);
    this.props.handleChange(e);
  }

  render() {
    return (
        <DatePicker 
            id="fromDate"
            onChange={this.dateChange}
            autoOk={true}
            disabled={this.props.checked}
            value={this.props.value}
        />
    );
  }
}

FromDate.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default FromDate;
