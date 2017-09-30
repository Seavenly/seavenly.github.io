import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import { navigation } from '../data/config/site.yaml';

const Navigation = ({ isMobile }) => (
  <nav className="main-nav">
    <ul>
      {Object.keys(navigation.links).map(key => (
        <li key={key}>
          <Link to={`${navigation.links[key]}`}>{key}</Link>
        </li>
      ))}
    </ul>
    {isMobile && (<button className="mobile-menu">&#9776; Menu</button>)}
  </nav>
);

Navigation.propTypes = {
  isMobile: PropTypes.bool,
};

Navigation.defaultProps = {
  isMobile: false,
};

export default Navigation;
