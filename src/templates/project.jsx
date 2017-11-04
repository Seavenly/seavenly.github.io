import React from 'react';
import PropTypes from 'prop-types';

import InfoRows from '../components/partials/InfoTable';
import Displays from '../components/partials/Displays';
import Embed from '../components/partials/Embed';
import Features from '../components/partials/Features';

const ProjectPage = ({ data }) => {
  const { markdownRemark: node } = data;
  const { frontmatter } = node;
  const { project } = frontmatter;

  return (
    <div className="page page--project">
      <div className={`project project--${node.fields.slug}`}>
        <h2 className="project__title">{frontmatter.title}</h2>
        <div className="project__content">
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
      </div>
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
                sizes(maxWidth: 300, maxHeight: 480, cropFocus: NORTH) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            tablet {
              childImageSharp {
                sizes(maxWidth: 300, maxHeight: 480, cropFocus: NORTH) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            desktop {
              childImageSharp {
                sizes(maxWidth: 800, maxHeight: 500, cropFocus: NORTH) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          features {
            title
            description
            image {
              childImageSharp {
                sizes(maxWidth: 700) {
                  ...GatsbyImageSharpSizes
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
