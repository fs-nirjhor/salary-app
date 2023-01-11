import React from 'react';
import personData from "./Person.json";
import "./Person.css";
import { useState, useEffect } from "react";

const Person = (props) => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
  const newPersons = personData.sort(() => 0.5 - Math.random()).slice(0,10) ;
  setPersons(newPersons);
  }, []);
return (
  <div>
 {
   persons.map( person => 
   <div className="person">
     <div className="photo-box">
       <img src={person.photo} alt="loading.." />
     </div>
     <div className="info-box">
     <h3>{person.name}</h3>
     <p>Age: {person.age}</p>
     <p>Email: {person.email}</p>
     <p>Phone: {person.phone}</p>
     <p>Address: {person.address}</p>
     <p>Country: {person.country}</p>
     <b>Salary: ${person.salary}</b> <br />
     <button onClick={() => props.addButtonHandler(person)} >➕ Add</button>
     </div>
   </div>
   )
 }
  </div>
);
};

export default Person;