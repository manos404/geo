import React from "react";
import styled from "styled-components";
import aaa from "../images/mini-icons/day/clear.png";
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

export default function AllDayWeather({ list }) {
  console.log(list);
  return (
    <Section>
      <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between" }}>
        <TemperatureWrapper>
          <p style={{ marginBottom: "6px" }}>06:00</p>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <h3 style={{ marginRight: "3px" }}>11 </h3>
            <h3 style={{ borderRight: " 2px solid  black " }}> </h3>
            <h3 style={{ marginLeft: "3px" }}> 12 </h3>
          </div>
        </TemperatureWrapper>
        <div>
          <img src={aaa} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between" }}>

      <TemperatureWrapper>
        <p style={{ marginBottom: "6px" }}>09:00</p>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <h3 style={{ marginRight: "3px" }}>11 </h3>
          <h3 style={{ borderRight: " 2px solid  black " }}> </h3>
          <h3 style={{ marginLeft: "3px" }}> 12 </h3>
        </div>
      </TemperatureWrapper>
      <div>
        <img src={aaa} />
      </div>
      </div>
    </Section>
  );
}
