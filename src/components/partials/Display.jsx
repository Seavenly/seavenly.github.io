import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';

const Display = ({ type, images }) => (
  <Styled size={type}>
    <div className="screen">
      <div className="site">
        <Img className="img" sizes={images.sizes} alt={images.alt} />
      </div>
    </div>
  </Styled>
);

Display.propTypes = {
  type: PropTypes.string,
  images: PropTypes.shape({
    sizes: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

Display.defaultProps = {
  type: 'desktop',
};

export default Display;

const desktopStyled = theme => css`
  @media (max-width: 37.499rem) {
    flex: 1 1 100%;
    &::before {
      content: 'Desktop';
    }
  }
  @media (min-width: 37.5rem) {
    border: 1rem solid ${theme.colors.dark};
    border-radius: 1rem;
    position: relative;
    margin-right: auto;
    width: 90%;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      left: 50%;
      bottom: -11%;
      width: 10%;
      margin-left: -5%;
      background: ${theme.colors.dark};
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 110%;
      left: 30%;
      bottom: -13%;
      width: 40%;
      background: ${theme.colors.dark};
      border-radius: 0.3rem 0.3rem 0 0;
    }
    .screen {
      overflow: hidden;
      &::before {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: 56.25%;
      }
    }
    .site {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -1px;
      background: white;
      overflow: hidden;
    }
    .img {
      display: block;
    }
  }
`;

const tabletStyled = theme => css`
  @media (max-width: 37.499rem) {
    flex: 0 1 48%;
    &::before {
      content: 'Tablet';
    }
    .screen::before {
      padding-bottom: 137.55%;
    }
  }
  @media (min-width: 37.5rem) {
    border: 1rem solid ${theme.colors.dark};
    border-radius: 1rem;
    width: 40%;
    position: absolute;
    margin: auto;
    bottom: -15%;
    right: 0;
    .screen {
      overflow: hidden;
      background: white;
      &::before {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: 137.55%;
      }
    }
    .site {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -1px;
      overflow: hidden;
    }
    .img {
      display: block;
    }
  }
`;

const mobileStyled = theme => css`
  @media (max-width: 37.499rem) {
    &::before {
      content: 'Mobile';
    }
  }
  @media (min-width: 37.5rem) {
    right: 30%;
    bottom: -22%;
    width: 16%;
    border: 0.5rem solid ${theme.colors.dark};
    border-radius: 0.5rem;
    border-bottom-width: 2rem;
    &::after {
      content: '';
      position: absolute;
      display: block;
      bottom: -1.4rem;
      left: 35%;
      width: 30%;
      height: 0.8rem;
      background: #777;
      border-radius: 0.2rem;
    }
    .screen {
      position: relative;
      &::before {
        padding-bottom: 156.25%;
      }
    }
  }
`;

const sizeConditional = ({ size, theme }) => {
  switch (size) {
    case 'tablet':
      return tabletStyled(theme);
    case 'mobile':
      return css`
        ${tabletStyled(theme)} ${mobileStyled(theme)};
      `;
    default:
      return desktopStyled(theme);
  }
};

const Styled = styled.div`
  img {
    height: auto !important;
  }
  @media (max-width: 37.499rem) {
    position: relative;
    margin-bottom: 0.5rem;
    border: 1px solid #eee;
    margin-top: 1.6rem;
    &::before {
      display: block;
      background: #444;
      top: -1.6rem;
      left: 0;
      right: 0;
      padding: 0.3rem 0.6rem;
      color: white;
      position: absolute;
      z-index: 1;
      font-size: 0.9rem;
      text-align: center;
      border-radius: 0.2rem 0.2rem 0 0;
    }
    .screen {
      overflow: hidden;
      &::before {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: 56.25%;
      }
    }
    .site {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -1px;
      background: white;
      overflow: hidden;
    }
    .img {
      display: block;
    }
  }
  ${sizeConditional};
`;
