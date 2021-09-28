import React from "react"
import Country from "./Country"

const Countries = ({ countries, setSelected }) => {
  return (
    <ul>
      {countries.map((country) => (
        <Country
          key={country.name.common}
          country={country}
          setSelected={setSelected}
        />
      ))}
    </ul>
  )
}

export default Countries
