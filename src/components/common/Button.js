import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  outline: none;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    rgba(255, 58, 62, 1) 0%,
    rgba(255, 87, 29, 1) 57%,
    rgba(255, 112, 0, 1) 100%
  );
  border-radius: 20px;
  border-style: none;
  color: black;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    background: #e43337;
    cursor: pointer;
  }
`;

export default Button;
