import React from 'react';
import PropTypes from 'prop-types';

class Logo extends React.Component {
  render() {
    return (
        <img
            className="logo-img"
            alt="Logo"
            src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png"
        />
    );
  }
}

Logo.propTypes = {};

export default Logo;