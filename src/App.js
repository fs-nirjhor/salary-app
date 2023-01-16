import "./App.css";
import Person from "./components/person/Person";
import Cart from "./components/cart/Cart";
import { useState, useEffect } from "react";
import personData from "./components/person/Person.json";

function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const newPersons = personData.sort(() => 0.5 - Math.random()).slice(0, 10);
    setPersons(newPersons);
  }, []);
  const [addedPersons, setAddedPersons] = useState([]);
  const addButtonHandler = (person) => {
    setAddedPersons([...addedPersons, person]);
  };
  return (
    <div className="App">
      <h1>SALARY APP</h1>
      <div className="container">
        <div>
          {persons.map((person) => (
            <Person
              person={person}
              addButtonHandler={addButtonHandler} 
              key={person.id} 
            ></Person>
          ))}
        </div>
        <Cart persons={addedPersons}></Cart>
      </div>
    </div>
  );
}

export default App;
