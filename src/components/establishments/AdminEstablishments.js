import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import StyledLink from "../common/StyledLink";
import { deleteEstablishmentByID } from "./deleteEstablishmentByID";
import { BsPlusSquare } from "react-icons/bs";
import Loader from "react-loader-spinner";

const CardWrap = styled.div`
  width: 95%;
  margin: 50px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (min-width: 767px) {
    margin: 100px auto;
  }
  @media (min-width: 1023px) {
    width: 80%;
  }
`;
const H1 = styled.h1`
  font-size: 1.5rem;
`;
const AdminHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 80px auto 20px;
  min-height: 200px;
  background-color: white;
  box-shadow: 1px 1px 10px 1px lightgrey;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const AdminRight = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: 1rem;
  padding: 2rem;
`;
const AdminText = styled.p`
  color: black;
  font-size: 1.2rem;
`;
const AdminLeft = styled.div`
  border-bottom: 1px solid black;
  flex: 2;
  margin: 1rem;
  padding: 2rem;
  @media (min-width: 767px) {
    border: none;
    border-right: 1px solid black;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  box-shadow: 1px 1px 10px 1px lightgrey;
  @media (min-width: 767px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
const CardH2 = styled.h2`
  font-size: 1.1rem;
`;
const ContactInfo = styled.div`
  flex: 2;
`;
const CheckInDates = styled.div`
  flex: 2;
  @media (min-width: 767px) {
    margin: 0 0.5rem;
  }
`;
const CardText = styled.p``;
const CardLink = styled.div`
  flex: 1;
  margin: 3rem 0;
`;
const Task = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 60px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  text-decoration: none;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(255, 58, 62, 1) 0%,
    rgba(255, 87, 29, 1) 57%,
    rgba(255, 112, 0, 1) 100%
  );
  box-shadow: 1px 1px 10px 1px lightgrey;
  &:hover {
    outline: 2px solid black;
  }
`;
const TaskText = styled.h3`
  color: black;
  text-decoration: none;
  margin-left: 1rem;
`;
const DashboardLink = styled(StyledLink)`
  width: 160px;
  margin: 0;
  margin-top: 1rem;
  font-size: 15px;
  @media (min-width: 767px) {
    width: 180px;
    margin: 1rem;
  }
`;
const StyledLoader = styled(Loader)`
  margin-top: 150px;
  text-align: center;
`;
const SmallLoader = styled(StyledLoader)`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

function AdminEstablishments(props) {
  const [loading, setLoading] = useState(true);

  function handleClick(id) {
    deleteEstablishmentByID(id)
      .then(() => {
        const newEstablishments = props.establishments.filter(
          (establishment) => establishment.id !== id
        );
        props.setEstablishments(newEstablishments);
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  }

  return (
    <CardWrap>
      <AdminHead>
        <AdminLeft>
          <H1>Establishments</H1>
          <AdminText>
            Administrate establishments from providers here.
          </AdminText>
        </AdminLeft>
        <AdminRight>
          <DashboardLink to="/login">Back to dashboard</DashboardLink>
        </AdminRight>
      </AdminHead>
      <Task to="/newestablishment">
        <BsPlusSquare size="40" fill="black" />
        <TaskText>New Establishment</TaskText>
      </Task>
      {props.establishments.map((establishment) => {
        return (
          <Card key={establishment.id}>
            <ContactInfo>
              <CardH2>Contact Info:</CardH2>
              <CardText>{establishment.name}</CardText>
              <CardText>{establishment.email}</CardText>
            </ContactInfo>
            <CheckInDates>
              <CardH2>Details:</CardH2>
              <CardText>Max Guests: {establishment.maxGuests}</CardText>
              <CardText>Price per night: {establishment.price}</CardText>
            </CheckInDates>
            <CardLink>
              {loading === false && (
                <SmallLoader
                  type="Oval"
                  color="grey"
                  height={20}
                  width={20}
                  timeout={3000}
                />
              )}{" "}
              <Button onClick={() => handleClick(establishment.id)}>
                Delete
              </Button>
            </CardLink>
          </Card>
        );
      })}
    </CardWrap>
  );
}

export default AdminEstablishments;
