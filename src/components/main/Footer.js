import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "../common/Logo";
import StyledLink from "../common/StyledLink";

const StyledFooter = styled.footer`
  background-color: lightgrey;
  align-content: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: space-around;
  margin: 0 auto;
  margin-top: 50px;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  flex: 1;
  margin: 30px;
  min-width: 250px;
`;

const HomeLink = styled.div``;

const Phone = styled.p`
  margin: 10px 0;
  font-size: 1.2rem;
`;
const StyledPhone = styled(FaPhoneAlt)`
  padding-right: 5px;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
`;

const SoMeWrap = styled.div`
  flex: 1;
`;

const SoMeFacebook = styled(FaFacebookSquare)`
  width: 45px;
  height: 45px;
  padding: 2px;
`;

const SoMeLinkedin = styled(FaLinkedin)`
  width: 45px;
  height: 45px;
  padding: 2px;
`;

const SoMeInsta = styled(FaInstagramSquare)`
  width: 45px;
  height: 45px;
  padding: 2px;
`;

const SoMeTwitter = styled(FaTwitterSquare)`
  width: 45px;
  height: 45px;
  padding: 2px;
`;

const Copyright = styled.p`
  color: rgba(255, 112, 0);
  font-size: 1.2rem;
  margin: 0;
`;

const Credit = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <HomeLink>
          <Link to="/">
            <Logo />
          </Link>
        </HomeLink>
      </Container>
      <Container>
        <Phone>
          <StyledPhone />
          +47 123 45 678
        </Phone>
        <StyledLink to="/contact">Contact us</StyledLink>
      </Container>
      <Container>
        <SocialMedia>
          <SoMeWrap>
            <SoMeFacebook />
            <SoMeLinkedin />
          </SoMeWrap>
          <SoMeWrap>
            <SoMeInsta />
            <SoMeTwitter />
          </SoMeWrap>
        </SocialMedia>
      </Container>
      <Container>
        <Copyright>Copyright © </Copyright>
        <Credit>Alicia Skutle </Credit>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
