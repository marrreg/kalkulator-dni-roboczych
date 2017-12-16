import React, {PropTypes} from 'react';
import RadioField from '../common/RadioField';
import DateField from '../common/DateField';

class ToDate extends React.Component {
  render() {
    return (
        <form className="form-inline">
            <div className="form-group">|||
                <DateField 
                    id="toDate"
                    value={this.props.value}
                    handleChange={this.props.handleChange}
                    disabled={this.props.checked} />
                <RadioField 
                    id="toDateCheckbox"
                    checked={this.props.checked}
                    handleChange={this.props.handleChange} />
            </div>
        </form>
    );
  }
}

ToDate.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default ToDate;
