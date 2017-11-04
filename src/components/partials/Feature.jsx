import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: false,
    };

    this.slideInFeature = this.slideInFeature.bind(this);
    this.handleBrowserResize = this.handleBrowserResize.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth >= 960) {
      window.addEventListener('scroll', this.slideInFeature);
    } else {
      window.addEventListener('resize', this.handleBrowserResize);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.slideInFeature);
    window.removeEventListener('resize', this.handleBrowserResize);
  }

  slideInFeature() {
    if (window.pageYOffset >= this.feature.offsetTop - window.innerHeight / 1.3) {
      this.setState({ slide: true });
      window.removeEventListener('scroll', this.slideInFeature);
    }
  }

  handleBrowserResize() {
    if (window.innerWidth >= 960) {
      window.removeEventListener('resize', this.handleBrowserResize);
      window.addEventListener('scroll', this.slideInFeature);
    }
  }

  render() {
    const { data: feature } = this.props;
    return (
      <Wrapper>
        <ImageWrapper
          slideIn={this.state.slide}
          innerRef={node => {
            this.feature = node;
          }}
        >
          <Img
            sizes={feature.image.childImageSharp.sizes}
            alt={`${feature.title} feature screenshot`}
          />
        </ImageWrapper>
        <Info>
          <h3>{feature.title}</h3>
          <Description>{feature.description}</Description>
        </Info>
      </Wrapper>
    );
  }
}

Feature.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Feature;

const ImageWrapper = styled.div.attrs({
  style: ({ slideIn }) =>
    slideIn
      ? {
          transform: 'translateX(0)',
          opacity: 1,
        }
      : null,
})`
  flex: 1 1 50%;
  position: relative;
  @media (min-width: 60rem) {
    perspective: 3rem;
    transform: translateX(-5rem);
    opacity: 0;
    transition: transform 1s, opacity 1s;
    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      border-radius: 50%;
      left: -10%;
      right: -7%;
      bottom: 1rem;
      height: 2rem;
      background: rgba(255, 0, 0, 0);
      transform: rotateY(3deg) rotateZ(6deg) skewX(60deg);
      box-shadow: -1rem 4rem 2rem rgba(0, 0, 0, 0.15);
    }
  }
  .gatsby-image-outer-wrapper {
    display: block;
    border: 1px solid #ddd;
    @media (min-width: 60rem) {
      transform: rotateY(1deg);
    }
  }
`;
const Info = styled.div`
  flex: 1 1 50%;
  padding: 0 2rem;
`;
const Description = styled.p`
  line-height: 1.4rem;
`;
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 6rem;
  flex-direction: column;
  @media (min-width: 60rem) {
    flex-direction: row;
    margin-bottom: 10rem;
    &:nth-child(2n) {
      ${Info} {
        order: -1;
      }
      ${ImageWrapper} {
        transform: translateX(5rem);
        &::after {
          left: -7%;
          right: -10%;
          transform: rotateY(-3deg) rotateZ(-6deg) skewX(-60deg);
          box-shadow: 1rem 4rem 2rem rgba(0, 0, 0, 0.15);
        }
      }
      .gatsby-image-outer-wrapper {
        transform: rotateY(-1deg);
      }
    }
  }
`;
