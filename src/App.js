import "./styles/main.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import EmptyState from "./components/EmptyState";
import AllDayWeather from "./components/AllDayWeather";

const Section = styled.section`
  display: grid;
  //overflow: hidden;
  box-sizing: border-box;
  min-height: 100vh;
  max-width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 1fr;

  border: 3px solid var(--colour-yellow);
  padding-top: 30px;
  background-color: var(--colour-beige);

  @media screen and (min-width: 768px) {
    grid-template-rows: minmax(140px, 180px) 1fr 1fr;
    padding: 30px 60px 60px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 160px 1fr;
    padding: 50px 100px 100px;
  }
`;

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isDayTime, setIsDayTime] = useState(true);
  console.log("app");

  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=03743e7ef23f3b59fd9b137e2fe8a91e&units=metric`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (city && city.length > 3) {
          const response = await fetch(endpoint);
          if (!response.ok) {
            // Parse the JSON even in case of an HTTP error
            const errorData = await response.json();
            throw new Error(
              errorData.message || `HTTP error! status: ${response.status}`
            );
          }
          setError(null);
          const fetchedData = await response.json();
          setWeatherData(fetchedData.list);
          console.log("fetchedData");
          console.log(fetchedData);
        } else if (city && city.length <= 3) {
          setWeatherData([]);
          setError("The city must be longer than 3 characters.");
        } else {
          setWeatherData([]);
          setError(null);
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, [city]);

  useEffect(() => {
    isDayTimeAtDestination();
  }, [weatherData]);

  // function createH1ElementsFromArray(weatherData) {
  //   const data = weatherData.list.slice(1, 8);
  //   // console.log( data );
  //   return data.map((item, index) => <AllDayWeather key={index} list={item} />);
  // }

  const isDayTimeAtDestination = () => {
    // logic... use timezone etc.
    // const isDayTime = time >= Number("06") && time < Number("21");
    // console.log("isDayTime", isDayTime);

    // console.log("time in LA", format(new Date(1706734800), "MM/dd/yyyy"));
    // console.log("time in LA ISO", parseISO("2024-01-31 21:00:00"));

    //const timeDifference = weatherData?.city.timezone;
    // console.log("timeDifference", timeDifference);

    setIsDayTime(true);
  };

  function getColor(weatherDescription) {
    const description = weatherDescription.toLowerCase();
    console.log(isDayTime);
    if (isDayTime) {
      switch (description) {
        case "clear":
          return getComputedStyle(document.documentElement).getPropertyValue(
            "--colour-orange"
          );
        case "clouds":
          return getComputedStyle(document.documentElement).getPropertyValue(
            "--colour-beige"
          );
        case "rain":
        case "storm":
          return getComputedStyle(document.documentElement).getPropertyValue(
            "--colour-light-blue"
          );
        default:
          break;
      }
    } else {
      return getComputedStyle(document.documentElement).getPropertyValue(
        "--colour-night-blue"
      );
    }
  }

  return (
    <Section
      style={{
        backgroundColor: getColor(
          weatherData.length > 0 ? weatherData[0].weather[0].main : ""
        ),
      }}
    >
      <Search setCity={setCity} error={error} />

      {weatherData && weatherData.length > 0 ? (
        <CurrentWeather weatherData={weatherData} isDayTime={isDayTime} />
      ) : (
        <EmptyState />
        // createH1ElementsFromArray(weatherData)
      )}
    </Section>
  );
}

export default App;
