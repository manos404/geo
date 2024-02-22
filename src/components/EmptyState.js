import React from "react";

import emptyIcon from "../images/emptyStateIcon.png";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;

  //padding:30px;
  // grid-row: 2/4;
  grid-column: 1/3;
  //border: 3px solid var(--colour-black);
`;
const Img = styled.img`
  width: calc(80%);
  // margin-left:50px;
  // margin-right:50px;

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
