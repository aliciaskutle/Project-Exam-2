import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import EstablishmentList from "../establishments/EstablishmentList";
import { getEstablishments } from "../establishments/getEstablishments";

const AccommodationWrap = styled.div`
  text-align: center;
  margin: 90px auto;
`;

const StyledLoader = styled(Loader)`
  margin-top: 150px;
  text-align: center;
`;

function Accommodation() {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEstablishments()
      .then((json) => {
        console.log(json);
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
    <AccommodationWrap>
      <EstablishmentList establishments={establishments} />
    </AccommodationWrap>
  );
}

export default Accommodation;
