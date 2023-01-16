import React from "react";
import "./Cart.css";
import { useState } from "react";

const Cart = (props) => {
  const persons = props.persons;
  const salary = persons.reduce(
    (currentPersons, person) => currentPersons + person.salary,
    0
  );
  const show = { display: "block" };
  const hide = { display: "none" };
  const [showStyle, setShowStyle] = useState(show);
  const [hideStyle, setHideStyle] = useState(hide);
  const payButtonHandler = () => {
    setShowStyle(hide);
    setHideStyle(show);
  };
  return (
    <div className="cart-box">
      <div style={showStyle}>
        <h2>Summary</h2>
        <p>Added Person: {persons.length}</p>
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
        <p>Total Salary: ${salary}</p>
        <button onClick={payButtonHandler}>Pay</button>
      </div>
      <div style={hideStyle}>
        <h2>Paid successfully!</h2>
      </div>
    </div>
  );
};

export default Cart;
