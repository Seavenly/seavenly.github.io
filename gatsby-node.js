const path = require('path');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = boundActionCreators;
    const fileNode = getNode(node.parent);
    const rgx = /pages\/(home|projects)\/(\d\d\.)?([^/]*)/;
    const [, , , slug] = rgx.exec(fileNode.relativePath);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/projects/" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/projects/${node.fields.slug}`,
          component: path.resolve('./src/templates/project.jsx'),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
