import React from "react";

function CounterButton(props) {
  return <button onClick={props.callback}>{props.label}</button>;
}

export default CounterButton;
