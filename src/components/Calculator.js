import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">
        <span>0</span>
      </div>
      <div className="keypad">
        <div className="row">
          <button type="button" className="key">AC</button>
          <button type="button" className="key">+/-</button>
          <button type="button" className="key">%</button>
          <button type="button" className="key operator">÷</button>
        </div>
        <div className="row">
          <button type="button" className="key">7</button>
          <button type="button" className="key">8</button>
          <button type="button" className="key">9</button>
          <button type="button" className="key operator">x</button>
        </div>
        <div className="row">
          <button type="button" className="key">4</button>
          <button type="button" className="key">5</button>
          <button type="button" className="key">6</button>
          <button type="button" className="key operator">-</button>
        </div>
        <div className="row">
          <button type="button" className="key">1</button>
          <button type="button" className="key">2</button>
          <button type="button" className="key">3</button>
          <button type="button" className="key operator">+</button>
        </div>
        <div className="row">
          <button type="button" className="key zero">0</button>
          <button type="button" className="key">.</button>
          <button type="button" className="key operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
