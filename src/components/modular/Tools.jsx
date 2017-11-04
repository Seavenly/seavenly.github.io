import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Tools = ({ node }) => (
  <Wrapper>
    <ToolsList>
      {node.frontmatter.tools.map(tool => (
        <ToolsItem key={tool.name}>
          <Tool href={tool.link}>
            <Img sizes={tool.logo.childImageSharp.sizes} alt={`${tool.name} logo`} />
            <Title>{tool.name}</Title>
          </Tool>
        </ToolsItem>
      ))}
    </ToolsList>
  </Wrapper>
);

Tools.propTypes = {
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.object,
  }).isRequired,
};

export default Tools;

const Wrapper = styled.div`
  background: #f5f5f5;
  border-top: 1px solid #eee;
  margin-top: 4rem;
  border-radius: 0.2rem;
`;
const ToolsList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  @media screen and (min-width: 31.25rem) {
    max-width: 36rem;
    margin: auto;
  }
  @media screen and (min-width: 60rem) {
    max-width: none;
  }
`;
const ToolsItem = styled.li`
  list-style: none;
  flex: 1 1 50%;
  @media screen and (min-width: 25rem) {
    flex: 1 1 33%;
  }
  @media screen and (min-width: 31.25rem) {
    flex: 1 1 25%;
  }
  @media screen and (min-width: 60rem) {
    flex: 1 1 auto;
    max-width: 8rem;
  }
`;
const Tool = styled.a`
  padding: 1rem;
  text-align: center;
  border-radius: 0.2rem;
  transition: all 0.3s;
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  display: block;
  &:hover {
    ${({ theme }) => theme.mixins.shadow(1)};
    background: white;
  }
`;
const Title = styled.h4`
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 0;
  color: #777;
`;
