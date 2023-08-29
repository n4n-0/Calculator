import React, { useState } from 'react';
import './App.css'

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = function(event) {
    setInput(input + event.target.name);
  }

  const clearInput = () => {
    setInput('');
  }

  const calculateInput = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput('Error');
    }
  }

  return (
    <main className="main-container">
      {/* <h1>Calculator</h1> */}
      <div className="calculator-container">
        <input type="text" className="input-field" value={input} readOnly />
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="/" onClick={handleClick}>/</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="*" onClick={handleClick}>*</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button onClick={calculateInput}>=</button>
        <button name="+" onClick={handleClick}>+</button>
        <button onClick={clearInput}>C</button>
      </div>
    </main>
  )
}
