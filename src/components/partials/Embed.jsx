import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Embed = ({ frontmatter }) => {
  const { project } = frontmatter;
  return (
    <Wrapper>
      <Container>
        <Title>Demo</Title>
        <IframeWrapper>
          <Iframe
            title={`${frontmatter.title} demo`}
            src={project.embed.location}
            width={project.embed.width}
            height={project.embed.height}
          >
            <p>Your browser does not support iframes.</p>
          </Iframe>
        </IframeWrapper>
      </Container>
    </Wrapper>
  );
};

Embed.propTypes = {
  frontmatter: PropTypes.shape({}).isRequired,
};

const Wrapper = styled.div`
  text-align: center;
`;
const Container = styled.div`
  display: inline-block;
`;
const Title = styled.h3`
  background: #eee;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  color: #ccc;
  margin: 0;
  padding: 0.5rem;
  border-radius: 0.2rem 0.2rem 0 0;
  letter-spacing: 0.2em;
`;
const IframeWrapper = styled.div`
  margin: auto;
  padding-top: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 0 0 0.2rem 0.2rem;
`;
const Iframe = styled.iframe`
  border: none;
`;

export default Embed;
