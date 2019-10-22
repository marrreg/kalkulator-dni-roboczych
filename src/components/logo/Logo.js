import React from 'react';
import PropTypes from 'prop-types';

class Logo extends React.Component {
  render() {
    return (
      <h1>
        <a href="index.html" id="page-title" title="Kalkulator Dni Roboczych - łatwe obliczanie dni roboczych między datami">
          Kalkulator Dni Roboczych
        </a>
      </h1>
        // <img
        //     className="logo-img"
        //     alt="Logo"
        //     src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png"
        // />
    );
  }
}

Logo.propTypes = {};

export default Logo;
