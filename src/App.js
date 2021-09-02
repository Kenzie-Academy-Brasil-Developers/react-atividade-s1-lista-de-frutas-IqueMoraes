import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitsOnMap = fruits.map((fruit, index) => {
    return <li key={index}>{fruit.name}</li>;
  });

  function filterRedFruits() {
    setFruits(fruits.filter((fruit) => fruit.color === "red"));
    setColor("#790a0a");
  }

  const totalPrice = fruits.reduce((acc, actual) => {
    return acc + actual.price;
  }, 0);

  const [color, setColor] = useState("#282c34");

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <h2>Preço total = {totalPrice}</h2>
        <ul>{fruitsOnMap}</ul>
        <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
      </header>
    </div>
  );
}

export default App;
