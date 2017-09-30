import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import heroImage from '../data/images/hero.jpg';

const Hero = ({ location: { pathname } }) => (
  <div className={`hero${pathname !== '/' ? ' mini' : ''}`}>
    <div className="background" style={{ backgroundImage: `url(${heroImage})` }} />
    <div className="overlay">
      <h1>Nathan Schott</h1>
      <p>Creating the web on two wheels</p>
    </div>
  </div>
);

Hero.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Hero);
