import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Hero = ({ image, location: { pathname } }) => (
  <Wrapper mini={pathname !== '/'}>
    <Background>
      <Img sizes={image.childImageSharp.sizes} alt={image.name} />
    </Background>
    <Overlay>
      <Title>Nathan Schott</Title>
      <Slogan>Creating the web on two wheels</Slogan>
    </Overlay>
  </Wrapper>
);

Hero.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.object,
    name: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Hero);

const Wrapper = styled.div`
  position: relative;
  margin-top: -1px;
  overflow: hidden;
  &::after {
    content: '';
    width: 100%;
    padding-top: 50%;
    display: block;
  }
  @media screen and (min-width: 25rem) {
    &::after {
      padding-top: 40%;
    }
  }
  @media screen and (min-width: 31.25rem) {
    &::after {
      padding-top: 30%;
    }
  }
  @media screen and (min-width: 50rem) {
    &::after {
      padding-top: ${({ mini }) => (mini ? '15%' : '20%')};
    }
  }
`;
const Background = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .gatsby-image-outer-wrapper {
    position: absolute !important;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.01);
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  color: white;
  width: 100%;
  text-align: center;
`;
const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  @media screen and (min-width: 25rem) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 37.5rem) {
    font-size: 3rem;
  }
`;
const Slogan = styled.p`
  text-align: center;
  margin: 0;
  text-transform: lowercase;
  @media screen and (min-width: 25rem) {
    letter-spacing: 0.15rem;
  }
`;
