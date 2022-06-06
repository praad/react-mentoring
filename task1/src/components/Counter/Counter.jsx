import React, { useState } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h2>Example Counter</h2>
      <CounterButton callback={decrement} label="-"></CounterButton>
      <div className="counterDisplay">{counter}</div>
      <CounterButton callback={increment} label="+"></CounterButton>
    </div>
  );
}

export default Counter;
