import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import 'normalize.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { title, metadata } from '../data/config/site.yaml';
import theme from './theme';

const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div className="top">
      <Helmet
        title={title}
        meta={[
          { charset: 'utf-8' },
          { name: 'description', content: metadata.description },
          { name: 'keywords', content: metadata.keywords },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
        ]}
      />
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
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
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
  h2 {
    font-family: ${theme.fonts.heading};  
    margin-top: 4rem;
    padding-bottom: 0.5rem;
    margin-bottom: 3rem;
    text-transform: lowercase;
    font-weight: 500;
    font-size: 1.3rem;
    border-bottom: 1px solid #eee;
    @media (min-width: 60rem) {
      margin-top: 8rem;
    }
  }
`;
