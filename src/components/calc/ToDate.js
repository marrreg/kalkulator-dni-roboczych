import React, {PropTypes} from 'react';
import RadioField from '../common/RadioField';
import DateField from '../common/DateField';

class ToDate extends React.Component {
  render() {
    return (
        <DateField 
            id="toDate"
            value={this.props.value}
            handleChange={this.props.handleChange}
            disabled={this.props.checked} />
    );
  }
}

ToDate.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default ToDate;
