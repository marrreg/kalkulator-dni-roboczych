import React, {PropTypes} from 'react';
import RadioField from './RadioField';
import DateField from './DateField';

class DateFieldCheckboxLeft extends React.Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="col" id="radio-column">
            <RadioField 
              id={this.props.id + "Checkbox"}
              checked={this.props.checked}
              handleChange={this.props.handleChange} />
          </div>
          <div className="col-10">
            <DateField 
              id={this.props.id}
              value={this.props.value}
              handleChange={this.props.handleChange}
              disabled={this.props.checked} />
          </div>
        </div>
      </form>
    );
  }
}

DateFieldCheckboxLeft.propTypes = {
  id: PropTypes.string.isRequired,
  labelname: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default DateFieldCheckboxLeft;
