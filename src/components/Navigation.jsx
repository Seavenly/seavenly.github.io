import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { navigation } from '../data/config/site.yaml';
import SVG from './partials/SVG';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shouldClose)
      this.setState(() => ({
        open: false,
      }));
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  handleMobileMenuClick(e) {
    if (e.target.tagName === 'BUTTON' || this.state.open) {
      this.setState(state => ({
        open: !state.open,
      }));
    }
  }

  handleOutsideClick(e) {
    if (this.navRef && !this.navRef.contains(e.target)) {
      this.setState(() => ({
        open: false,
      }));
    }
  }

  render() {
    return (
      <nav
        ref={node => {
          this.navRef = node;
        }}
      >
        <Container isOpen={this.state.open}>
          <NavList>
            {Object.keys(navigation).map(key => (
              <NavItem key={key}>
                <NavLink to={`${navigation[key]}`} onClick={this.handleMobileMenuClick}>
                  {key}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Container>
        <MobileButton onClick={this.handleMobileMenuClick}>
          <SVG icon="menu" />
        </MobileButton>
      </nav>
    );
  }
}

Navigation.propTypes = {
  shouldClose: PropTypes.bool.isRequired,
};

export default Navigation;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
`;
const NavItem = styled.li`
  list-style: none;
  @media screen and (min-width: 37.5rem) {
    display: inline-block;
  }
`;
const Container = styled.div`
  @media screen and (max-width: 37.499rem) {
    position: fixed;
    right: 0;
    top: 2.6rem;
    bottom: -125rem;
    width: 14rem;
    transition: transform 0.5s;
    background: white;
    z-index: 2;
    padding: 1rem 1rem 0;
    text-align: right;
    border-left: 1px solid #ddd;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(14rem)')};
  }
`;
const NavLink = styled(Link)`
  @media screen and (max-width: 37.499rem) {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
    text-transform: lowercase;
    display: block;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    margin-bottom: 0.5rem;
  }
  @media screen and (min-width: 37.5rem) {
    color: white;
    text-decoration: none;
    text-transform: lowercase;
    display: block;
    height: 2.6rem;
    padding: 0 1rem;
    font-weight: 300;
    transition: background 0.3s;
    position: relative;
    display: flex;
    align-items: center;
    &:hover {
      &::before {
        opacity: 0.15;
      }
      &::after {
        transition: all 0.3s;
        transform: scaleX(0.8);
      }
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: white;
      opacity: 0;
      transition: all 0.3s;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0.4rem;
      left: 0;
      transform: scaleX(0);
      height: 0.1rem;
      background: white;
      z-index: 1;
      width: 100%;
    }
  }
`;
const MobileButton = styled.button`
  @media screen and (max-width: 37.499rem) {
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
    color: white;
    font-size: 1rem;
    font-weight: 300;
    text-transform: lowercase;
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.15rem;
    padding: 0 1rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    svg {
      fill: white;
      display: inline;
      margin-right: 0.2rem;
    }
  }
  @media screen and (min-width: 37.5rem) {
    display: none;
  }
`;
