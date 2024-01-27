import clearLargeDay from "../images/clearLargeDay.png";
import clearLargeNight from "../images/clearLargeNight.png";
import cloudyLargeDay from "../images/cloudyLargeDay.png";
import cloudyLargeNight from "../images/cloudyLargeNight.png";
import foggyLargeDay from "../images/foggyLargeDay.png";
import foggyLargeNight from "../images/foggyLargeNight.png";
import rainyLargeDay from "../images/rainyLargeDay.png";
import rainyLargeNight from "../images/rainyLargeNight.png";
import snowyLargeDay from "../images/snowyLargeDay.png";
import snowyLargeNight from "../images/snowyLargeNight.png";
import stormyLargeDay from "../images/stormyLargeDay.png";
import stormyLargeNight from "../images/stormyLargeNight.png";
import veryCloudyLargeDay from "../images/veryCloudyLargeDay.png";
import veryCloudyLargeNight from "../images/veryCloudyLargeNight.png";
import veryRainyLargeDay from "../images/veryRainyLargeDay.png";
import veryRainyLargeNight from "../images/veryRainyLargeNight.png";

export default function WeatherState({ weatherId }) {
  if (weatherId > 200 && weatherId <= 232) {
    return <img src={stormyLargeDay} alt=" Image" />;
  } else if (weatherId > 300 && weatherId <= 501) {
    return <img src={rainyLargeDay} alt=" Image" />;
  } else if (weatherId > 501 && weatherId <= 531) {
    return <img src={veryRainyLargeDay} alt=" Image" />;
  } else if (weatherId === 800) {
    return <img src={clearLargeDay} alt=" Image" />;
  } else if (weatherId > 800 && weatherId <= 804) {
    return <img src={cloudyLargeDay} alt=" Image" />;
  } else {
    return <img src={clearLargeDay} alt=" Image" />;
  }
}
