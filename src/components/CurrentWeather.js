import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;

  // flex-direction: column;
  justify-items: center;
  padding: 20px 50px 33px;
  border: 2px solid var(--colour-black);
`;

const H2 = styled.h2`
  grid-column: 1/2;
  width: 50px;
`;
const CurrentWeatherImage = styled.img`
  grid-column: 2/3;
  width: 250px;
  padding: 30px 50px;
`;

export default function CurrentWeather({ currentWeatherData }) {
  const text = currentWeatherData.weather;

  return (
    <Div>
      <div>
        {text.split("").map((letter, index) => (
          <H2 key={index} style={{ margin: "0", textAlign: "center" }}>
            {letter !== " " ? letter : "\u00A0"}
          </H2>
        ))}
      </div>

      <CurrentWeatherImage
        src="https://scontent.fher2-1.fna.fbcdn.net/v/t39.30808-6/419249872_399146042638928_6877712532934668813_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=X1zXI93sWA8AX8J1Ps9&_nc_ht=scontent.fher2-1.fna&oh=00_AfAXnh5Qfy1hWJ2p9t_AfJfbN4ck9olr4XhPm6Pwbdaa0A&oe=65AEDB0B"
        alt="Weather img"
      />
    </Div>
  );
}
