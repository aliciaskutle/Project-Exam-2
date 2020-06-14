import React, { useState } from "react";
import Button from "../common/Button";
import StyledLink from "../common/StyledLink";
import styled from "styled-components";
import { deleteContactByID } from "./deleteContactByID";
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
  font-size: 1.2rem;
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
const ContactMessage = styled.div`
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
const StyledButton = styled(Button)`
  width: 130px;
`;
const StyledLoader = styled(Loader)`
  margin-bottom: 0.5rem;
  text-align: center;
`;

function ContactList(props) {
  const [loading, setLoading] = useState(true);

  function handleClick(id) {
    deleteContactByID(id)
      .then(() => {
        const newContacts = props.contacts.filter(
          (contact) => contact.id !== id
        );
        props.setContacts(newContacts);
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  }

  return (
    <CardWrap>
      <AdminHead>
        <AdminLeft>
          <H1>Messages</H1>
          <AdminText>Read messages from visitors here.</AdminText>
        </AdminLeft>
        <AdminRight>
          <Link to="/login">Back to dashboard</Link>
        </AdminRight>
      </AdminHead>

      {props.contacts.map((contact) => {
        return (
          <Card key={contact.id}>
            <ContactInfo>
              <CardH2>Contact Info:</CardH2>
              <CardText>{contact.name}</CardText>
              <CardText>{contact.email}</CardText>
            </ContactInfo>
            <ContactMessage>
              <CardH2>Message:</CardH2>
              <CardText>{contact.message}</CardText>
            </ContactMessage>
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
              <StyledButton onClick={() => handleClick(contact.id)}>
                Delete
              </StyledButton>
            </CardLink>
          </Card>
        );
      })}
    </CardWrap>
  );
}

export default ContactList;
