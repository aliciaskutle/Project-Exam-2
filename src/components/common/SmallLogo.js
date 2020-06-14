import React from "react";
import styled from "styled-components";

const Line = styled.line`
  fill: none;
  stroke: rgba(255, 112, 0);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-miterlimit: 10;
`;

function SmallLogo() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 60 80"
      enableBackground="new 0 0 60 80"
      xmlSpace="preserve"
      width="45px"
      height="60px"
    >
      <Line x1="24.98" y1="72.49" x2="24.98" y2="54.49" />
      <Line x1="33.98" y1="72.49" x2="33.98" y2="54.49" />
      <Line x1="15.98" y1="72.49" x2="24.98" y2="72.49" />
      <Line x1="15.98" y1="27.49" x2="15.98" y2="72.49" />
      <Line x1="42.93" y1="32.15" x2="42.98" y2="72.49" />
      <Line x1="33.98" y1="72.49" x2="42.98" y2="72.49" />
      <Line x1="15.98" y1="27.49" x2="29.48" y2="6.49" />
      <Line x1="42.98" y1="27.49" x2="29.48" y2="6.49" />
      <Line x1="24.98" y1="54.49" x2="33.98" y2="54.49" />
      <Line x1="24.98" y1="45.49" x2="33.98" y2="45.49" />
      <Line x1="24.98" y1="27.49" x2="24.98" y2="45.49" />
      <Line x1="29.48" y1="20.49" x2="24.98" y2="27.49" />
      <Line x1="33.98" y1="27.49" x2="29.48" y2="20.49" />
      <Line x1="33.93" y1="32.15" x2="33.98" y2="45.49" />
      <Line x1="33.98" y1="27.49" x2="42.98" y2="27.49" />
      <Line x1="33.93" y1="32.15" x2="42.93" y2="32.15" />
    </svg>
  );
}

export default SmallLogo;
