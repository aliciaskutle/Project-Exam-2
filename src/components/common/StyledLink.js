import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
display: inline-block;
outline: none;
color: black;
width: 180px;
height: 20px;
padding: 0.6rem 2rem;
margin: 1rem;
text-align: center;
text-decoration: none;
font-size: 16px;
text-transform: uppercase;
background: linear-gradient(
    90deg,
    rgba(255, 58, 62, 1) 0%,
    rgba(255, 87, 29, 1) 57%,
    rgba(255, 112, 0, 1) 100%
  );
border-radius: 20px;
color: black;
&:hover {
    background: #e43337;
    cursor: pointer;
  }
}`;

export default StyledLink;
