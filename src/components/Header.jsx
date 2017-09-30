import React from 'react';

import Navigation from './Navigation';
import Hero from './Hero';

const Header = () => (
  <header>
    <div className="top-bar">
      <div className="wrapper">
        <div className="logo">
          <a href={'home_url'}>{'<nschott/>'}</a>
        </div>
        <Navigation />
      </div>
    </div>
    <Hero />
  </header>
);

export default Header;
