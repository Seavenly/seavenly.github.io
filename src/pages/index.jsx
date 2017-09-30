import React from 'react';
import PropTypes from 'prop-types';

import Services from '../components/modular/Services';
import Tools from '../components/modular/Tools';

const IndexPage = ({ data }) => (
  <div className="page--home">
    {data.allMarkdownRemark.edges.map(({ node }) => {
      switch (node.frontmatter.menu) {
        case 'services':
          return <Services node={node} />;
        case 'tools':
          return <Tools node={node} />;
        default:
          return null;
      }
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
  allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
    edges {
      node {
        html
        frontmatter {
          title
          menu
          thumb {
            name
            childImageSharp {
              responsiveResolution(width: 150, height: 150) {
                src
                srcSet
              }
            }
          }
          modular {
            projects
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
            }
          }
        }
      }
    }
  }
}
`;
