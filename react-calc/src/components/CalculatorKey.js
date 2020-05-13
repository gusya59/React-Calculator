import React from "react";

import "./CalculatorKey.css";
function CalculatorKey(props) {
  return (
    <button
      className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </button>
  );
}

export default CalculatorKey;
