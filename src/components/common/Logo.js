import React from "react";
import styled from "styled-components";

const Line = styled.line`
  fill: none;
  stroke: rgba(255, 112, 0);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-miterlimit: 10;
`;

const Path = styled.path`
  fill: none;
  stroke: #c96623;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-miterlimit: 10;
`;

const Text = styled.text`
  font-family: Rubik-Medium;
  font-size: 69.015px;
`;

function Logo() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 216 99"
      enableBackground="new 0 0 216 99"
      xmlSpace="preserve"
      width="150px"
      height="60px"
    >
      <Line x1="16.78" y1="86.66" x2="16.78" y2="65.96" />
      <Line x1="27.13" y1="86.66" x2="27.13" y2="65.96" />
      <Line x1="6.43" y1="86.66" x2="16.78" y2="86.66" />
      <Line x1="6.43" y1="34.91" x2="6.43" y2="86.66" />
      <Line x1="37.42" y1="40.27" x2="37.48" y2="86.66" />
      <Line x1="27.13" y1="86.66" x2="37.48" y2="86.66" />
      <Line x1="6.43" y1="34.91" x2="21.96" y2="10.76" />
      <Line x1="37.48" y1="34.91" x2="21.96" y2="10.76" />
      <Line x1="16.78" y1="65.96" x2="27.13" y2="65.96" />
      <Line x1="16.78" y1="55.61" x2="27.13" y2="55.61" />
      <Line x1="16.78" y1="34.91" x2="16.78" y2="55.61" />
      <Line x1="21.96" y1="26.86" x2="16.78" y2="34.91" />
      <Line x1="27.13" y1="34.91" x2="21.96" y2="26.86" />
      <Line x1="27.07" y1="40.27" x2="27.13" y2="55.61" />
      <Line x1="27.13" y1="34.91" x2="37.48" y2="34.91" />
      <Line x1="27.07" y1="40.27" x2="37.42" y2="40.27" />
      <Path d="M191.78-23.87" />
      <Text transform="matrix(0.5896 0 0 1 41.7407 87.7519)">OLIDAZE </Text>
    </svg>
  );
}

export default Logo;
