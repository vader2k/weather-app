import { useState } from 'react'


function App() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null)

  function getWeatherInfo() {
    const apikey = "45d229256e673d1f0863a87592018427";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;


    fetch (url) 
      .then((response) => response.json())
      .then((data) => {
        let MT = Math.round(data.main.temp)
        let FL = Math.round(data.main.feels_like)

        const weather = {
          location : `weather in ${data.name}`,
          temperature : `Temperature : ${MT} C`,
          feelsLike : `Feels like : ${FL} C`,
          humidity : `Humidity : ${data.main.humidity} %`,
          wind : `wind : ${data.wind.speed} km/h`,
          condition : `Weather Condition : ${data.weather[0].description}`
        }

        setWeatherInfo(weather)
      })


      // async function getWeatherInfo() {
      //   const apikey = "45d229256e673d1f0863a87592018427";
      //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
      
      //   try {
      //     const response = await fetch(url);
      
      //     if (!response.ok) {
      //       throw new Error(`HTTP error! Status: ${response.status}`);
      //     }
      
      //     const data = await response.json();
      
      //     let MT = Math.round(data.main.temp);
      //     let FL = Math.round(data.main.feels_like);
      
      //     const weather = {
      //       location: `Weather in ${data.name}`,
      //       temperature: `Temperature: ${MT}°C`,
      //       feelsLike: `Feels like: ${FL}°C`,
      //       humidity: `Humidity: ${data.main.humidity}%`,
      //       wind: `Wind: ${data.wind.speed} km/h`,
      //       condition: `Weather Condition: ${data.weather[0].description}`
      //     };
      
      //     setWeatherInfo(weather);
      //   } catch (error) {
      //     console.error("An error occurred while fetching weather data:", error);
      //   }
      // }
  }
  return (
    <>
      <div className='weather-container'>
          <input 
            type="text"
            placeholder='Enter a city name'
            value={city}
            onChange={(e)=> setCity(e.target.value)} />
            <button onClick={getWeatherInfo}>Get Weather</button>

            { weatherInfo && (
              <div className='weather-info'>
                    <h3>{weatherInfo.location}</h3>
                    <p>{weatherInfo.temperature}</p>
                    <p>{weatherInfo.feelsLike}</p>
                    <p>{weatherInfo.humidity}</p>
                    <p>{weatherInfo.wind}</p>
                    <p>{weatherInfo.condition}</p>
              </div>
            )}
      </div>
    </>
  )
}

export default App
