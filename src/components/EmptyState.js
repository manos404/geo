import React from "react";

import emptyIcon from "../images/emptyStateIcon.png";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  grid-column: 1/3;
`;
const Img = styled.img`
  width: calc(80%);

  @media screen and (min-width: 600px) {
    width: 100%;
    max-width: 500px;
  }
`;

export default function EmptyState() {
  return (
    <Wrapper>  
      <Img src={emptyIcon} />
      <h2>Search for a city</h2>
    </Wrapper>
  );
}
