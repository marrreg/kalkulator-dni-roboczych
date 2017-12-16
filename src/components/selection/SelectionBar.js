import React, {PropTypes} from 'react';

import SelectionOption from './SelectionOption';

class SelectionBar extends React.Component {
  render() {
    return (
      <div className="text-center selection-bar" role="group">
        <div className="btn-group fit-to-width" role="group">
          <SelectionOption
            selectionText="start" />
          <SelectionOption
            selectionText="workdays" />
          <SelectionOption
            selectionText="end" />
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
