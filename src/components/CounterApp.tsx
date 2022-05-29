import * as React from "react";
import Counter from "./Counter";

export default function CounterApp() {
  return (
    <div>
      <React.StrictMode>
      <h1>Counter App</h1>
      <Counter />
      </React.StrictMode>
    </div>
  );
}
