import axios from "axios"
import React, { useEffect, useState } from "react"

const Details = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name.common}`
      )
      .then((response) => {
        setWeather(response.data)
      })
  }, [country.name.common])

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>population {country.area}</p>
      <h2>Spoken languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div style={{ fontSize: "150px" }}>{country.flag}</div>
      {weather && (
        <>
          <h2>Weather in {country.name.common}</h2>
          <p>temperature: {weather.current.temperature}</p>
          <img
            src={weather.current.weather_icons[0]}
            alt={weather.current.weather_descriptions[0]}
          />
          <p>
            wind: {weather.current.wind_speed} mph direction{" "}
            {weather.current.wind_dir}
          </p>
        </>
      )}
    </>
  )
}

export default Details
