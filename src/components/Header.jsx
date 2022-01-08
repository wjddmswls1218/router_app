import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderBox = styled.ul`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  box-shadow: 3px 3px 3px #727272;
`;

const HeaderItem = styled.li`
  list-style: none;

  padding: 3px;

  color: #000;
  transition: 0.4s;

  &:hover {
    color: yellow;
  }
`;

const HeaderNavLink = styled(NavLink)`
  color: #000;
  transition: 0.4s;

  &:hover {
    color: #939305;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <header>
        <HeaderBox>
          <HeaderItem>
            <HeaderNavLink to="/">HOME</HeaderNavLink>
          </HeaderItem>

          <HeaderItem>
            <HeaderNavLink to="/intro">INTRO</HeaderNavLink>
          </HeaderItem>

          <HeaderItem>
            <HeaderNavLink to="/notice">NOTICE</HeaderNavLink>
          </HeaderItem>

          <HeaderItem>
            <HeaderNavLink to="/contact">CONTACT</HeaderNavLink>
          </HeaderItem>
        </HeaderBox>
      </header>
    );
  }
}

export default Header;
