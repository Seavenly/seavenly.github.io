import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'font-awesome/css/font-awesome.css';
import 'normalize.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

import './scss/index.scss';

const TemplateWrapper = ({ children }) => (
  <div className="top">
    <Helmet
      title="Nathan Schott's Portfolio"
      meta={[
        { charset: 'utf-8' },
        { name: 'description', content: 'Nathan Schott\'s portfolio website displaying various projects.' },
        { name: 'keywords', content: 'portfolio' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      ]}
    />
    <Header />
    <main id="body">
      <div className="wrapper">
        {children()}
      </div>
    </main>
    <Footer />
    <Navigation isMobile />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
