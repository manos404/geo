import "./styles/main.css";
 
import Search from "./components/Search";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";

const Section = styled.section`
  display: grid;
  padding-top: 38px;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 1fr 1fr;

  @media screen and (min-width: 768px) {
    padding: 59px 101px;
  }
`;
function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState({
    weather: "",
    temp: 0.0,
    feel: 0.0,
  });

  console.log("app");

  console.log(currentWeatherData);
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=03743e7ef23f3b59fd9b137e2fe8a91e&units=metric`;
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Κάνουμε αίτηση στο JSONPlaceholder για τους χρήστες
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Failed");
        }

        const fetchedData = await response.json();
        console.log(fetchedData.list[0]);
        currentWeatherData.weather = fetchedData.list[0].weather[0].description;
        currentWeatherData.temp = fetchedData.list[0].main.temp;
        currentWeatherData.feel = fetchedData.list[0].main.feels_like;
        setCurrentWeatherData({
          weather: fetchedData.list[0].weather[0].description,
          temp: fetchedData.list[0].main.temp,
          feel: fetchedData.list[0].main.feels_like,
        });

        console.log(currentWeatherData);
        setWeatherData(fetchedData);
      } catch (error) {}
    };
    if (city) {
      fetchWeatherData();
    }
  }, [city]);
  console.log(currentWeatherData);
  return (
    <Section>
      <Search setCity={setCity} />
      {currentWeatherData.weather.length > 3 && (
        <CurrentWeather
          currentWeatherData={currentWeatherData}
        ></CurrentWeather>
      )}
    </Section>
  );
}

export default App;
