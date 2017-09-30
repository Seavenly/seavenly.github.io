import React from 'react';
import PropTypes from 'prop-types';

const Tools = ({ node }) => (
  <section className="tools">
    <div id="Tools" className="anchor" />
    <div className="heading">
      <div className="support-img">
        <img
          src={node.frontmatter.thumb.childImageSharp.responsiveResolution.src}
          srcSet={node.frontmatter.thumb.childImageSharp.responsiveResolution.srcSet}
          alt={node.frontmatter.thumb.name.replace('-', ' ')}
        />
      </div>
      <h2>{node.frontmatter.title}</h2>
    </div>
    <div className="content">
      <div className="md" dangerouslySetInnerHTML={{ __html: node.html }} />
      <div className="tools">
        <ul>
          {node.frontmatter.modular.tools.map(tool => (
            <li key={tool.name}>
              <a href={tool.link}>
                <div className="tool">
                  <div className="logo">
                      {/* {{ page.media[tool.logo].resize(300,300).html(null, tool.title ~ ' logo') }} */}
                  </div>
                  <h4>{tool.title}</h4>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

Tools.propTypes = {
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.object,
  }).isRequired,
};

export default Tools;
