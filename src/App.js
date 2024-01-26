import "./styles/main.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import EmptyState from "./components/EmptyState";
import AllDayWeather from "./components/AllDayWeather";

const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 35px 1fr 1fr;
  border: 3px solid var(--colour-yellow);
  padding-top: 38px;
  background-color: var(--colour-beige);

  @media screen and (min-width: 600px) {
    padding-top: 59px;
  }
`;
function App() {
  const [weatherData, setWeatherData] = useState({ a: 0 });
  const [city, setCity] = useState("");
  console.log("app");
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=03743e7ef23f3b59fd9b137e2fe8a91e&units=metric`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed");
        }
        const fetchedData = await response.json();
        setWeatherData(fetchedData );
       // console.log(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  function createH1ElementsFromArray(weatherData) {
    const data=weatherData.list.slice(1, 8)
   // console.log( data );
    return data.map((item, index) => (
      <AllDayWeather key={index} list={item} /> 
       
    ));
  }

  return (
    <Section>
      <Search setCity={setCity} />

      {weatherData.a === 0 ? (
        <EmptyState />
      ) : (
        <CurrentWeather weatherData={weatherData}/> 
        // createH1ElementsFromArray(weatherData)
      )}
    </Section>
  );
}

export default App;
