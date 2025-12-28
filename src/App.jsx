import axios from 'axios'
import { useState,useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filterName,setFilterName] = useState('')
  
  useEffect(() =>  {
  axios.get('http://localhost:3001/persons')
  .then(response => {
    console.log('promise completed')
    setPersons(response.data)
  })},[])

  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.some(person => person.name === newName)
    if (duplicate) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = { name:newName,number:newNumber,id:persons.length+1 }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter : <input onChange={(e) => setFilterName(e.target.value)}></input>
      </div>
      <h2>Add New Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
          
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person =>
        <p key={person.id}>{person.name} {person.number}</p>
      )}
      <div>
        debug: {newName}
      </div>
    </div>
  )
}

export default App