import React, {PropTypes} from 'react';

import SelectionOption from './SelectionOption';

class SelectionBar extends React.Component {
  render() {
    return (
      <div className="text-center selection-bar" role="group">
        <div className="btn-group" role="group">
          <SelectionOption
            selectionText="FROM" />
          <SelectionOption
            selectionText="WORKDAYS" />
          <SelectionOption
            selectionText="TO" />
        </div>
      </div>
    );
  }
}

SelectionBar.propTypes = {
  handleChange: PropTypes.func,
  checked: PropTypes.object
};

export default SelectionBar;
