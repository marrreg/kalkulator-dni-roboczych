import React, {PropTypes} from 'react';

import SelectionOption from './SelectionOption';

class SelectionBar extends React.Component {
  render() {
    return (
    <div className="text-center selection-bar">
        <div className="row no-gutters">
            <div className="col">
              <SelectionOption
                selectionText="A" />
            </div>
            <div className="col">
              <SelectionOption
                selectionText="B" />
            </div>
            <div className="col">
              <SelectionOption
                selectionText="C" />
            </div>
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
