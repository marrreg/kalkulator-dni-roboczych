import React, {PropTypes} from 'react';
import RadioField from '../common/RadioField';
import DateField from '../common/DateField';
import DatePicker from 'material-ui/DatePicker';


class FromDate extends React.Component {
  render() {
    return (
        <DatePicker 
            id="fromDate"
            name="fromDate"
            onChange={this.props.handleChange}
            autoOk={true}
            fullWidth={true}
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