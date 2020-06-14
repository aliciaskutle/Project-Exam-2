import React from "react";
import styled from "styled-components";
import StyledLink from "../common/StyledLink";
import { FaBed, FaDollarSign } from "react-icons/fa";
////BsPlusSquare

const CardWrap = styled.div`
  width: 95%;
  margin: 50px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (min-width: 620px) {
    width: 90%;
  }
  @media (min-width: 1100px) {
    width: 70%;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 550px;
  margin: 1rem;
  background-color: white;
  box-shadow: 1px 1px 10px 1px lightgrey;
  @media (min-width: 620px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    width: 350px;
    height: 530px;
  }
`;

const CardImg = styled.img`
  height: 200px;
  width: 300px;
  @media (min-width: 620px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    width: 350px;
  }
`;

const CardBody = styled.div`
  margin: 30px;
`;

const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 20px;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Info = styled.div`
  margin: 20px;
`;

const CardText = styled.p`
  margin: 0;
`;

function EstablishmentList(props) {
  return (
    <CardWrap>
      {props.establishments.map((establishment) => {
        return (
          <Card key={establishment.id}>
            <CardImg src={establishment.image} alt="" />
            <CardBody>
              <CardTitle>{establishment.name}</CardTitle>
              <InfoWrap>
                <Info>
                  <FaBed /> <CardText> {establishment.maxGuests} </CardText>
                </Info>{" "}
                <Info>
                  <FaDollarSign />
                  <CardText>{establishment.price}</CardText>
                </Info>
              </InfoWrap>
              <CardText>{establishment.description}</CardText>
            </CardBody>
            <StyledLink to={`/establishments/${establishment.id}`}>
              Learn more
            </StyledLink>
          </Card>
        );
      })}
    </CardWrap>
  );
}

export default EstablishmentList;
