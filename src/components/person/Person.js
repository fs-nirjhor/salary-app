import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import "./Person.css";
import { useState } from "react";

const Person = (props) => {
  const {person, addButtonHandler} = props;
  const [info, setInfo] = useState("");
  const infoButtonHandler = () => {
    const newInfo = (
      <div>
        <p>Company: {person.company}</p>
        <p>Address: {person.address}</p>
        <p>Country: {person.country}</p>
      </div>
    );
    setInfo(newInfo);
  };
  return (
    <div>
      <div className="person">
        <div className="photo-box">
          <img src={person.photo} alt="loading.." />
        </div>
        <div className="info-box">
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>
          <p>{info}</p>
          <b>Salary: ${person.salary}</b> <br />
          <button onClick={() => addButtonHandler(person)}>
            <FontAwesomeIcon icon={faUserPlus} /> Add
          </button>
          <button onClick={infoButtonHandler}>
            <FontAwesomeIcon icon={faEye} /> Show Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Person;
