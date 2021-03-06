import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`./assets/${firstDieResult}.png`);
  const secondDieImage = require(`./assets/${secondDieResult}.png`);

  function rollDice() {
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', margin: 20 }}>
        <span>Die1: {firstDieResult} Die2: {secondDieResult}</span>
        
        
          
        </div>
        <br></br>
        <span>{firstDieResult + secondDieResult}</span>
        <button className="button" onClick={rollDice}>Roll</button>
      </header>
    </div>
  );
}

export default App;
