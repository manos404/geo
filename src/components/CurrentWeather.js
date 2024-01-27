import { useState } from "react";
import styled from "styled-components";
import sss from "../images/clearLargeDay.png";

import WeatherState from "./WeatherState";

const Div = styled.div`
  display: grid;
  grid-column: 1/3;
  grid-template-rows: auto 1fr 1fr;
  width: 90%;

  min-width: 300px;
  //
  padding: 10px;
  border: 2px solid var(--colour-black);

  //justify-content: space-around;

  @media screen and (min-width: 600px) {
    margin-top: 64px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 50%;
  }
`;

const DivH2 = styled.div`
  writing-mode: vertical-rl; /* Κείμενο κατακόρυφα, από δεξιά προς τα αριστερά */
  text-orientation: upright;
  display: flex;
  flex-direction: column;
  width: 70px;
  border: 5px solid var(--colour-black);
  padding-bottom: 10px;
  justify-content: space-around;
`;
const H2 = styled.h2`
  margin: 0;
  text-align: center;

  @media screen and (min-width: 600px) {
    // margin-left: 71px;
  }
`;

// const CurrentWeatherImage = styled.img`
//   width: 100%;
//   min-width: 250px;
//   object-fit: cover;
//   margin-left: 10px;

//   @media screen and (min-width: 600px) {
//     margin-left: 30px;
//   }
// `;

const DivImg = styled.div`
  width: calc(90%);
  border: 3px solid var(--colour-black);
  grid-column: 2/3;

  // @media screen and (min-width: 600px) {
  //   width: calc(60%);
  // }
  // @media screen and (min-width: 850px) {
  //   width: calc(50%);
  // }
  // @media screen and (min-width: 1050px) {
  //   width: calc(40%);
  // }
  // @media screen and (min-width: 1300px) {
  //   width: calc(35%);
  // }
`;

const Img = styled.img`
  width: 100%;
`;
const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid var(--colour-black);
  grid-column: 1/3;
  width: 100%;
`;

export default function CurrentWeather({ weatherData }) {
  console.log(weatherData[0]);
  // console.log(weatherData.weather[0].main.temp);
  // console.log(weatherData.main.feels_like);

  return (
    <Div>
      <DivH2>
        <H2>{weatherData[0].weather[0].description}</H2>
      </DivH2>
      <DivImg>
        <WeatherState weatherId={weatherData[0].weather[0].id}/>
      </DivImg>
      <Temp>
        <p> TEMPERATURE</p>
        <h1>{Math.floor(weatherData[0].main.temp)}°C</h1>
      </Temp>
      <Temp>
        <p> FEELS LIKE</p>
        <h2>{Math.floor(weatherData[0].main.feels_like)}°C</h2>
      </Temp>
    </Div>
  );
}
