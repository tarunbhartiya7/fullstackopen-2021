import React, { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import axios from "axios"

const checkIfNameExist = (arr, str) =>
  arr.some((item) => item.name.trim() === str.trim())

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data)
    })
  }, [])

  const personsToShow = search
    ? persons.filter((person) =>
        person.name.trim().toLowerCase().includes(search.trim().toLowerCase())
      )
    : persons

  const addPerson = (newName, newNumber) => {
    if (checkIfNameExist(persons, newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
  }

  const handleSearch = (event) => setSearch(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
