import React, {PropTypes} from 'react';

class RadioField extends React.Component {
  render() {
    return (
        <form className="form-inline">
            <div className="form-group">
                <label>
                    <input 
                        id={this.props.id}
                        type="radio"
                        className="form-check"
                        checked={this.props.checked}
                        onChange={this.props.handleChange} /> Search
                </label>
            </div>
        </form>
    );
  }
}

RadioField.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default RadioField;
