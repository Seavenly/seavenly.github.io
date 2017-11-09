import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Portfolio = ({ projects }) => (
  <ProjectsList>
    {projects.edges.map(({ node }) => (
      <ProjectThumb key={node.id}>
        <ProjectLink to={`projects/${node.fields.slug}`} href={`projects/${node.fields.slug}`}>
          <TitleWrapper>
            <Title>{node.frontmatter.title}</Title>
          </TitleWrapper>
          <ImageWrapper>
            <Img
              sizes={node.frontmatter.thumb.childImageSharp.sizes}
              alt={`${node.frontmatter.title} project thumbnail`}
            />
          </ImageWrapper>
        </ProjectLink>
      </ProjectThumb>
    ))}
  </ProjectsList>
);

Portfolio.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.array,
  }).isRequired,
};

export default Portfolio;

export const query = graphql`
  fragment projects on RootQueryType {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/projects/" } }
      sort: { fields: [fileAbsolutePath] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            thumb {
              childImageSharp {
                sizes(maxWidth: 250, traceSVG: { color: "#0397a7" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  @media screen and (min-width: 25rem) {
    padding: 0 5%;
  }
  @media screen and (min-width: 37.5rem) {
    padding: 0;
    max-width: 40rem;
    margin: auto;
  }
`;
const ProjectThumb = styled.li`
  flex: 1 1 50%;
  list-style: none;
  max-width: 50%;
  @media screen and (min-width: 37.5rem) {
    flex: 0 1 33.333%;
    padding: 0.2rem;
  }
`;
const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.75);
  opacity: 0;
  transition: opacity 0.5s;
`;
const Title = styled.h4`
  padding: 0 10%;
`;
const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .gatsby-image-outer-wrapper {
    max-width: none;
    width: 100%;
    transition: transform 0.5s;
  }
`;
const ProjectLink = styled(Link)`
  position: relative;
  border: 1px solid #eee;
  transition: box-shadow 0.5s;
  border-radius: 0.2rem;
  overflow: hidden;
  color: white;
  display: block;
  &:hover {
    ${({ theme }) => theme.mixins.shadow(2)};
    ${TitleWrapper} {
      opacity: 1;
    }
    .gatsby-image-outer-wrapper {
      transform: scale(1.2);
    }
  }
  &::after {
    content: '';
    display: block;
    top: 0;
    left: 0;
    right: 0;
    padding-bottom: 100%;
  }
`;
