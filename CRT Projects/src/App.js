import React, { useState } from "react";
import "./App.css";

function App() {
  const [choice, setChoice] = useState("");   // menu choice
  const [input, setInput] = useState("");     // temperature input
  const [result, setResult] = useState(null); // output
  const [showMenu, setShowMenu] = useState(true); // show/hide menu

  const convert = () => {
    let res;

    if (choice === "1") {
      // Celsius to Fahrenheit
      res = (input * 9/5) + 32;
      setResult(`${input} °C = ${res.toFixed(2)} °F`);
    } 
    else if (choice === "2") {
      // Fahrenheit to Celsius
      res = (input - 32) * 5/9;
      setResult(`${input} °F = ${res.toFixed(2)} °C`);
    }
  };

  const resetProgram = () => {
    setChoice("");
    setInput("");
    setResult(null);
    setShowMenu(true);
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>

      {showMenu && (
        <>
          <h3>Menu</h3>
          <p>1. Celsius → Fahrenheit</p>
          <p>2. Fahrenheit → Celsius</p>

          <input
            type="number"
            placeholder="Enter choice (1 or 2)"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter temperature"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <br /><br />

          <button onClick={convert}>Convert</button>
        </>
      )}

      {result && (
        <>
          <h2>{result}</h2>

          <p>Do you want to continue?</p>

          <button onClick={resetProgram}>Yes</button>
          <button onClick={() => setShowMenu(false)}>No</button>
        </>
      )}
    </div>
  );
}

export default App;