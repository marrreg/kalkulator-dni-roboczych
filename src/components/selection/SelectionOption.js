import React, {PropTypes} from 'react';

class SelectionOption extends React.Component {
  render() {
    return (
        <div>
          <button type="button" class="btn btn-secondary">{this.props.selectionText}</button>
        </div>
    );
  }
}

SelectionOption.propTypes = {
  selectionText: PropTypes.string
};

export default SelectionOption;
