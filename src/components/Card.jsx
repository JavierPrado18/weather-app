import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Card = () => {
  const [data, setData] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [isCelcius, setIsCelcius] = useState(true);
  const [nameBtn, setNameBtn] = useState(false);
  const [isSpinner, SetIsSpinner] = useState(true);

  useEffect(() => {
    

    const success = (pos) => {
      const crd = pos.coords;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=9b5611f4042a3499eb3e641321928079`
        )

        .then((res) => {
          setData(res.data);
          setTemperature((res.data.main.temp - 273.15).toFixed(2));
        })
        .finally(()=>SetIsSpinner(false))
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const convertTemperature = () => {
    if (isCelcius) {
      setTemperature((temperature * 1.8 + 32).toFixed(2));
      setIsCelcius(false);
      setNameBtn(true);
    } else {
      setTemperature(((temperature - 32) / 1.8).toFixed(2));
      setIsCelcius(true);
      setNameBtn(false);
    }
  };
  return isSpinner ? (
    <Spinner />
  ) : (
    <div className="card">
      <h2>Weather App</h2>
      <h4>
        {data.name} , {data.sys?.country}
      </h4>
      <div className="weather">
        
        <div>
          <img src={`http://openweathermap.org/img/wn/${data.weather?.[0].icon}@2x.png`}alt=""/>
        </div>

        <div>
          <p>"{data.weather?.[0].description}"</p>
          <p>
            <i className="fa-solid fa-wind"></i> Wind speed:{data.wind?.speed} m/s
          </p>
          <p>
            <i className="fa-solid fa-cloud"></i> Clouds: {data.clouds?.all} %
          </p>
          <p>
            <i className="fa-solid fa-earth-americas"></i> Pressure:{" "}
            {data.main?.pressure} hPa
          </p>
        </div>
      </div>
      <h2>
        <i className="fa-solid fa-temperature-half"></i> {temperature}°{" "}
        {isCelcius ? "C" : "F"}
      </h2>
      <button onClick={convertTemperature}>
        Degrees {nameBtn ? "Celcius" : "Fahrenheit"}
      </button>
    </div>
  );
};

export default Card;
