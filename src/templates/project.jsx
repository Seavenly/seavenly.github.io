import React from 'react';
import PropTypes from 'prop-types';

import InfoRows from '../components/partials/InfoTable';
import Displays from '../components/partials/Displays';
import Embed from '../components/partials/Embed';
import Features from '../components/partials/Features';

import { SectionTitle } from '../components/partials/StyledComponents';

const ProjectPage = ({ data }) => {
  const { markdownRemark: node } = data;
  const { frontmatter } = node;
  const { project } = frontmatter;

  return (
    <div>
      <SectionTitle>{frontmatter.title}</SectionTitle>
      <InfoRows frontmatter={frontmatter} />
      <div className="md" dangerouslySetInnerHTML={{ __html: node.html }} />
      {(() => {
        const optionalBlocks = [];
        if (project.displays)
          optionalBlocks.push(<Displays key="displays" frontmatter={frontmatter} />);
        if (project.embed) optionalBlocks.push(<Embed key="embed" frontmatter={frontmatter} />);
        if (project.features)
          optionalBlocks.push(<Features key="features" frontmatter={frontmatter} />);
        return optionalBlocks;
      })()}
    </div>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
    fields: PropTypes.obj,
    frontmatter: PropTypes.obj,
  }).isRequired,
};

export default ProjectPage;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        project {
          info {
            link
            github
            tool {
              name
              link
            }
          }
          displays {
            mobile {
              childImageSharp {
                sizes(
                  maxWidth: 300
                  maxHeight: 480
                  cropFocus: NORTH
                  traceSVG: { color: "#0397a7" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
            tablet {
              childImageSharp {
                sizes(
                  maxWidth: 300
                  maxHeight: 480
                  cropFocus: NORTH
                  traceSVG: { color: "#0397a7" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
            desktop {
              childImageSharp {
                sizes(
                  maxWidth: 800
                  maxHeight: 500
                  cropFocus: NORTH
                  traceSVG: { color: "#0397a7" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
          features {
            title
            description
            image {
              childImageSharp {
                sizes(maxWidth: 700, traceSVG: { color: "#0397a7" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
          embed {
            location
            width
            height
          }
        }
      }
    }
  }
`;
