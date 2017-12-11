import React, {PropTypes} from 'react';

class NumberOfWorkdays extends React.Component {
  render() {
    return (
      <form>
        <div className="row" id="numberofworkdays-row">
          <div className="col-10">
          <input
            id="numberOfWorkdays"
            type="number"
            min="1"
            default="1"
            className="form-control"
            value={this.props.numberOfWorkdays}
            onChange={this.props.handleChange}
            disabled={this.props.checked} />
          </div>
          <div className="col" id="radio-column">
          <input 
            id={"numberOfWorkdays" + "Checkbox"} 
            type="radio"
            checked={this.props.checked}
            onChange={this.props.handleChange} />
          </div>
        </div>
      </form>
    );
  }
}

NumberOfWorkdays.propTypes = {
  numberOfWorkdays: PropTypes.number,
  handleChange: PropTypes.func,
  checked: PropTypes.bool
};

export default NumberOfWorkdays;
