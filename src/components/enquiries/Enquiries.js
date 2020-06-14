import React, { useState, useEffect } from "react";
//import styled from "styled-components";
import EnquiryList from "../enquiries/EnquiryList";
import { getEnquiries } from "../enquiries/getEnquiries";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledLoader = styled(Loader)`
  margin-top: 150px;
  text-align: center;
`;

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEnquiries()
      .then((json) => {
        console.log(json);
        setEnquiries(json);
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
      <EnquiryList enquiries={enquiries} setEnquiries={setEnquiries} />
    </div>
  );
}

export default Enquiries;
