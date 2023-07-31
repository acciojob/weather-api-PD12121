//your JS code here. If required.
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeatherData = async () => {
    const apiKey = "baa40a126abbcc7962fb12f7fc4df0bf";
    const city = "london";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setWeather(response.data.weather[0].main);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchWeatherData}>Get Current Weather</button>
      {weather && (
        <div id="weatherData">
          Current weather in London: {weather}
        </div>
      )}
    </div>
  );
};

export default App;
