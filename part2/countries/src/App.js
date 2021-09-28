import React, { useState, useEffect } from "react"
import axios from "axios"
import Details from "./components/Details"
import Countries from "./components/Countries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.com/v3/name/${search}`)
        .then((response) => {
          setCountries(response.data)
          setSelected(null)
        })
    }
  }, [search])

  const handleChange = (event) => setSearch(event.target.value.trim())

  return (
    <>
      <p>
        find countries <input value={search} onChange={handleChange} />
      </p>
      {countries.length > 1 && !selected && (
        <Countries countries={countries} setSelected={setSelected} />
      )}
      {countries.length === 1 && <Details country={countries[0]} />}
      {selected && <Details country={selected} />}
    </>
  )
}

export default App
