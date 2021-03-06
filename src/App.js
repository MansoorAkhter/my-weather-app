import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cityInput, setCityInput] = useState("");

  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState("");
  const [degree, setdegree] = useState("");
  const [countryName, setcountryName] = useState("");
  const [windSpeed, setwindSpeed] = useState("");
  const [realFeel, setrealFeel] = useState("");
  const [minTemp, setminTemp] = useState("");
  const [maxTemp, setmaxTemp] = useState("");
  const [air, setair] = useState("");
  const [humidity, sethumidity] = useState("");
  // const [location, setlocation] = useState(null);

  useEffect(() => {
    // setlocation(completeResponse);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=40ed58a2765c4a602efac457943bedcc&units=metric`
      )
      .then((resp) => {
        console.log("Response: ", resp.data);
        const completeResponse = resp.data;

        setCityName(completeResponse.name);
        setWeather(completeResponse.weather[0].main);
        setdegree(completeResponse.main.temp);
        setcountryName(completeResponse.sys.country);
        setwindSpeed(completeResponse.wind.speed);
        setrealFeel(completeResponse.main.feels_like);
        setminTemp(completeResponse.main.temp_min);
        setmaxTemp(completeResponse.main.temp_max);
        setair(completeResponse.main.pressure);
        sethumidity(completeResponse.main.humidity);
      });
  }, [cityInput]);

  return (
    <div className="App">
      <h1>Earth Weather</h1>
      
      <input
        type="text"
        name="cityName"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
      />

      <h3>Country: {countryName}</h3>
      <h3>City: {cityName}</h3>
      <h3>Current weather: {weather}</h3>
      <h3>Current temp:{Math.round(degree)} degree</h3>
      <h3>Wind speed: {Math.round(windSpeed)} km/h</h3>
      <h3>Real feel: {Math.round(realFeel)} degree</h3>
      <h3>Min-temp: {Math.round(minTemp)} degree</h3>
      <h3>Max-temp: {Math.round(maxTemp)} degree</h3>
      <h3>Air pressure: {air}</h3>
      <h3>Humidity: {Math.round(humidity)}%</h3>
      {/* <h3>{location}</h3> */}
    </div>
  );
}

export default App;
