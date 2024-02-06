import { useState } from "react";
import styled from "styled-components";
import sss from "../images/clearLargeDay.png";
import Lottie from "lottie-react";
import WeatherState from "./WeatherState";

import clearDayAnim from "../images/animated-icons/day/clear.json";
import cloudyDayAnim from "../images/animated-icons/day/cloudy.json";
import foggyDayAnim from "../images/animated-icons/day/foggy.json";
import rainyDayAnim from "../images/animated-icons/day/rainy.json";
import snowyDayAnim from "../images/animated-icons/day/snowy.json";
import stormyDayAnim from "../images/animated-icons/day/stormy.json";
import veryCloudyDayAnim from "../images/animated-icons/day/very_cloudy.json";
import veryRainyDayAnim from "../images/animated-icons/day/very_rainy.json";

import clearNightAnim from "../images/animated-icons/night/clear.json";
import cloudyNightAnim from "../images/animated-icons/night/cloudy.json";
import foggyNightAnim from "../images/animated-icons/night/foggy.json";
import rainyNightAnim from "../images/animated-icons/night/rainy.json";
import snowyNightAnim from "../images/animated-icons/night/snowy.json";
import stormyNightAnim from "../images/animated-icons/night/stormy.json";
import veryCloudyNightAnim from "../images/animated-icons/night/very_cloudy.json";
import veryRainyNightAnim from "../images/animated-icons/night/very_rainy.json";

const SectionCurrentWeather = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
 // width:100%;
  //padding-left:35px;
  //padding-right:35px;
  margin-left:10px;
  margin-right:30px;
`;
const WeatherOverview = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 40px;

  // grid-template-rows: auto 1fr 1fr;

  // padding: 10px;
  // border: 2px solid var(--colour-black);

  // //justify-content: space-around;

  // @media screen and (min-width: 600px) {
  //   margin-top: 64px;
  // }
  // @media screen and (min-width: 1200px) {
  //   max-width: 50%;
  // }
`;

const H2 = styled.h2`
  writing-mode: vertical-rl; /* Κείμενο κατακόρυφα, από δεξιά προς τα αριστερά */
  text-orientation: upright;
`;

const DivIconWrapper = styled.div`
  border-top: 2px solid var(--colour-black);
  padding-top: 40px;
 
`;

const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const P = styled.p`
  color: var(--colour-gray);
`;

export default function CurrentWeather({ weatherData, isDayTime }) {
  console.log(weatherData[0]);

  const getAnimatedIcon = (weatherId, isDayTime) => {
    if (weatherId > 200 && weatherId <= 232) {
      return isDayTime ? stormyDayAnim : stormyNightAnim;
    } else if (weatherId > 300 && weatherId <= 501) {
      return isDayTime ? rainyDayAnim : rainyNightAnim;
    } else if (weatherId > 501 && weatherId <= 531) {
      return isDayTime ? veryRainyDayAnim : veryRainyNightAnim;
    } else if (weatherId >= 600 && weatherId <= 622) {
      return isDayTime ? snowyDayAnim : snowyNightAnim;
    } else if (weatherId >= 701 && weatherId <= 781) {
      return isDayTime ? foggyDayAnim : foggyNightAnim;
    } else if (weatherId === 800) {
      return isDayTime ? clearDayAnim : snowyNightAnim;
    } else if (weatherId === 801 || weatherId === 802) {
      return isDayTime ? cloudyDayAnim : cloudyNightAnim;
    } else if (weatherId === 803 || weatherId === 804) {
      return isDayTime ? veryCloudyDayAnim : veryCloudyNightAnim;
    } else {
      return clearDayAnim;
    }
  };

  return (
    <SectionCurrentWeather>
      <WeatherOverview>
        <H2>{weatherData[0].weather[0].description}</H2>

        <DivIconWrapper>
          <Lottie
            animationData={getAnimatedIcon(weatherData[0].weather[0].id,isDayTime)}
            loop={true}
          />
        </DivIconWrapper>
      </WeatherOverview>

      <Temp>
        <P> TEMPERATURE</P>
        <h1>{Math.floor(weatherData[0].main.temp)}°C</h1>
      </Temp>
      <Temp>
        <P> FEELS LIKE</P>
        <h2>{Math.floor(weatherData[0].main.feels_like)}°C</h2>
      </Temp>
    </SectionCurrentWeather>
  );
}
