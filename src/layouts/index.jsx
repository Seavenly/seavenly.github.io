import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import 'normalize.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { title, metadata } from '../data/config/site.yaml';
import icon from '../data/images/logo.png';
import theme from './theme';
import fonts from './fonts';

const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div className="top">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/png" href={icon} />
      </Helmet>
      <Header hero={data.file} />
      <Body>
        <Wrapper>{children()}</Wrapper>
      </Body>
      <Footer />
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    file: PropTypes.object,
  }).isRequired,
};

export default TemplateWrapper;

export const query = graphql`
  query HeroImageQuery {
    file(relativePath: { eq: "images/hero.jpg" }) {
      name
      childImageSharp {
        sizes(maxWidth: 1920, traceSVG: { threshold: 25, color: "#0397a7" }) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Body = styled.main`
  padding: 0 1rem;
`;
const Wrapper = styled.div`
  ${theme.snippets.wrapper};
`;

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
injectGlobal`
  ${fonts}
  body {
    font-family: ${theme.fonts.main};
    color: ${theme.colors.dark};
    font-size: 16px;
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  * {
    box-sizing: border-box;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;  
  }    
`;
