import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EstablishmentList from "./EstablishmentList";
import { getEstablishments } from "./getEstablishments";
import Loader from "react-loader-spinner";

const SearchWrap = styled.div`
  text-align: center;
`;

const SearchBar = styled.input`
  font-family: "Rubik", sans-serif;
  padding: 15px;
  width: 500px;
  font-size: 15px;
  box-sizing: border-box;
  border: 1px solid black;
  box-shadow: none;
  border: 1px solid black;
  margin-top: 150px;
  width: 400px;
  text-align: left;
  &:focus {
    outline: 2px solid black;
  }
`;

const StyledLoader = styled(Loader)`
  margin-top: 150px;
  text-align: center;
`;

function Search() {
  const [searchValue, setSearchValue] = useState("");
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

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filterEstablishments = (searchValue, establishments) => {
    return establishments.filter((establishment) => {
      const lowerCaseName = establishment.name.toLowerCase();

      if (lowerCaseName.includes(searchValue)) {
        return true;
      }
      return false;
    });
  };

  const establishmentsMatchingSearchValue = filterEstablishments(
    searchValue.toLowerCase(),
    establishments
  );

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
    <SearchWrap>
      <SearchBar
        autoFocus={true}
        value={searchValue}
        placeholder="Search by name..."
        onChange={(event) => handleSearch(event)}
      ></SearchBar>
      <EstablishmentList establishments={establishmentsMatchingSearchValue} />
    </SearchWrap>
  );
}

export default Search;
