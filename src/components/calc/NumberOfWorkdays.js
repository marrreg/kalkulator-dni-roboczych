import React, {PropTypes} from 'react';

import NumberField from '../common/NumberField';
import RadioField from '../common/RadioField';

class NumberOfWorkdays extends React.Component {
  render() {
    return (
        <div>
          <NumberField
            value={this.props.value}
            disabled={this.props.checked}
            handleChange={this.props.handleChange} />
          <RadioField 
            id={"numberOfWorkdaysCheckbox"}
            checked={this.props.checked}
            handleChange={this.props.handleChange}/>
        </div>
    );
  }
}

NumberOfWorkdays.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
  checked: PropTypes.bool
};

export default NumberOfWorkdays;
