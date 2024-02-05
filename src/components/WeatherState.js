// import clearLargeDay from "../images/clearLargeDay.png";
// import clearLargeNight from "../images/clearLargeNight.png";
// import cloudyLargeDay from "../images/cloudyLargeDay.png";
// import cloudyLargeNight from "../images/cloudyLargeNight.png";
// import foggyLargeDay from "../images/foggyLargeDay.png";
// import foggyLargeNight from "../images/foggyLargeNight.png";
// import rainyLargeDay from "../images/rainyLargeDay.png";
// import rainyLargeNight from "../images/rainyLargeNight.png";
// import snowyLargeDay from "../images/snowyLargeDay.png";
// import snowyLargeNight from "../images/snowyLargeNight.png";
// import stormyLargeDay from "../images/stormyLargeDay.png";
// import stormyLargeNight from "../images/stormyLargeNight.png";
// import veryCloudyLargeDay from "../images/veryCloudyLargeDay.png";
// import veryCloudyLargeNight from "../images/veryCloudyLargeNight.png";
// import veryRainyLargeDay from "../images/veryRainyLargeDay.png";
// import veryRainyLargeNight from "../images/veryRainyLargeNight.png";

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

import styled from "styled-components";

const Icon = styled.img`
  width: 100%;
`;

export default function WeatherState({ weatherId, isDayTime }) {
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
}

// export default function WeatherState({ weatherId }) {
//   if (weatherId > 200 && weatherId <= 232) {
//     return <Icon src={stormyLargeDay} alt=" Image" />;
//   } else if (weatherId > 300 && weatherId <= 501) {
//     return <Icon src={rainyLargeDay} alt=" Image" />;
//   } else if (weatherId > 501 && weatherId <= 531) {
//     return <Icon src={veryRainyLargeDay} alt=" Image" />;
//   } else if (weatherId >= 600 && weatherId <= 622) {
//     return <Icon src={snowyLargeDay} alt=" Image" />;
//   } else if (weatherId === 800) {
//     return <Icon src={clearLargeDay} alt=" Image" />;
//   } else if (weatherId > 800 && weatherId <= 804) {
//     return <Icon src={cloudyLargeDay} alt=" Image" />;
//   } else {
//     return <Icon src={clearLargeDay} alt=" Image" />;
//   }
// } //+foggy
