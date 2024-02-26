import styled from "styled-components";
import Lottie from "lottie-react";
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
  padding-left: 10px;
  padding-right: 20px;
  overflow: hidden;
 
`;
const WeatherOverview = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

const H2 = styled.h2`
  writing-mode: vertical-rl; /* Κείμενο κατακόρυφα, από δεξιά προς τα αριστερά */
  text-orientation: upright;
  letter-spacing: 5px;
  color: ${(props) =>
    !props.$isDayTime ? "var(--colour-white)" : "var(--colour-black)"};
`;

const DivIconWrapper = styled.div`
  border-top: 2px solid var(--colour-black);
  padding-top: 40px;
  max-width: 500px;
`;

const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
`;
const P = styled.p`
  color: ${(props) =>
    props.$isDayTime
      ? props.$check
        ? "var(--colour-gray)"
        : "var(--colour-white)"
      : "var(--colour-black)"};
`;
const Temp = styled.h1`
  color: ${(props) =>
    !props.$isDayTime ? "var(--colour-white)" : "var(--colour-black)"};
`;

const TempFeel = styled.h2`
  color: ${(props) =>
    !props.$isDayTime ? "var(--colour-white)" : "var(--colour-black)"};
`;

export default function CurrentWeather({ weatherData, isDayTime }) {
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
        <H2 $isDayTime={isDayTime}>{weatherData[0].weather[0].description}</H2>

        <DivIconWrapper>
          <Lottie
            animationData={getAnimatedIcon(
              weatherData[0].weather[0].id,
              isDayTime
            )}
            loop={true}
          />
        </DivIconWrapper>
      </WeatherOverview>

      <TemperatureWrapper>
        <P
          className="p--lg"
          $isDayTime={isDayTime}
          $check={weatherData[0].weather[0].main === "Clouds"}
        >
          TEMPERATURE
        </P>
        <Temp $isDayTime={isDayTime}>
          {Math.floor(weatherData[0].main.temp)}°C
        </Temp>
      </TemperatureWrapper>
      <TemperatureWrapper>
        <P
          className="p--lg"
          $isDayTime={isDayTime}
          $check={weatherData[0].weather[0].main === "Clouds"}
        >
          FEELS LIKE
        </P>
        <TempFeel $isDayTime={isDayTime}>
          {Math.floor(weatherData[0].main.feels_like)}°C
        </TempFeel>
      </TemperatureWrapper>
    </SectionCurrentWeather>
  );
}
