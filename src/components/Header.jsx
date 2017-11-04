import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Headroom from 'react-headroom';

import Navigation from './Navigation';
import Hero from './Hero';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeMenu: false,
    };
  }
  render() {
    return (
      <header>
        <Headroom
          style={{
            zIndex: 100,
          }}
          onUnpin={() => {
            this.setState(() => ({
              closeMenu: true,
            }));
          }}
          onPin={() => {
            this.setState(() => ({
              closeMenu: false,
            }));
          }}
        >
          <TopBar>
            <Container>
              <Logo>
                <HomeLink to="/">&lt;nschott/&gt;</HomeLink>
              </Logo>
              <Navigation shouldClose={this.state.closeMenu} />
            </Container>
          </TopBar>
        </Headroom>
        <Hero image={this.props.hero} />
      </header>
    );
  }
}

Header.propTypes = {
  hero: PropTypes.shape({
    childImageSharp: PropTypes.object,
    name: PropTypes.string,
  }).isRequired,
};

export default Header;

const TopBar = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  width: 100%;
  z-index: 100;
`;
const Container = styled.div`
  ${({ theme }) => theme.snippets.wrapper};
  display: flex;
  justify-content: space-between;
  height: 2.6rem;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const HomeLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s;
  padding: 0 1rem;
  &:hover {
    color: #999;
  }
`;
