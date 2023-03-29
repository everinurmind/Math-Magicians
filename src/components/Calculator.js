import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Display from './Display';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(calculatorState, buttonName);
    setCalculatorState(newState);
  };

  return (
    <div className="calculator">
      <Display value={calculatorState.next || calculatorState.total || '0'} />
      <Display value={calculatorState.operation || ''} />
      <div className="keypad">
        <div className="row">
          <button type="button" className="key" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" className="key" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" className="key" onClick={() => handleClick('%')}>%</button>
          <button type="button" className="key operator" onClick={() => handleClick('÷')}>÷</button>
        </div>
        <div className="row">
          <button type="button" className="key" onClick={() => handleClick('7')}>7</button>
          <button type="button" className="key" onClick={() => handleClick('8')}>8</button>
          <button type="button" className="key" onClick={() => handleClick('9')}>9</button>
          <button type="button" className="key operator" onClick={() => handleClick('x')}>x</button>
        </div>
        <div className="row">
          <button type="button" className="key" onClick={() => handleClick('4')}>4</button>
          <button type="button" className="key" onClick={() => handleClick('5')}>5</button>
          <button type="button" className="key" onClick={() => handleClick('6')}>6</button>
          <button type="button" className="key operator" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button type="button" className="key" onClick={() => handleClick('1')}>1</button>
          <button type="button" className="key" onClick={() => handleClick('2')}>2</button>
          <button type="button" className="key" onClick={() => handleClick('3')}>3</button>
          <button type="button" className="key operator" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="row">
          <button type="button" className="key zero" onClick={() => handleClick('0')}>0</button>
          <button type="button" className="key" onClick={() => handleClick('.')}>.</button>
          <button type="button" className="key operator" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
