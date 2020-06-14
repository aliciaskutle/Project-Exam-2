import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getEstablishmentByID } from "../establishments/getEstablishmentByID";
import Maps from "../maps/Maps";
import { FaBed, FaDollarSign } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import Loader from "react-loader-spinner";
import StyledLink from "../common/StyledLink";

const DetailsWrap = styled.div`
  height: 100%;
  width: 100%;
  margin: 100px auto;
  text-align: center;
  @media (min-width: 426px) {
    width: 90%;
  }
  @media (min-width: 1025px) {
    width: 60%;
  }
`;

const DetailsImg = styled.img`
  max-height: 300px;
  width: 100%;
  @media (min-width: 426px) {
    max-height: 500px;
  }
  @media (min-width: 1024px) {
    max-height: 600px;
  }
`;

const DetailsTitle = styled.h2`
  margin: 1rem 0.5rem;
  padding: 0;
  text-align: left;
`;

const InfoWrap1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: 2rem 0;
`;
const Info = styled.p`
  margin: 20px;
`;
const InfoDetails = styled.span`
  display: flex;
`;
const InfoWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 2rem;
  }
`;
const DetailsText = styled.p`
  flex: 1;
  text-align: left;
  padding: 1rem;
`;
const StyledMaps = styled.div`
  flex: 1;
  margin: 0 auto;
`;

const StyledLoader = styled(Loader)`
  margin-top: 150px;
  text-align: center;
`;

const Link = styled(StyledLink)`
  margin: 2rem;
`;

function EstablishmentDetails() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    getEstablishmentByID(id)
      .then((json) => {
        console.log(json);
        setDetails(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

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
    <DetailsWrap key={details.id}>
      <DetailsTitle>{details.name}</DetailsTitle>
      <DetailsImg src={details.image} alt="" />
      <InfoWrap1>
        <Info>
          <FaBed />
          <InfoDetails> {details.maxGuests} beds</InfoDetails>
        </Info>{" "}
        <Info>
          <FaDollarSign />
          <InfoDetails> {details.price} per night</InfoDetails>
        </Info>
        <Info>
          <GiMeal />{" "}
          {details.selfCatering === true && (
            <InfoDetails>Selfcatering</InfoDetails>
          )}
          {details.selfCatering === false && (
            <InfoDetails>All-inclusive</InfoDetails>
          )}
        </Info>
      </InfoWrap1>

      <InfoWrap2>
        {" "}
        <DetailsText>{details.description}</DetailsText>
        <StyledMaps>
          {" "}
          <Maps lat={details.lat} lng={details.lng} />
        </StyledMaps>
      </InfoWrap2>
      <Link to="/accommodation">Go back</Link>
    </DetailsWrap>
  );
}

export default EstablishmentDetails;
