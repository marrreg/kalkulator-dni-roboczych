import React, {PropTypes} from 'react';

import NumberField from '../common/NumberField';
import RadioField from '../common/RadioField';

class NumberOfWorkdays extends React.Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">|||
          <NumberField
            value={this.props.value}
            disabled={this.props.checked}
            handleChange={this.props.handleChange} />
          <RadioField 
            id={"numberOfWorkdaysCheckbox"}
            checked={this.props.checked}
            handleChange={this.props.handleChange}/>
        </div>
      </form>
    );
  }
}

NumberOfWorkdays.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
  checked: PropTypes.bool
};

export default NumberOfWorkdays;
