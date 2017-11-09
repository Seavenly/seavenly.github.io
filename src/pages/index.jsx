import React from 'react';
import PropTypes from 'prop-types';

import Modular from '../components/Modular';

const IndexPage = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }) => {
      const type = node.fileAbsolutePath
        .split('/')
        .slice(-1)[0]
        .slice(0, -3);
      return (
        <Modular
          key={node.id}
          type={type}
          node={node}
          data={type === 'portfolio' ? data.projects : null}
        />
      );
    })}
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query ModularQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/home/" } }
      sort: { fields: [fileAbsolutePath] }
    ) {
      edges {
        node {
          id
          html
          fileAbsolutePath
          frontmatter {
            title
            menu
            thumb {
              name
              childImageSharp {
                resolutions(width: 150, height: 150, traceSVG: { color: "#0397a7" }) {
                  ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                }
              }
            }
            services {
              title
              icon
              skills {
                name
                link
              }
            }
            tools {
              name
              link
              logo {
                name
                childImageSharp {
                  sizes(maxWidth: 100, traceSVG: { color: "#0397a7" }) {
                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
    ...projects
  }
`;
