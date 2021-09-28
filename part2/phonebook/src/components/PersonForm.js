import React, { useState } from "react"

const PersonForm = ({ addPerson }) => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    addPerson(newName, newNumber)

    setNewName("")
    setNewNumber("")
  }

  const handleNoteChange = (event) => setNewName(event.target.value.trim())

  const handlePhoneNumberChange = (event) =>
    setNewNumber(event.target.value.trim())

  return (
    <>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm
