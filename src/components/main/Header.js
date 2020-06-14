import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";
import {
  BsSearch,
  BsPerson,
  BsList,
  BsX,
  BsEnvelope,
  BsCalendar,
} from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";
import Logo from "../common/Logo";
import SmallLogo from "../common/SmallLogo";

const styles = {
  bmBurgerButton: {
    display: "none",
    position: "fixed",
    right: "36px",
    top: "36px",
    width: "35px",
    height: "30px",
  },
  bmBurgerBars: {
    background: "#000000",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    display: "none",
  },
  bmCross: {
    background: "lightgrey",
    color: "#ffffff",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    marginTop: "65px",
  },
  bmMenu: {
    backgroundColor: "rgb(211,211,211, 1)",
    padding: "1em 0",
    fontSize: "1.15em",
  },
  bmItem: {
    display: "inline-block",
    border: "none",
    textAlign: "center",
    padding: "0",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: "1000",
    top: "0",
    display: "none",
  },
};
const List = styled.ul`
  text-align: center;
  margin: 5rem 0;
  width: 100%;
`;
const ListItem = styled.li`
  list-style-type: none;
  text-align: left;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.3em;
  color: black;
  width: 100%;
  padding: 1.5rem;
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

const LinkName = styled.span`
  margin-left: 0.5rem;
`;

const StyledSearch = styled(BsSearch)`
  width: 40px;
  height: 40px;
  margin-right: -20px;
  color: #000000;
  z-index: 1000;
`;
const StyledLogin = styled(BsPerson)`
  width: 43px;
  height: 43px;
  color: #000000;
  z-index: 1000;
`;
const Login = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  z-index: 1000;
`;
const LoginWrap = styled.span`
  display: none;
  @media (min-width: 620px) {
    display: flex;
    flex-direction: row;
  }
`;
const BurgerMenuButton = styled(BsList)`
  width: 55px;
  height: 55px;
  cursor: pointer;
`;
const BurgerMenuClose = styled(BsX)`
  width: 60px;
  height: 60px;
  cursor: pointer;
  outline: none;
  float: right;
  margin-right: 1rem;
`;
const RightMenu = styled.div`
  display: flex;
`;
const Links = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-top: -80px;
  padding: 10px 20px;
  background-color: rgb(0, 0, 0, 0.1);
`;

const LogoLink = styled(Links)`
  border: 0;
  outline: none;
  inline: none;
  text-decoration: none;
`;

const LogoutButton = styled.button`
  display: flex;
  background: rgb(211, 211, 211);
  align-items: center;
  text-decoration: none;
  border: none;
  outline: none;
  font-size: 1.3em;
  color: black;
  width: 100%;
  padding: 1.5rem;
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { listen } = useHistory();

  useEffect(() => {
    const unlisten = listen((location) => {
      setMenuOpen(false);
    });
    return unlisten;
  }, [listen]);

  function handleOnClick() {
    setMenuOpen(!menuOpen);
  }
  function handleLogout() {
    props.setLoggedIn(false);
    setMenuOpen(!menuOpen);
  }
  const width = window.innerWidth;
  const breakpoint = 620;

  if (props.loggedIn === "true") {
    return (
      <Nav>
        <LogoLink to="/">
          {" "}
          {width < breakpoint ? <SmallLogo /> : <Logo />}
        </LogoLink>

        <Links to="/search">
          <StyledSearch />
        </Links>

        <RightMenu>
          <LoginWrap>
            <Links to="/login">
              <Login>Admin</Login>
            </Links>
            <Links to="/login">
              <StyledLogin />
            </Links>
          </LoginWrap>
          <BurgerMenuButton onClick={handleOnClick} />
          <Menu isOpen={menuOpen} styles={styles} right disableAutoFocus>
            <BurgerMenuClose onClick={handleOnClick} />
            <List>
              <ListItem>
                <StyledLink to="/login">
                  <BsPerson size="20" />
                  <LinkName>Dashboard</LinkName>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/messages">
                  <BsEnvelope size="20" />
                  <LinkName>Messages</LinkName>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/enquiries">
                  <BsCalendar size="20" />
                  <LinkName>Enquiries</LinkName>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/establishments">
                  <FaBed size="20" />
                  <LinkName>Establishments</LinkName>
                </StyledLink>
              </ListItem>
              <ListItem>
                <LogoutButton type="button" onClick={handleLogout}>
                  <FiLogOut size="20" />
                  <LinkName>Logout</LinkName>
                </LogoutButton>
              </ListItem>
            </List>
          </Menu>
        </RightMenu>
      </Nav>
    );
  }

  return (
    <Nav>
      <LogoLink to="/">
        {width < breakpoint ? <SmallLogo /> : <Logo />}{" "}
      </LogoLink>

      <Links to="/search">
        <StyledSearch />
      </Links>

      <RightMenu>
        <LoginWrap>
          <Links to="/login">
            <Login>Login</Login>
          </Links>
          <Links to="/login">
            <StyledLogin />
          </Links>
        </LoginWrap>

        <BurgerMenuButton onClick={handleOnClick} />

        <Menu isOpen={menuOpen} styles={styles} right disableAutoFocus>
          <BurgerMenuClose onClick={handleOnClick} />

          <List>
            <ListItem>
              <StyledLink to="/">
                <RiHomeLine size="20" />
                <LinkName>Home</LinkName>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/accommodation">
                <FaBed size="20" />
                <LinkName>Accommodation</LinkName>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/enquiry">
                <BsCalendar size="20" />
                <LinkName>New enquiry</LinkName>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/contact">
                <BsEnvelope size="20" />
                <LinkName>Contact</LinkName>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/login">
                <FiLogIn size="20" />
                <LinkName>Login</LinkName>
              </StyledLink>
            </ListItem>
          </List>
        </Menu>
      </RightMenu>
    </Nav>
  );
}

export default Header;
