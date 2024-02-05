import React from "react";

import emptyIcon from "../images/emptyStateIcon.png";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  // grid-row: 2/4;
  border: 3px solid var(--colour-black);
`;

export default function EmptyState() {
  return (
    <Wrapper>
      <img style={{ width: "450px" }} src={emptyIcon} />

      <h2>Search for a city</h2>
    </Wrapper>
  );
}
