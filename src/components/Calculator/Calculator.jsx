import React, { useReducer, useState } from "react";

const initValue = 0;
const UP_COUNT = "up";
const DOWN_COUNT = "down";
const DIVIDE = "devide";
const reducer = (state, action) => {
  switch (action.type) {
    case UP_COUNT:
      return state + 1;
    case DOWN_COUNT:
      return state - 1;
    case DIVIDE:
      return state / action.divisor;
    default:
      throw new Error("Invalid action");
  }
};

const Calculator = () => {
  const [count, dispatch] = useReducer(reducer, initValue);

  const handleReduce = () => {
    dispatch({ type: DOWN_COUNT });
  };

  const handleIncrease = () => {
    dispatch({ type: UP_COUNT });
  };

  const handleDivideConfirm = (e) => {
    const divisor = parseInt(prompt("Enter divisor:"));
    if (!isNaN(divisor) && divisor !== 0) {
      dispatch({ type: DIVIDE, divisor: divisor });
    } else {
      alert("Invalid divisor. Please enter a non-zero number.");
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleReduce} className="btn btn-secondary mt-4">
        Reduce
      </button>
      <br />
      <button onClick={handleIncrease} className="btn btn-secondary mt-4">
        Increase
      </button>
      <br />
      <button onClick={handleDivideConfirm} className="btn btn-danger mt-4">
        Divide
      </button>
    </div>
  );
};

export default Calculator;
