import "./styles/main.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import EmptyState from "./components/EmptyState";
import AllDayWeather from "./components/AllDayWeather";
 

const Section = styled.section`
  display: grid;
  // overflow: hidden;
  box-sizing: border-box;
  min-height: 100vh;

  max-width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr auto;

  padding-top: 30px;
  background-color: var(--colour-beige);

  @media screen and (min-width: 600px) {
    padding: 30px 60px 60px;
  }
  @media screen and (min-width: 768px) {
    grid-template-rows: 100px 3fr 1fr;
    padding: 30px 60px 60px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
    padding: 50px 100px 100px;
  }
`;

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isDayTime, setIsDayTime] = useState(true);
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=03743e7ef23f3b59fd9b137e2fe8a91e&units=metric`;

  function time1(dt, timezone, dttxt) {
    const format = "yyyy-MM-dd HH:mm:ss";
    const dateTime = DateTime.fromFormat(dttxt, format);
    console.log(dateTime);
    const hour = dateTime.hour;
    console.log(hour);
    setIsDayTime(hour >= Number("06") && hour < Number("21"));
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (city && city.length > 3) {
          const response = await fetch(endpoint);
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.message || `HTTP error! status: ${response.status}`
            );
          }
          setError(null);
          const fetchedData = await response.json();
          setWeatherData(fetchedData.list);
          console.log(fetchedData);
          let timezone = fetchedData.city.timezone;
          let dt = fetchedData.list[0].dt;
          let dtTxt = fetchedData.list[0].dt_txt;
          time1(dt, timezone, dtTxt);
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

  function getColor(weatherDescription) {
    const description = weatherDescription.toLowerCase();
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
      <Search
        city={city}
        setCity={setCity}
        error={error}
        isDayTime={isDayTime}
      />

      {weatherData && weatherData.length > 0 ? (
        <CurrentWeather weatherData={weatherData} isDayTime={isDayTime} />
      ) : (
        <EmptyState />
      )}
      {weatherData && weatherData.length > 0 && (
        <AllDayWeather list={weatherData} isDayTime={isDayTime} />
      )}
    </Section>
  );
}

export default App;
