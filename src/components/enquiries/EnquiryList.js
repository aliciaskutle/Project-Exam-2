import React, { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import StyledLink from "../common/StyledLink";
import { deleteEnquiryByID } from "./deleteEnquiryByID";
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
  margin: 80px auto 40px;
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
const AdminText = styled.p`
  color: black;
  font-size: 1.1rem;
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
  font-size: 1.2rem;
`;
const ContactInfo = styled.div`
  flex: 2;
`;
const CheckInDates = styled.div`
  flex: 3;
  @media (min-width: 767px) {
    margin: 0 0.5rem;
  }
`;
const CardText = styled.p``;
const CardLink = styled.div`
  flex: 1;
  margin: 3rem 0;
`;
const Link = styled(StyledLink)`
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
  margin-bottom: 0.5rem;
  text-align: center;
`;

function EnquiryList(props) {
  const [loading, setLoading] = useState(true);

  function handleClick(id) {
    deleteEnquiryByID(id)
      .then(() => {
        const newEnquiries = props.enquiries.filter(
          (enquiry) => enquiry.id !== id
        );
        props.setEnquiries(newEnquiries);
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  }

  return (
    <CardWrap>
      <AdminHead>
        <AdminLeft>
          <H1>Enquiries</H1>
          <AdminText>Administrate new enquiries from visitors here.</AdminText>
        </AdminLeft>
        <AdminRight>
          <Link to="/login">Back to dashboard</Link>
        </AdminRight>
      </AdminHead>

      {props.enquiries.map((enquiry) => {
        return (
          <Card key={enquiry.id}>
            <ContactInfo>
              <CardH2>Contact Info:</CardH2>
              <CardText>{enquiry.name}</CardText>
              <CardText>{enquiry.email}</CardText>
            </ContactInfo>
            <CheckInDates>
              <CardH2>Rental Dates:</CardH2>
              <CardText>Check-in: {enquiry.checkIn}</CardText>
              <CardText>Check-out: {enquiry.checkOut}</CardText>
            </CheckInDates>
            <CardLink>
              {loading === false && (
                <StyledLoader
                  type="Oval"
                  color="grey"
                  height={20}
                  width={20}
                  timeout={3000}
                />
              )}{" "}
              <Button onClick={() => handleClick(enquiry.id)}>Delete</Button>
            </CardLink>
          </Card>
        );
      })}
    </CardWrap>
  );
}

export default EnquiryList;
