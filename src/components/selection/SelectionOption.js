import React, {PropTypes} from 'react';

class SelectionOption extends React.Component {
  render() {
    return (
        <div>
          <button type="button" className="btn btn-transparent">{this.props.selectionText}</button>
        </div>
    );
  }
}

SelectionOption.propTypes = {
  selectionText: PropTypes.string
};

export default SelectionOption;
