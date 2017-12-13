import React, {PropTypes} from 'react';

class SelectionOption extends React.Component {
  render() {
    return (
        <div>
            {this.props.selectionText}
        </div>
    );
  }
}

SelectionOption.propTypes = {
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  numberOfWorkdays: PropTypes.number,
  handleChange: PropTypes.func,
  checked: PropTypes.object
};

export default SelectionOption;
