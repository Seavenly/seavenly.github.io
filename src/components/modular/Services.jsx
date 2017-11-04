import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SVG from '../partials/SVG';

const Services = ({ node }) => (
  <ServicesList>
    {node.frontmatter.services.map(service => (
      <ServicesItem key={service.title}>
        <Service>
          <Top>
            <SvgWrapper>
              <SVG icon={service.icon} />
            </SvgWrapper>
            <TitleWrapper>
              <Title>{service.title}</Title>
            </TitleWrapper>
          </Top>
          <SkillList>
            {service.skills.map(skill => (
              <li key={skill.name}>
                {!skill.link && skill.name}
                {skill.link && <SkillLink href={skill.link}>{skill.name}</SkillLink>}
              </li>
            ))}
          </SkillList>
        </Service>
      </ServicesItem>
    ))}
  </ServicesList>
);

Services.propTypes = {
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.object,
  }).isRequired,
};

export default Services;

const ServicesList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  max-width: 40rem;
  margin: 4rem auto 0;
  flex-wrap: wrap;
`;
const ServicesItem = styled.li`
  flex: 0 1 49%;
  display: flex;
  margin: 0 auto 0.3rem;
  @media screen and (min-width: 28rem) {
    flex: 0 1 32.5%;
  }
`;
const Service = styled.div`
  background: #f5f5f5;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;
const Top = styled.div`
  position: relative;
  background: linear-gradient(135deg, #3a3a3a 50%, #2d2d2d 50%);
`;
const SvgWrapper = styled.div`
  padding: 1rem 0.5rem;
  svg {
    fill: white;
  }
`;
const TitleWrapper = styled.div`
  padding: 0.3rem 0;
  background: rgba(255, 255, 255, 0.1);
`;
const Title = styled.h4`
  max-width: 8rem;
  margin: auto;
  font-size: 0.8rem;
  color: white;
  font-weight: 400;
`;
const SkillLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  &:hover {
    text-decoration: underline;
  }
`;
const SkillList = styled.ul`
  background: #eee;
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #e5e5e5;
`;
