import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Feature from './Feature';

const Features = ({ frontmatter }) => {
  const { project } = frontmatter;
  return (
    <Wrapper>
      {project.features.map(feature => <Feature key={feature.title} data={feature} />)}
    </Wrapper>
  );
};

Features.propTypes = {
  frontmatter: PropTypes.shape({}).isRequired,
};

export default Features;

const Wrapper = styled.div`
  max-width: 45rem;
  margin: auto;

  @media (min-width: 37.5rem) {
    margin-top: 8rem;
  }
  @media (min-width: 60rem) {
    max-width: 100%;
  }
`;
