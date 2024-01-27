import React from "react";

import emptyIcon from "../images/emptyStateIcon.png";
import styled from "styled-components";

const Section = styled.section`
  grid-column: 1/3;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  border: 3px solid var(--colour-black);

  @media screen and (min-width: 600px) {
    margin-top: 30px;
  }
`;

const Div = styled.div`
  width: calc(80%);

  border: 3px solid var(--colour-black);

  @media screen and (min-width: 600px) {
    width: calc(60%);
  }
  @media screen and (min-width: 850px) {
    width: calc(50%);
  }
  @media screen and (min-width: 1050px) {
    width: calc(40%);
  }
  @media screen and (min-width: 1300px) {
    width: calc(35%);
  }
`;

const Img = styled.img`
  width: 100%;
`;

export default function EmptyState() {
  return (
    <Section>
      <Div>
        <Img src={emptyIcon} />
      </Div>
      <h2>Search for a city</h2>
    </Section>
  );
}
