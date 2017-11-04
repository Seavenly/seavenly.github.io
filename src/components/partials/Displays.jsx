import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Display from './Display';

const Displays = ({ frontmatter }) => {
  const { project } = frontmatter;
  return (
    <Wrapper>
      <Display
        type="desktop"
        images={{
          sizes: project.displays.desktop.childImageSharp.sizes,
          alt: `${frontmatter.title} desktop screenshot`,
        }}
      />
      <Display
        type="tablet"
        images={{
          sizes: project.displays.tablet.childImageSharp.sizes,
          alt: `${frontmatter.title} tablet screenshot`,
        }}
      />
      <Display
        type="mobile"
        images={{
          sizes: project.displays.mobile.childImageSharp.sizes,
          alt: `${frontmatter.title} mobile screenshot`,
        }}
      />
    </Wrapper>
  );
};

Displays.propTypes = {
  frontmatter: PropTypes.shape({}).isRequired,
};

export default Displays;

const Wrapper = styled.div`
  @media (max-width: 37.499rem) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
  @media (min-width: 37.5rem) {
    position: relative;
    max-width: 50rem;
    margin: 0 auto 14rem;
  }
`;
