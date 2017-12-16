import React, {PropTypes} from 'react';
import RadioField from '../common/RadioField';
import DateField from '../common/DateField';

class FromDate extends React.Component {
  render() {
    return (
        <form className="form-inline">
            <div className="form-group">|||
                <DateField 
                    id="fromDate"
                    value={this.props.value}
                    handleChange={this.props.handleChange}
                    disabled={this.props.checked} />
                <RadioField 
                    id="fromDateCheckbox"
                    checked={this.props.checked}
                    handleChange={this.props.handleChange} />
            </div>
        </form>
    );
  }
}

FromDate.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default FromDate;
