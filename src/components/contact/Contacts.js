import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import { getContacts } from "./getContacts";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledLoader = styled(Loader)`
  margin-top: 150px;
  text-align: center;
`;

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts()
      .then((json) => {
        setContacts(json);
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
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default Contacts;
