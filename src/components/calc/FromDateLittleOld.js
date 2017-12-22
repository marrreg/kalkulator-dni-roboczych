import React, {PropTypes} from 'react';
import RadioField from '../common/RadioField';
import DateField from '../common/DateField';

class FromDate extends React.Component {
  render() {
    return (
        <DateField 
            id="fromDate"
            value={this.props.value}
            handleChange={this.props.handleChange}
            disabled={this.props.checked} />
    );
  }
}

FromDate.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default FromDate;
