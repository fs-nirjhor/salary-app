import './App.css';
import Person from "./components/person/Person";
import Cart from "./components/cart/Cart";
import { useState } from "react";

function App() {
  const [addedPersons, setAddedPersons] = useState([]);
  const addButtonHandler = (person) => {
    const newAddedPersons = [...addedPersons, person] ;
    setAddedPersons(newAddedPersons);
  };
  return (
    <div className="App">
      <h1>SALARY APP</h1>
    <div className="container">
      <Person addButtonHandler={addButtonHandler}></Person>
        <Cart persons={addedPersons}></Cart>
    </div>
    </div>
  );
}

export default App;
