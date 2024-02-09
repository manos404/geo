import React from "react";
import styled from "styled-components";
import aaa from "../images/mini-icons/day/clear.png";

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
  // justify-content: space-between;
  padding-left: 10px;
  padding-right: 30px;
`;
const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function AllDayWeather({ list, isDayTime }) {
  console.log(list);

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

    return data.map((item) => {
      let time = item.dt_txt.substring(11, 16);
      let temp = item.main.temp;
      let tempFeel = item.main.feels_like;
      let icon=getIcon(item.weather[0].id,isDayTime)
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TemperatureWrapper>
            <p style={{ marginBottom: "6px" }}>{time}</p>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <h3 style={{ marginRight: "3px" }}>{Math.floor(temp) + "°"} </h3>
              <h3 style={{ borderRight: " 2px solid  black " }}> </h3>
              <h3 style={{ marginLeft: "3px" }}>
                {" "}
                {Math.floor(tempFeel) + "°"}{" "}
              </h3>
            </div>
          </TemperatureWrapper>

          <img src={icon} />
        </div>
      );
    });
  }

  return <Section>{createH1ElementsFromArray(list)}</Section>;
}
