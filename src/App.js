import "./App.css";
import { useState } from "react";
import Display from "./components/DisplayFruits";

function App() {
  const [color, setColor] = useState("#282c34");

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <Display setColor={setColor} />
      </header>
    </div>
  );
}

export default App;
