import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsWifi, BsClock, BsMap, BsChatDots } from "react-icons/bs";
import { getEstablishments } from "../establishments/getEstablishments";
import StyledLink from "../common/StyledLink";
import Loader from "react-loader-spinner";

const BackgroundImg = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;
const HeadingWrap = styled.div`
  position: relative;
  margin-left: 20px;
  margin-top: -230px;
  @media (min-width: 620px) {
    margin-left: 40px;
    margin-top: -300px;
  }
  @media (min-width: 1024px) {
    margin-left: 80px;
    margin-top: -320px;
  }
  @media (min-width: 1440px) {
    margin-left: 120px;
    margin-top: -450px;
  }
`;
const Heading1 = styled.h1`
  color: black;
  font-size: 25px;
  text-align: left;
  margin: 0;
  @media (min-width: 620px) {
    font-size: 35px;
  }
  @media (min-width: 1024px) {
    font-size: 40px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`;
const Heading2 = styled.h1`
  color: white;
  font-size: 40px;
  text-align: left;
  text-shadow: 2px 2px 10px grey;
  margin: 0;
  @media (min-width: 620px) {
    font-size: 60px;
  }
  @media (min-width: 1024px) {
    font-size: 70px;
  }
  @media (min-width: 1440px) {
    font-size: 85px;
  }
`;
const Heading3 = styled.h1`
  color: black;
  font-size: 18px;
  text-align: left;
  margin-top: 10px;
  @media (min-width: 620px) {
    font-size: 25px;
  }
  @media (min-width: 1024px) {
    font-size: 35px;
  }
  @media (min-width: 1440px) {
    font-size: 45px;
  }
`;
const StyledButton = styled(StyledLink)`
  margin: 0 0 0 20px;
  width: 100px;
  @media (min-width: 620px) {
    margin-left: 40px;
    width: 150px;
  }
  @media (min-width: 1024px) {
    margin-left: 80px;
    width: 180px;
  }
  @media (min-width: 1440px) {
    margin-left: 120px;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const SnapScroll = styled.div`
  text-align: center;
  overflow-y: scroll;
  min-height: 100vh;
  scroll-snap-type: y mandatory;
`;
const SnapSection = styled.section`
  align-items: center;
  scroll-snap-align: start;
  &:first-of-type {
    scroll-margin: 150px;
  }
`;
const About = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 70%;
`;
const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: flex-start;
  width: 220px;
  padding: 1rem;
  height: 100%;
  margin-bottom: 1rem;
`;
const AboutIntro = styled.p`
  margin: 2rem 4rem;
`;
const AboutH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 1rem;
  border-bottom: 1px solid black;
  @media (min-width: 620px) {
    width: 500px;
  }
`;
const AboutH3 = styled.h3`
  margin: 0;
  font-size: 0.9rem;
`;
const AboutText = styled.p`
  margin: 0;
`;
const AboutLogo1 = styled(BsWifi)`
  flex: 1;
  width: 20px;
  height: 20px;
`;
const AboutLogo2 = styled(BsClock)`
  flex: 1;
  width: 20px;
  height: 20px;
`;
const AboutLogo3 = styled(BsMap)`
  flex: 1;
  width: 20px;
  height: 20px;
`;
const AboutLogo4 = styled(BsChatDots)`
  flex: 1;
  width: 20px;
  height: 20px;
`;
const Info = styled.div`
  flex: 4;
`;
const CardWrap = styled.div`
  width: 70%;
  margin: 50px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const Card = styled.div`
  width: 300px;
  height: 100%;
  margin: 20px 10px;
  background-color: white;
  box-shadow: 1px 1px 10px 1px lightgrey;
`;
const CardImg = styled.img`
  height: 180px;
  width: 300px;
`;
const StyledLoader = styled(Loader)`
  margin-top: 150px;
  text-align: center;
`;
const Link = styled(StyledLink)`
  width: 100px;
  margin-top: 0;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
`;

function Home() {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEstablishments()
      .then((json) => {
        setEstablishments(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <StyledLoader
        type="Oval"
        color="grey"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }

  return (
    <SnapScroll>
      <SnapSection>
        <BackgroundImg src="/images/bergen.jpg" alt="Bryggen in Bergen" />
        <Wrap>
          <HeadingWrap>
            <Heading1>Holidays in</Heading1>
            <Heading2>Bergen?</Heading2>
            <Heading3>Find your hotel, B&B or guesthouse here</Heading3>
          </HeadingWrap>
          <StyledButton to="/search">Explore</StyledButton>
        </Wrap>
      </SnapSection>

      <AboutH2>About Holidaze</AboutH2>
      <AboutIntro>
        A lcoal tourist agency providing the best hotels, B&B's and guest houses
        you can find i the beautiful city of Bergen
      </AboutIntro>
      <About>
        <AboutSection>
          <AboutLogo1 />
          <Info>
            <AboutH3>Wifi</AboutH3>
            <AboutText>
              All of our providers offer their visitors free wifi
            </AboutText>
          </Info>
        </AboutSection>
        <AboutSection>
          <AboutLogo2 />
          <Info>
            <AboutH3>24H Service</AboutH3>
            <AboutText>
              Check-in and check-out any time during the day
            </AboutText>
          </Info>
        </AboutSection>
        <AboutSection>
          <AboutLogo3 />
          <Info>
            <AboutH3>Hiking Guide</AboutH3>
            <AboutText>
              Guides with hiking trails nearby the establishments
            </AboutText>
          </Info>
        </AboutSection>
        <AboutSection>
          <AboutLogo4 />
          <Info>
            <AboutH3>Easy Commonucation</AboutH3>
            <AboutText>
              All information and contact conducted in English
            </AboutText>
          </Info>
        </AboutSection>
      </About>

      <StyledLink to="/accommodation">See all</StyledLink>

      <AboutH2>Popular stays:</AboutH2>

      <AboutIntro>
        Here are a few of our most popular establishments:
      </AboutIntro>

      <CardWrap>
        {establishments.slice(0, 3).map((establishment) => {
          return (
            <Card key={establishment.id}>
              <CardImg src={establishment.image} alt="" />
              <h3>{establishment.name}</h3>
              <Link to={`/establishments/${establishment.id}`}>Learn more</Link>
            </Card>
          );
        })}
      </CardWrap>

      <AboutIntro>
        Whether you prefer a private cabin only surrounded by the nature or a
        luxurious hotel with all-inclusive - we have something for everyone!
      </AboutIntro>

      <StyledLink to="/enquiry">Send an enquiry</StyledLink>
    </SnapScroll>
  );
}

export default Home;
