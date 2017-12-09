import React from 'react';
import styled from 'styled-components';
import SVG from './partials/SVG';

import { social } from '../data/config/site.yaml';

const Footer = () => (
  <Wrapper>
    <SocialList>
      {Object.keys(social).map(key => (
        <SocialItem key={key}>
          <SocialLink href={social[key]} aria-label={`${key} account`}>
            <SVG icon={key} />
          </SocialLink>
        </SocialItem>
      ))}
    </SocialList>
    <p>
      <span role="img" aria-label="copyright">
        &copy;
      </span>
      &nbsp;2016 - {new Date().getFullYear()} Nathan Schott
    </p>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.footer`
  text-align: center;
  font-size: 0.9rem;
  padding: 3rem 1rem 1rem;
`;
const SocialList = styled.ul`
  list-style: none;
  padding: 0;
`;
const SocialItem = styled.li`
  display: inline-block;
  margin: 0 0.2rem;
`;
const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.8rem;
  display: block;
  &:hover svg {
    fill: #777;
  }
  svg {
    transition: fill 0.2s;
  }
`;
