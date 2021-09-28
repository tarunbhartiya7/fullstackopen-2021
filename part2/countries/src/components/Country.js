import React from "react"

const Country = ({ country, setSelected }) => {
  return (
    <li>
      {country.name.common}{" "}
      <button
        onClick={() => {
          console.log("sdfdsfds")
          setSelected(country)
        }}
      >
        Show
      </button>
    </li>
  )
}

export default Country
