import axios from "axios";
import {useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [area, setArea] = useState("");
  const areas = {
    "01d":
      "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?cs=srgb&dl=pexels-francesco-ungaro-281260.jpg&fm=jpg",
    "01n":
      "https://images.pexels.com/photos/6510358/pexels-photo-6510358.jpeg?cs=srgb&dl=pexels-lachlan-ross-6510358.jpg&fm=jpg",
    "02d":
      "https://images.pexels.com/photos/12558609/pexels-photo-12558609.jpeg?cs=srgb&dl=pexels-orhan-badur-12558609.jpg&fm=jpg",
    "02n":
      "https://images.pexels.com/photos/10899691/pexels-photo-10899691.jpeg?cs=srgb&dl=pexels-osman-10899691.jpg&fm=jpg",
    "03d":
      "https://images.pexels.com/photos/12018451/pexels-photo-12018451.jpeg?cs=srgb&dl=pexels-%E6%9C%88%E4%BA%AE%E7%8B%82%E9%AD%94-12018451.jpg&fm=jpg",
    "03n":
      "https://images.pexels.com/photos/4601807/pexels-photo-4601807.jpeg?cs=srgb&dl=pexels-adonis-arias-4601807.jpg&fm=jpg",
    "04d":
      "https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-1227513.jpg&fm=jpg",
    "04n":
      "https://images.pexels.com/photos/11643462/pexels-photo-11643462.jpeg?cs=srgb&dl=pexels-gabii-fernandez-11643462.jpg&fm=jpg",
    "09d":
      "https://images.pexels.com/photos/1755702/pexels-photo-1755702.jpeg?cs=srgb&dl=pexels-guilherme-rossi-1755702.jpg&fm=jpg",
    "09n":
      "https://images.pexels.com/photos/543609/pexels-photo-543609.jpeg?cs=srgb&dl=pexels-ingo-joseph-543609.jpg&fm=jpg",
    "10d":
      "https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?cs=srgb&dl=pexels-genaro-serv%C3%ADn-763398.jpg&fm=jpg",
    "10n":
      "https://images.pexels.com/photos/3617453/pexels-photo-3617453.jpeg?cs=srgb&dl=pexels-benjamin-suter-3617453.jpg&fm=jpg",
    "11d":
      "https://images.pexels.com/photos/1051425/pexels-photo-1051425.jpeg?cs=srgb&dl=pexels-shiva-smyth-1051425.jpg&fm=jpg",
    "11n":
      "https://images.pexels.com/photos/3637060/pexels-photo-3637060.jpeg?cs=srgb&dl=pexels-alexandre-bringer-3637060.jpg&fm=jpg",
    "13d":
      "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?cs=srgb&dl=pexels-simon-berger-688660.jpg&fm=jpg",
    "13n":
      "https://images.pexels.com/photos/1717209/pexels-photo-1717209.jpeg?cs=srgb&dl=pexels-egor-kamelev-1717209.jpg&fm=jpg",
    "50d":
      "https://images.pexels.com/photos/3140809/pexels-photo-3140809.jpeg?cs=srgb&dl=pexels-tom-fisk-3140809.jpg&fm=jpg",
    "50n":
      "https://images.pexels.com/photos/4969836/pexels-photo-4969836.jpeg?cs=srgb&dl=pexels-maria-orlova-4969836.jpg&fm=jpg",
  };

  useEffect(() => {
    const success = (pos) => {
      const crd = pos.coords;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=9b5611f4042a3499eb3e641321928079`
        )
        .then((res) => {
          setArea(res.data.weather[0].icon);
        });
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  
  //para el cambio de fondo
  let background = "";
  for (let i in areas) {
    if (i == area) {
      background = areas[i];
    }
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Card />
    </div>
  );
}

export default App;
