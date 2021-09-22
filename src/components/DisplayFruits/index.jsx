import filterRedFruits from "../Filter";
import { useState } from "react";
// import { fruits, NewFruits } from "../FruitList";

export default function Display({ setColor }) {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitsOnMap = fruits.map((fruit, index) => {
    return <li key={index}>{fruit.name}</li>;
  });

  const totalPrice = fruits.reduce((acc, actual) => {
    return acc + actual.price;
  }, 0);

  return (
    <div>
      <h2>Preço total = {totalPrice}</h2>
      <ul>{fruitsOnMap}</ul>
      <button onClick={() => filterRedFruits(fruits, setFruits, setColor)}>
        Mostrar frutas vermelhas
      </button>
    </div>
  );
}
