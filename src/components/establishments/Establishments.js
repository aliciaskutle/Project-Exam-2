import React, { useState, useEffect } from "react";
//import styled from "styled-components";
import AdminEstablishments from "./AdminEstablishments";
import { getEstablishments } from "./getEstablishments";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledLoader = styled(Loader)`
  margin-top: 150px;
  text-align: center;
`;

function Establishments() {
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
    <div>
      <AdminEstablishments
        establishments={establishments}
        setEstablishments={setEstablishments}
      />
    </div>
  );
}

export default Establishments;
