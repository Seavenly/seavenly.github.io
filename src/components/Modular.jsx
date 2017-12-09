import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Services from './modular/Services';
import Portfolio from './modular/Portfolio';
import Tools from './modular/Tools';
import Contact from './modular/Contact';
import { Markdown, SectionTitle } from './partials/StyledComponents';

const Modular = ({ type, node, data }) => (
  <Wrapper>
    <Anchor id={type} />
    <Heading>
      <ImageWrapper>
        <Image
          resolutions={node.frontmatter.thumb.image.childImageSharp.resolutions}
          alt={node.frontmatter.thumb.alt}
        />
      </ImageWrapper>
      <Title>{node.frontmatter.title}</Title>
    </Heading>
    <Content>
      <Markdown dangerouslySetInnerHTML={{ __html: node.html }} />
      {(() => {
        switch (type) {
          case 'services':
            return <Services node={node} />;
          case 'portfolio':
            return <Portfolio projects={data} />;
          case 'tools':
            return <Tools node={node} />;
          case 'contact':
            return <Contact />;
          default:
            return null;
        }
      })()}
    </Content>
  </Wrapper>
);

Modular.propTypes = {
  type: PropTypes.string.isRequired,
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.object,
  }).isRequired,
  data: PropTypes.shape({
    edges: PropTypes.array,
  }),
};

Modular.defaultProps = {
  data: [],
};

export default Modular;

const Title = SectionTitle.extend`
  margin-top: 14rem;
  padding-left: 2rem;
`;
const Wrapper = styled.section`
  &:first-child ${Title} {
    margin-top: 10rem;
  }
`;
const Anchor = styled.div`
  position: relative;
  top: -5rem;
`;
const Heading = styled.div`
  position: relative;
  padding-left: 7rem;
`;
const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  @media (min-width: 60rem) {
    bottom: auto;
    top: 0;
  }
`;
const Image = styled(Img)`
  display: block;
  border-radius: 0.2rem;
  max-width: 8rem;
  width: 100%;
`;
const Content = styled.div`
  position: relative;
`;
