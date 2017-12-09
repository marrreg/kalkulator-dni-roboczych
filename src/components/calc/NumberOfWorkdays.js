import React, {PropTypes} from 'react';

class NumberOfWorkdays extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="numberOfWorkdays"><h3>Liczba dni roboczych</h3></label><br/>
        <input
          id="numberOfWorkdays"
          type="number"
          min="1"
          default="1"
          className="form-control flat"
          value={this.props.numberOfWorkdays}
          onChange={this.props.handleChange}
          disabled={this.props.checked} />&nbsp;&nbsp;&nbsp;
        <input 
          id={"numberOfWorkdays" + "Checkbox"} 
          type="radio"
          checked={this.props.checked}
          onChange={this.props.handleChange} />
      </div>
    );
  }
}

NumberOfWorkdays.propTypes = {
  numberOfWorkdays: PropTypes.number,
  handleChange: PropTypes.func,
  checked: PropTypes.bool
};

export default NumberOfWorkdays;
