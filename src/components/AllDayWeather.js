import React from "react";
import styled from "styled-components";
import aaa from "../images/mini-icons/day/clear.png";
import { useMediaQuery } from "@mui/material";
import clearDay from "../images/mini-icons/day/clear.png";
import cloudyDay from "../images/mini-icons/day/cloudy.png";
import foggyDay from "../images/mini-icons/day/foggy.png";
import rainyDay from "../images/mini-icons/day/rainy.png";
import snowyDay from "../images/mini-icons/day/snowy.png";
import stormyDay from "../images/mini-icons/day/stormy.png";
import veryCloudyDay from "../images/mini-icons/day/very_cloudy.png";
import veryRainyDay from "../images/mini-icons/day/very_rainy.png";

import clearNight from "../images/mini-icons/night/clear.png";
import cloudyNight from "../images/mini-icons/night/cloudy.png";
import foggyNight from "../images/mini-icons/night/foggy.png";
import rainyNight from "../images/mini-icons/night/rainy.png";
import snowyNight from "../images/mini-icons/night/snowy.png";
import stormyNight from "../images/mini-icons/night/stormy.png";
import veryCloudyNight from "../images/mini-icons/night/very_cloudy.png";
import veryRainyNight from "../images/mini-icons/night/very_rainy.png";

const Section = styled.section`
  grid-row: 3/4;
  display: flex;
  margin-top: 15px;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1000px) {
    grid-row: 2/3;
    flex-direction: column;
    max-width: 350px;
    margin: auto;
  }
`;
const Wrapper = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;

  // align-items: center;

  @media screen and (min-width: 400px) {
  }

  @media screen and (min-width: 700px) {
    // background-color:red;
    flex-direction: column;

    justify-content: flex-start;
  }
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: center; ////
  }
`;
const TemperatureWrapper = styled.div`
  display: grid;

  // height: 90px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding-left: 15px;

  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    // grid-auto-flow: row; /* Αναδιατάσσει τα στοιχεία σε γραμμές */
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
const Time = styled.p`
  grid-column: 1/2;
  grid-row: 1/2;
  color: ${(props) =>
    props.$isDayTime
      ? props.$check
        ? "var(--colour-gray)"
        : "var(--colour-white)"
      : "var(--colour-black)"};
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: center;
    grid-row: 1/2;
  }
`;
const Temperature = styled.div`
  display: flex;
  justify-items: center;
  height: 30px;
  flex-direction: row;
  grid-column: 1/2;
  grid-row: 2/3;

  @media screen and (min-width: 700px) {
    grid-row: 3/4;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 1000px) {
    grid-column: 3/4;
    grid-row: 1/2;
    margin-left: 10px;
  }
`;
const H3 = styled.h3`
  color: ${(props) =>
    !props.$isDayTime ? "var(--colour-white)" : "var(--colour-black)"};
`;

const Img = styled.img`
  grid-column: 2/3;
  grid-row: 1/3;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 20px;

  @media screen and (min-width: 700px) {
    grid-row: 2/3;
    grid-column: 1/2;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    margin: auto;
  }
  @media screen and (min-width: 1000px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

export default function AllDayWeather({ list, isDayTime }) {
  const isWindowLessThan700 = useMediaQuery("(max-width:699px)");

  const getIcon = (weatherId, isDayTime) => {
    if (weatherId > 200 && weatherId <= 232) {
      return isDayTime ? stormyDay : stormyNight;
    } else if (weatherId > 300 && weatherId <= 501) {
      return isDayTime ? rainyDay : rainyNight;
    } else if (weatherId > 501 && weatherId <= 531) {
      return isDayTime ? veryRainyDay : veryRainyNight;
    } else if (weatherId >= 600 && weatherId <= 622) {
      return isDayTime ? snowyDay : snowyNight;
    } else if (weatherId >= 701 && weatherId <= 781) {
      return isDayTime ? foggyDay : foggyNight;
    } else if (weatherId === 800) {
      return isDayTime ? clearDay : snowyNight;
    } else if (weatherId === 801 || weatherId === 802) {
      return isDayTime ? cloudyDay : cloudyNight;
    } else if (weatherId === 803 || weatherId === 804) {
      return isDayTime ? veryCloudyDay : veryCloudyNight;
    } else {
      return clearDay;
    }
  };

  function createH1ElementsFromArray(list) {
    const data = list.slice(1, 8);

    return data.map((item, index) => {
      let time = item.dt_txt.substring(11, 16);
      let temp = item.main.temp;
      let tempFeel = item.main.feels_like;
      let icon = getIcon(item.weather[0].id, isDayTime);
      let color =
        index % 2 === 0
          ? getComputedStyle(document.documentElement).getPropertyValue(
              "--colour-white-transparent"
            )
          : "";
      return (
        <TemperatureWrapper
          style={{ backgroundColor: isWindowLessThan700 ? color : "" }}
        >
          <Time
            $isDayTime={isDayTime}
            $check={list[0].weather[0].main === "Clouds"}
          >
            {time}
          </Time>

          <Img src={icon} />

          <Temperature>
            <H3
              $isDayTime={isDayTime}
              style={{ marginRight: "3px", paddingTop: " 5px" }}
            >
              {Math.floor(temp) + " °"}
            </H3>
            <H3
              $isDayTime={isDayTime}
              style={{ borderRight: " 2px solid  black " }}
            ></H3>
            <H3
              $isDayTime={isDayTime}
              style={{ marginLeft: "3px", paddingTop: " 5px" }}
            >
              {Math.floor(tempFeel) + " °"}
            </H3>
          </Temperature>
        </TemperatureWrapper>
      );
    });
  }

  return <Section>{createH1ElementsFromArray(list)}</Section>;
}
