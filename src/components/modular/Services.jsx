import React from 'react';
import PropTypes from 'prop-types';

const Services = ({ node }) => (
  <section className="services">
    <div id="Services" className="anchor" />
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
      <ul className="services">
        {node.frontmatter.modular.services.map(service => (
          <li>
            <div className="service">
              <div className="top">
                <div className="icon">
                  <i className={`fa fa-${service.icon}`} aria-hidden="true" />
                </div>
                <div className="title"><h4>{service.title}</h4></div>
              </div>
              <ul className="skills">
                {service.skills.map(skill => (
                  <li>
                    {!skill.link && skill.name}
                    {skill.link && (<a href={skill.link}>{skill.name}</a>)}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Services.propTypes = {
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.object,
  }).isRequired,
};

export default Services;

